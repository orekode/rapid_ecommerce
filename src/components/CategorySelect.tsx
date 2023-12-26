import { useCategories } from "@/api/categories/read";
import { Input } from ".";
import { useState } from "react"
import { Debounce } from "@/utils";

const CategorySelect = ({ onSelect = (x: any) => {x} }) => {

    const [ search, setSearch ] = useState<string>("");
    const [ page, setPage ] = useState<number>(1)

    const { data } = useCategories({ search, page });

    const handleSearch = (search: string ) => {

        Debounce({ 
            callback: () => {
                setSearch(search);
                setPage(1);
            } 
        });

    }



    return (
        <div>
            <Input.Select 
                placeholder="Choose a parent category"
                options={data?.data}
                filter={ ({ category, id } : {category: string, id: number}) => ({label: category, value: id}) }
                onSearch={handleSearch}
                onSelect={onSelect}
                pages={data?.meta?.last_page}
                currentPage={page}
                setPage={setPage}
            />
        </div>
    )
}

export default CategorySelect