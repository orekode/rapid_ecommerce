import { useCategories } from "@/api/categories/read";
import { Input } from "..";
import { useState } from "react"
import { Debounce } from "@/utils";

const CategorySelect = ({ init,  onSelect = (x: any) => {x}, placeholder="Choose a parent category" } : { init?: any, onSelect?: any, placeholder?: string}) => {

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
                placeholder={placeholder}
                options={data?.data}
                filter={ ({ category, id } : {category: string, id: number}) => ({label: category, value: id}) }
                onSearch={handleSearch}
                onSelect={onSelect}
                pages={data?.meta?.last_page}
                currentPage={page}
                setPage={setPage}
                init={init}
            />
        </div>
    )
}

export default CategorySelect