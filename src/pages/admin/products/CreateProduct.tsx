import { createProduct } from "@/api/products/create";
import { Input, Btn, Upload, Loading, CategoryMultiSelect } from "@/components"
import PropertyGrid from "@/components/PropertyGrid";

import { ChangeEvent,  useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";




const CreateProduct = () => {


  const [formData, setFormData] = useState<Record<string, any>>({});

  const [errors, setErrors] = useState<Record<string, any>>({});

  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const queryClient = useQueryClient();





  const handleCreateProduct = async () => {

    setLoading(true);
    const result = await createProduct({ formData: {...formData, categories: formData?.categories?.map((item: { value: any; }) => item.value)} });
    setLoading(false);

    if (result[0]) {

      await Swal.fire({
        icon: 'success',
        title: "Product Created Successfully"
      })

      queryClient.invalidateQueries(["products"]);
      navigate('/admin/products');
      return true;
    }

    Swal.fire({
      icon: "error",
      title: "Unable To Create Product",
      text: "please check your inputs and try again"
    });

    setErrors(result[1]);

    document?.querySelector('.content-area > div')?.scrollTo(0,0);

    console.log(result);
  }



  useEffect(() => console.log(formData), [formData])

  return (
    <div>
      <Loading open={loading} />
      <div className="flex max-[800px]:flex-col items-center justify-center gap-6 bg-red-5 px-12 max-[1000px]:px-3  py-3">
        <div className="">
          <div className="h-[400px] w-[400px] max-[1000px]:h-[250px] max-[1000px]:w-[250px] border-2 border-gray-400 dark:border-neutral-800">
            <Upload.Image
              onUpload={(image: FileList) => setFormData({ ...formData, image: image[0] })}
              size="xs"
            />
          </div>
          <div className="text-xs text-red-400">{errors?.image}</div>
        </div>
        <div className="flex-grow max-[800px]:w-full">
          <div className="w-full form-control flex-col flex gap-1.5 ">
            <label className="text-sm">Name <span className="text-red-400">*</span></label>
            <Input.Base value={formData.name} onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: event.target.value })} extraClass="w-full text-lg" placeholder={'Type the "Category Name" here'} />
            <div className="text-xs text-red-400">{errors?.name}</div>
          </div>

          <div className="w-full form-control flex-col flex gap-1.5 mt-6">
            <label className="text-sm">Short Description <span className="text-red-400">*</span></label>
            <ReactQuill theme="snow" onChange={(value) => setFormData({ ...formData, short_description: value })} />
            <div className="text-xs text-red-400">{errors?.short_description}</div>
          </div>

          <div className="mt-6">
          </div>
        </div>
      </div>

      <div className="">
        <div className="text-xs text-red-400">{errors?.images}</div>
        <Upload.SlideImage errors={errors} onUpload={(images: Array<File | FileList>) => setFormData({...formData, images})} />
      </div>

      <CategoryMultiSelect 
        onSelect={(categories: any) => setFormData({...formData, categories})}
        error={errors?.categories} 
      />

      <div className="px-12 max-[1000px]:px-3  py-6">
        <div className="grid grid-cols-12 max-[650px]:grid-cols-4 gap-6">
          <div className="col-span-3">
            <div className="w-full form-control flex-col flex gap-1.5 ">
              <label className="text-sm">Price(ghc) <span className="text-red-400">*</span></label>
              <Input.Base value={formData.price} onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, price: event.target.value })} extraClass="w-full text-lg" placeholder={'e.g 2000'} />
              <div className="text-xs text-red-400">{errors?.price}</div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="w-full form-control flex-col flex gap-1.5 ">
              <label className="text-sm">Quantity <span className="text-red-400">*</span></label>
              <Input.Base value={formData.quantity} onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, quantity: event.target.value })} extraClass="w-full text-lg" placeholder={'e.g 12'} />
              <div className="text-xs text-red-400">{errors?.quantity}</div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="w-full form-control flex-col flex gap-1.5 ">
              <label className="text-sm">Discount Type</label>
              <Input.NativeSelect onChange={(event: ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, discount_type: event.target.value })}>
                <option value="percentage">Percentage (%)</option>
                <option value="fixed price">Fixed Price</option>
              </Input.NativeSelect>
              <div className="text-xs text-red-400">{errors?.discount_type}</div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="w-full form-control flex-col flex gap-1.5 ">
              <label className="text-sm">Discount Value</label>
              <Input.Base value={formData.discount_value} onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, discount_value: event.target.value })} extraClass="w-full text-lg" placeholder={'e.g 10'} />
              <div className="text-xs text-red-400">{errors?.discount_value}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-xs text-red-400">{errors?.properties}</div>
      <PropertyGrid init={[]} callback={(properties: any) => setFormData({ ...formData, properties })} />

      <div className="mt-6 w-full form-control flex-col flex gap-1.5 mt-Short6 px-12 max-[1000px]:px-3 ">
        <label className="text-sm">Long Description</label>
        <ReactQuill theme="snow" onChange={(value) => setFormData({ ...formData, long_description: value })} />
        <div className="text-xs text-red-400">{errors?.long_description}</div>
      </div>

      <div className=" w-full mt-6 ">
        <Btn.Sm onClick={handleCreateProduct} extraClass="w-full rounded-md ">Create Product</Btn.Sm>
      </div>
    </div>
  )
}

export default CreateProduct;