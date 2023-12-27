import { useCategory } from "@/api/categories/read"
import { Btn, Card, CategoryForm, CategoryProducts, SubCategories } from "@/components"
import { Trash } from "lucide-react"
import { useState } from "react"
import { useParams } from "react-router-dom"

const Category = () => {

    const { id } = useParams()

    const [ activeTab, setActiveTab ] = useState<string>("sub_categories");

    const category_id: string | number = id ? id : 0;

    const { data } = useCategory({ id: category_id });

    const result = data?.data
    
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

                                callback={() => {}}

                                btnText="Edit Category"
                            />

                            <Btn.Icon extraClass="bg-red-600 h-[30px]">
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