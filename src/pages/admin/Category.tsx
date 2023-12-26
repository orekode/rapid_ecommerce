import { useCategory } from "@/api/categories/read"
import { Card } from "@/components"
import { useParams } from "react-router-dom"

const Category = () => {

    const { id } = useParams()

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
                    </>
                }
                <Card.PearLoading load={!result} />
            </div>

            <div className="">
                <div className="flex-y-center gap-1 border-b dark:border-neutral-800 pt-12">
                    <div className="px-4 py-1.5 rounded-tl-md rounded-tr-md hover:bg-blue-600 hover:text-white">Sub Categories</div>
                    <div className="px-4 py-1.5 rounded-tl-md rounded-tr-md hover:bg-blue-600 hover:text-white">Products</div>
                </div>
            </div>
        </div>
    )
}

export default Category