import { Btn, Search } from "@/components"
import { Tag } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Tags = () => {

    const [ search, setSearch ] = useState<string>("");

    return (
      <div>

        <Link to={`/admin/tag/new`}>
          <Btn.Sm>New Tag</Btn.Sm>
        </Link>

        <Search.Lg placeholder="Search for products here..." callback={setSearch} />

        <div className="grid-box-200 gap-3 mt-6">
          {Array.from({length: 3}, (_, index) => 
            <div key={index} className="hover:dark:bg-[#111] hover:bg-gray-50 active:scale-90 transition-all duration-200 rounded-md border dark:border-neutral-800 w-[200px] p-6 flex flex-col items-center justify-center text-center">
              <Tag size={50}/>
              <div className="mt-6">name of the tag like best selling</div>
            </div>
          )}
        </div>
        
      </div>
    )
}

export default Tags