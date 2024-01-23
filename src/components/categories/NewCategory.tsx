import { Btn,  CategoryForm } from "@/components"
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "@/store/generalSlice";
import { createCategory } from "@/api/categories/create";
import Swal from "sweetalert2";
import { useQueryClient } from "react-query";

const NewCategory = () => {


    const dispatch = useDispatch();

    const queryClient = useQueryClient();

    const handleSubmit = async (formData: Record<string, any>) => {

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

        const result = await createCategory({
            image: formData.image, 
            name: formData.name, 
            parent: formData.parent
        });

        if(result[0]) {

            Swal.fire({
                title: 'Category Created Successfully',
                icon: 'success',
            })
            
        }
        
        else {
            Swal.fire({
                title: result[1],
                text: 'Please provide a unique category image, category name and try again',
                icon: 'error',
            });

            dispatch(stopLoading());

            return false;
            
        }

        queryClient.invalidateQueries(["categories"]);

        dispatch(stopLoading());

        return true;

    }

  return (

    <>
    
        <div className="flex-y-center justify-between">
            
            <CategoryForm 
                trigger={
                    <Btn.Sm extraClass="rounded-md">New Category</Btn.Sm>
                }

                callback={handleSubmit}
            />
        </div>

    </>
    
  )
}

export default NewCategory