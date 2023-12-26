import { useCategories } from "@/api/categories/read"
import { Btn, Card, Empty, NewCategory } from "@/components"
import { Input } from "@/components"
import { Debounce } from "@/utils"
import { Search } from "lucide-react"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"


interface Category {
    id: number | string,
    image: string,
    category: string,
}


const Categories = () => {

    const [ search, setSearch ] = useState<string>("");

    const { data, refetch } = useCategories({ search });

    const result = data?.data;

    const handleSearch = (event: ChangeEvent<HTMLInputElement> ) => {

        Debounce({ 
            callback: () => setSearch(event.target.value) 
        });

    }

    const navigate = useNavigate();


  return (

    <div>

        <NewCategory />        

        <div className="search-box flex h-[50px] my-3 gap-1.5">
            <Input.Base onChange={ handleSearch }/>
            <Btn.Icon onClick={ () => refetch() } extraClass="bg-blue-600 text-white  rounded-lg">
                <Search  />
            </Btn.Icon>
        </div>

        <div className=" grid-box-200 min-[800px]:[&>*]:scale-90 max-[500px]:grid-cols-2 gap-3 py-6 ">
            {!data?.data && Array.from({length: 10}, (_, index) => 
                <div key={index} className="scale">
                    <Card.PearLoading />
                </div>
            )}

            {result && result.map( ({image, category, id } : Category , index: number) => 
                <div key={index} className="scale">
                    <Card.Pear image={image} title={category} onClick={() => navigate('/admin/category/' + id)}  />
                </div>
            )}

        </div>
        <Empty load={result && result.length <= 0} />

    </div>

  )
}

export default Categories