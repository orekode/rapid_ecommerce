import { Backdrop, Btn, Input, Upload } from "@/components"
import { ChangeEvent, useState } from "react"
import CategorySelect from "./CategorySelect";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "@/store/generalSlice";
import { createCategory } from "@/api/categories/create";
import Swal from "sweetalert2";
import { useQueryClient } from "react-query";

const NewCategory = () => {

    const [ showForm, setShowForm ] = useState<boolean>(false);

    const [ formData, setFormData ] = useState<Record<string, any>>();

    const dispatch = useDispatch();

    const queryClient = useQueryClient();

    const handleSubmit = () => {

        dispatch(startLoading());

        if(!formData || !formData.image || !formData.name) {

            Swal.fire({
                title: 'Empty Inputs',
                text: 'Please provide a category image, category name and try again',
                icon: 'error',
            });

            dispatch(stopLoading());


            return false;
        }

        createCategory({
            image: formData.image, 
            name: formData.name, 
            parent: formData.parent
        }).then((result) => {

            if(result[0]) {
                Swal.fire({
                    title: 'Category Created Successfully',
                    icon: 'success',
                }).then(() => {
                    setShowForm(false);
                    queryClient.invalidateQueries(["categories"]);
                });
            }
            else {
                Swal.fire({
                    title: result[1],
                    text: 'Please provide a unique category image, category name and try again',
                    icon: 'error',
                });
                
            }

            dispatch(stopLoading());
        });


    }

  return (

    <>
    
        <div className="flex-y-center justify-between">
            <Btn.Sm onClick={() => setShowForm(true)} extraClass="rounded-md">New Category</Btn.Sm>
            {/* <h2>Categories</h2> */}
        </div>

        <Backdrop stateObj={[ showForm, setShowForm ]}>
            <div className="min-h-[500px] w-[500px] max-[550px]:w-full scale-95 bg-white dark:bg-neutral-800 rounded-md shadow p-12">

                <div className="mb-3 mx-auto h-[250px] w-[250px] border dark:border-neutral-600 pear-1 overflow-hidden">
                    <div className="h-full w-full flex-col flex-center">
                        <Upload.Image onUpload={(image: FileList) => setFormData({ ...formData, image: image[0] }) } />
                    </div>
                </div>

                <div className="w-full form-control flex-col flex gap-1.5 ">
                    <label className="text-sm">Category Name</label>
                    <Input.Base onChange={(event: ChangeEvent<HTMLInputElement> ) => setFormData({ ...formData, name: event.target.value })} extraClass="w-full" placeholder={'Type the "Category Name" here'} />
                </div>

                <div className="w-full form-control flex-col flex gap-1.5 mt-3">
                    <label className="text-sm">Parent Category</label>
                    <CategorySelect onSelect={(category) => setFormData({ ...formData, parent: category.value })}/>
                </div>

                <Btn.Sm onClick={handleSubmit} extraClass="w-full rounded-md mt-6">Create Category</Btn.Sm>

            </div>
        </Backdrop>
    </>
    
  )
}

export default NewCategory