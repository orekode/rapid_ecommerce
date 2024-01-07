import { useCategories } from "@/api/categories/read"
import { CategoryGrid, NewCategory, Search } from "@/components"
import { useState } from "react";





const Categories = () => {

    const [ search, setSearch ] = useState<string>("");

    const { data } = useCategories({ search });

    const result = data?.data;



  return (

    <div>

        <NewCategory />        

        <Search.Lg callback={setSearch} placeholder="Search categories here.."/>

        <CategoryGrid data={result} />

    </div>

  )
}

export default Categories