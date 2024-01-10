import { useTags } from "@/api/tags/read";
import { Btn, Search } from "@/components"
import { Skeleton } from "@mui/material";
import { Tag } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Tags = () => {

    const [ search, setSearch ] = useState<string>("");
    const [ page, setPage ] = useState<number>();

    const { data } = useTags({ page })

    const tags = data?.data;

    return (
      <div>

        <Link to={`/admin/tag/new`}>
          <Btn.Sm>New Tag</Btn.Sm>
        </Link>

        <Search.Lg placeholder="Search for products here..." callback={setSearch} />

        <div className="grid-box-200 gap-3 mt-6">
          {!tags && Array.from({length: 3}, (_, index) => 
            <div key={index} className="hover:dark:bg-[#111] hover:bg-gray-50 active:scale-90 transition-all duration-200 rounded-md border dark:border-neutral-800 w-[200px] p-6 flex flex-col items-center justify-center text-center">
              <Skeleton style={{width: "100%", height: "100%", transform: "scale(1)"}} />
            </div>
          )}

          {tags && tags.map((item: Record<string,any>, index: number) => 
          <div key={index} className="hover:dark:bg-[#111] hover:bg-gray-50 active:scale-90 transition-all duration-200 rounded-md border dark:border-neutral-800 w-[200px] p-6 flex flex-col items-center justify-center text-center">
            <Tag size={50}/>
            <div className="mt-6">{item.name}</div>
          </div>
          )}
        </div>
        
      </div>
    )
}

export default Tags