import { deleteProduct } from "@/api/products/delete";
import { useProduct } from "@/api/products/read";
import { updateProduct } from "@/api/products/update";
import { Input, Btn, Upload, Loading, CategoryMultiSelect } from "@/components"
import PropertyGrid from "@/components/PropertyGrid";
import { Trash } from "lucide-react";

import { ChangeEvent,  useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";




const UpdateProduct = () => {

  const { id } = useParams();

  const product_id = id ? id : "";

  const { data } = useProduct({ id: product_id });

  const [formData, setFormData] = useState<Record<string, any>>({});
  const [initData, setInitData] = useState<Record<string, any>>({});

  const [errors, setErrors] = useState<Record<string, any>>({});

  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const handleUpdateProduct = async () => {
    let previous_images = initData.images.filter( (item: string) => !formData.previous_images.includes(item) );
    
    setLoading(true);
    const result = await updateProduct({ formData: {
      ...formData, 
      categories: formData?.categories?.map((item: { value: any; }) => item.value),
      previous_images,
    }, 
      id: product_id,
    });
    setLoading(false);

    if (result[0]) {

      await Swal.fire({
        icon: 'success',
        title: "Product Updated Successfully"
      })

      queryClient.invalidateQueries(["products"]);
      navigate('/admin/products');
      return true;
    }

    Swal.fire({
      icon: "error",
      title: "Unable To Update Product",
      text: "please check your inputs and try again"
    });

    setErrors(result[1]);

    document?.querySelector('.content-area > div')?.scrollTo(0,0);

    console.log(result);
  }

  const handleDelete = async () => {

    const cofirmation = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    });
      
     
    if (!cofirmation.isConfirmed) return;

    setLoading(true);

    const result = await deleteProduct({ id: product_id })

    if(result[0]) {

        Swal.fire({
            title: 'Product Deleted Successfully',
            icon: 'success',
        })
        
    }
    
    else {
        Swal.fire({
            title: "Opps",
            text: 'Product cannot be deleted at this time, please contact "Rapid support" or try again later',
            icon: 'error',
        });

        setLoading(false);

        return false;
        
    }

    queryClient.invalidateQueries(["products"]);
    queryClient.invalidateQueries(["product"]);
    queryClient.invalidateQueries(["read"]);
    
    navigate(-1);

    return true;
  }

  useEffect(() => {
    setFormData({
      name:               data?.name,
      price:              data?.price,
      quantity:           data?.quantity,
      discount_type:      data?.discount_type,
      discount_value:     data?.discount_value,
      short_description:  data?.short_description,
      long_description:   data?.long_description,
      previous_images:    data?.images,
      categories:         data?.categories?.map((item: { category: string; id: number; }) => ({label: item.category, value: item.id})),

    });

    setInitData({
      image:      data?.image,
      images:     data?.images,
      properties: data?.properties,
    });
  }, [data])
  
  
  return (
    <div>
      <Loading open={loading || !data } />
      <div className="flex max-[800px]:flex-col items-center justify-center gap-6 bg-red-5 px-12 max-[1000px]:px-3  py-3">
        <div className="">
          <div className="h-[400px] w-[400px] max-[1000px]:h-[250px] max-[1000px]:w-[250px] border-2 border-gray-400 dark:border-neutral-800">
            <Upload.Image
              init={initData.image}
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
            <ReactQuill theme="snow" value={formData.short_description} onChange={(value) => setFormData({ ...formData, short_description: value })} />
            <div className="text-xs text-red-400">{errors?.short_description}</div>
          </div>

          <div className="mt-6">
          </div>
        </div>
      </div>

      <div className="">
        <div className="text-xs text-red-400">{errors?.images}</div>
        <Upload.SlideImage 
          init={initData?.images} errors={errors} 
          onUpload={(images: Array<File | FileList>) => setFormData({...formData, images})} 
          prevCallback={(images: Array<string>) => setFormData({...formData, previous_images: images})}
        />
      </div>

      <CategoryMultiSelect 
        placeholder="Choose a product category"
        error={errors?.categories} 
        onSelect={(categories: any) => setFormData({...formData, categories})}
        init={formData?.categories}
      />

      <div className="mt-3"></div>

      <CategoryMultiSelect 
        placeholder="Choose a product category"
        error={errors?.categories} 
        onSelect={(categories: any) => setFormData({...formData, categories})}
        init={formData?.categories}
      />

      <div className="mt-3"></div>

      <CategoryMultiSelect 
        placeholder="Choose a product category"
        error={errors?.categories} 
        onSelect={(categories: any) => setFormData({...formData, categories})}
        init={formData?.categories}
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
              <Input.NativeSelect defaultValue={formData.discount_type} onChange={(event: ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, discount_type: event.target.value })}>
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
      <PropertyGrid init={initData?.properties} callback={(properties: any) => setFormData({ ...formData, properties })} />

      <div className="mt-6 w-full form-control flex-col flex gap-1.5 mt-Short6 px-12 max-[1000px]:px-3 ">
        <label className="text-sm">Long Description</label>
        <ReactQuill value={formData.long_description} theme="snow" onChange={(value) => setFormData({ ...formData, long_description: value })} />
        <div className="text-xs text-red-400">{errors?.long_description}</div>
      </div>

      <div className=" w-full mt-6 flex items-center gap-0.5">
        <Btn.Sm onClick={handleUpdateProduct} extraClass="flex-grow rounded-md ">Update Product</Btn.Sm>
        <Btn.Icon onClick={handleDelete} extraClass="scale-75 bg-red-500 hover:bg-red-600 text-white" initial={{scale: 0.75}} whileTap={{scale: 0.65}}>
          <Trash />
        </Btn.Icon>
      </div>
    </div>
  )
}

export default UpdateProduct;