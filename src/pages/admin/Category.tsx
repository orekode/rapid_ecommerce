import { useCategory } from "@/api/categories/read"
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "@/store/generalSlice";
import { updateCategory } from "@/api/categories/update";
import Swal from "sweetalert2";
import { useQueryClient } from "react-query";
import { Btn, Card, CategoryForm, CategoryProducts, SubCategories } from "@/components"
import { Trash } from "lucide-react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deleteCategory } from "@/api/categories/delete";

const Category = () => {

    const { id } = useParams()

    const [ activeTab, setActiveTab ] = useState<string>("sub_categories");

    const category_id: string | number = id ? id : 0;

    const { data } = useCategory({ id: category_id });

    const result = data?.data;

    const dispatch = useDispatch();

    const queryClient = useQueryClient();

    const navigate = useNavigate();

    const invalidate_queries = () => {
        queryClient.invalidateQueries(["categories"]);
        queryClient.invalidateQueries(['category', 'read', category_id ]);
        dispatch(stopLoading());

    }

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

        const result = await updateCategory({
            image: formData.image, 
            name: formData.name, 
            parent: formData.parent,
            id: category_id,
        });

        if(result[0]) {

            Swal.fire({
                title: 'Category Updated Successfully',
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

        invalidate_queries();

        return true;

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

        dispatch(startLoading());

        const result = await deleteCategory({ id: category_id })

        if(result[0]) {

            Swal.fire({
                title: 'Category Deleted Successfully',
                icon: 'success',
            })
            
        }
        
        else {
            Swal.fire({
                title: "Opps",
                text: 'category cannot be deleted at this time, please contact "Rapid support" or try again later',
                icon: 'error',
            });

            dispatch(stopLoading());

            return false;
            
        }

        invalidate_queries();

        navigate(-1);

        return true;
    }
    
    return (
        <div>
            <div className="w-max mx-auto">
                {result && 
                    <>
                        <Card.Pear image={result.image} title={""} />
                        <div className="font-bold text-2xl text-center">{result.category}</div>
                        <div className="flex justify-center gap-1.5 w-[100px] mx-auto mt-3">
                            
                            <CategoryForm 
                                trigger={
                                    <Btn.Sm extraClass="rounded-md flex-grow h-[30px] py-0">Edit</Btn.Sm>
                                }

                                initData={{
                                    image: result.image,
                                    name: result.category,
                                    category: result.parent,
                                }}

                                callback={handleSubmit}

                                btnText="Edit Category"
                            />

                            <Btn.Icon onClick={handleDelete} extraClass="bg-red-600 hover:bg-red-500 hover:border-red-500 h-[30px]">
                                <Trash size={20} />
                            </Btn.Icon>
                        </div>
                    </>
                }
                <Card.PearLoading load={!result} />
            </div>

            <div className="">
                <div className="flex-y-center gap-1 border-b dark:border-neutral-800 pt-12">
                    <div onClick={() => setActiveTab("sub_categories")} className={` ${activeTab == "sub_categories" ? "bg-blue-600" : ""} px-4 py-1.5 rounded-tl-md rounded-tr-md hover:bg-yellowy hover:text-white `}>Sub Categories</div>
                    <div onClick={() => setActiveTab("products")}       className={` ${activeTab == "products"       ? "bg-blue-600" : ""} px-4 py-1.5 rounded-tl-md rounded-tr-md hover:bg-yellowy hover:text-white `}>Products</div>
                </div>
            </div>

            {
                activeTab == "sub_categories" ? 
                    <SubCategories id={category_id} />
                :
                    <CategoryProducts />
            }


        </div>
    )
}

export default Category