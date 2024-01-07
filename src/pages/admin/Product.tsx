import { createProduct } from "@/api/products/create";
import { Scroll, Input, Btn, Upload, CategorySelect, Loading } from "@/components"
import { X } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const PropertyGrid = ({ callback = (x: any) => { x } }: { callback?: any }) => {

  const [properties, setProperties] = useState<Array<Record<string, any>>>([
    {}
  ]);


  const handleInsertProperty = (value: string, index: number, type = "title") => {
    const copyProp = [...properties];
    copyProp[index][type] = value;
    setProperties(copyProp);
  }

  const handleRemoveProperty = (index: number) => {
    const copyProp = [...properties];
    setProperties(copyProp.filter((_, i) => index !== i));
  }

  useEffect(() => {
    callback(properties);
  }, [properties])

  return (
    <div className="px-12 max-[1000px]:px-3  py-3">

      <Btn.Sm onClick={() => setProperties([...properties, {}])} extraClass="rounded-md">Add Property</Btn.Sm>

      <div className={`grid-box-250 ${properties.length > 0 ? "mt-6" : ""} gap-x-6 gap-y-6`}>

        {properties.map((item, index) =>
          <div key={index} className="relative">
            <Input.Base value={item.title || ""} onChange={(event: ChangeEvent<HTMLInputElement>) => handleInsertProperty(event.target.value, index)} extraClass="w-full text-xs mb-1.5" placeholder={'Property Name'} />
            <Input.Base value={item.value || ""} onChange={(event: ChangeEvent<HTMLInputElement>) => handleInsertProperty(event.target.value, index, 'value')} extraClass="w-full text-sm" placeholder={'Property Value'} />
            <div onClick={() => handleRemoveProperty(index)} className="absolute right-0 top-1/2 -translate-y-1/2 h-[25px] w-[25px] flex items-center justify-center rounded-full border-2 dark:border-neutral-800 dark:bg-[#111] hover:bg-red-500 text-white">
              <X size={15} />
            </div>
          </div>
        )}

      </div>
    </div>
  );

}

const Product = () => {


  const [formData, setFormData] = useState<Record<string, any>>({});

  const [errors, setErrors] = useState<Record<string, any>>({});

  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const handleImageUpload = (index: number, image: File | FileList) => {
    let images: Array<File | FileList> = [];

    if (formData.images) images = [...formData.images];

    images[index] = image;

    setFormData({ ...formData, images: images });
  }

  const handleImageRemove = (index: number) => {
    let images = [...formData.images];

    setFormData({ ...formData, images: images.filter((_, i) => index !== i) });
  }

  const handleCategory = (record: Record<string, any>) => {
    let categories: Record<string, any>[] = [];

    if (formData.categories) categories = [...formData.categories];

    categories.filter(item => item.value == record.value).length == 0 ?
      categories.push(record) :
      "";

    setFormData({ ...formData, categories });

  }

  const removeCategory = (value: any) => {
    let categories = [...formData.categories]

    categories = categories.filter(item => item.value !== value);

    setFormData({ ...formData, categories });
  }

  const handleCreateProduct = async () => {

    setLoading(true);
    const result = await createProduct({ formData: {...formData, categories: formData.categories.map((item: { value: any; }) => item.value)} });
    setLoading(false);

    if (result[0]) {

      await Swal.fire({
        icon: 'success',
        title: "Product Created Successfully"
      })

      queryClient.invalidateQueries(["products"]);
      // navigate('/admin/products');
      return true;
    }

    Swal.fire({
      icon: "error",
      title: "Unable To Create Product",
      text: "please check your inputs and try again"
    });

    setErrors(result[1]);

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
        <Scroll.SideBtns>
          {Array.from({ length: 5 }, (_, index) =>
            <div key={index} className="h-[150px] w-[150px] border-2 border-gray-400 dark:border-neutral-800">
              <Upload.Image
                onClear={() => handleImageRemove(index)}
                onUpload={(image: FileList) => handleImageUpload(index, image[0])}
                size="xs"
              />
              <div className="text-xs text-red-400">{errors[`images.${index}`]}</div>
            </div>
          )}
        </Scroll.SideBtns>
      </div>

      <div className="w-full form-control flex-col flex gap-1.5 px-12 max-[1000px]:px-3 ">
        <label className="text-sm">Category <span className="text-red-400">*</span></label>
        <CategorySelect onSelect={handleCategory} />
        <div className="text-xs text-red-400">{errors?.categories}</div>
        <div className={`flex flex-wrap gap-3 ${formData.categories && formData.categories.length > 0 ? "mt-3" : ""}`}>
          {formData.categories && formData.categories.map((item: Record<string, any>, index: number) =>
            <div key={index} className="px-3 py-1.5 rounded-md border text-xs flex items-center gap-3">
              <div className="">{item.label}</div>
              <div onClick={() => removeCategory(item.value)} className="  h-[25px] w-[25px] flex items-center justify-center rounded-full border-2 dark:border-neutral-800 dark:bg-[#111] hover:bg-red-500 text-white">
                <X size={15} />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="px-12 max-[1000px]:px-3  py-6">
        <div className="grid grid-cols-12 max-[650px]:grid-cols-4 gap-6">
          <div className="col-span-3">
            <div className="w-full form-control flex-col flex gap-1.5 ">
              <label className="text-sm">Price <span className="text-red-400">*</span></label>
              <Input.Base value={formData.price} onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, price: event.target.value })} extraClass="w-full text-lg" placeholder={'Price'} />
              <div className="text-xs text-red-400">{errors?.price}</div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="w-full form-control flex-col flex gap-1.5 ">
              <label className="text-sm">Quantity <span className="text-red-400">*</span></label>
              <Input.Base value={formData.quantity} onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, quantity: event.target.value })} extraClass="w-full text-lg" placeholder={'Price'} />
              <div className="text-xs text-red-400">{errors?.quantity}</div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="w-full form-control flex-col flex gap-1.5 ">
              <label className="text-sm">Discount Type</label>
              <Input.NativeSelect>
                <option>Percentage (%)</option>
                <option>Fixed Price</option>
              </Input.NativeSelect>
              <div className="text-xs text-red-400">{errors?.discount_type}</div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="w-full form-control flex-col flex gap-1.5 ">
              <label className="text-sm">Discount Value</label>
              <Input.Base value={formData.discount_value} onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, discount_value: event.target.value })} extraClass="w-full text-lg" placeholder={'Dicount Value'} />
              <div className="text-xs text-red-400">{errors?.discount_value}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-xs text-red-400">{errors?.properties}</div>
      <PropertyGrid callback={(properties: any) => setFormData({ ...formData, properties })} />

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

export default Product