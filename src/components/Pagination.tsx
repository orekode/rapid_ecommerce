import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

const Pagination = ({ meta, callback } : { meta: Record<string, any>, callback: any}) => {

    const [ page, setPage ] = useState<number>(1);

    const pageSize = meta?.last_page ? meta?.last_page : 0;

    useEffect(() => callback(page), [page]);

  return (
    <div className="flex justify-end mt-6">
        <div className="flex items-center gap-3">
            <div onClick={() => setPage(page <= 1 ? 1 : page - 1)} className="h-[40px] w-[40px] flex items-center justify-center rounded border">
                <ChevronLeft strokeWidth={1} size={30} />
            </div>

            <div className="max-w-[50vw] overflow-clip">
                <div className="flex items-center gap-3 w-max">
                    {Array.from({length: pageSize}, (_, item) => 
                        <div onClick={() => setPage(item + 1)} key={item} className={`${(item + 1) == meta?.current_page? "bg-blue-600" : ""} h-[40px] w-[40px] flex items-center justify-center rounded border`}>
                            {item + 1}
                        </div>
                    )}
                </div>
            </div>

            <div onClick={() => setPage(page >= pageSize ? pageSize : page + 1)} className="h-[40px] w-[40px] flex items-center justify-center rounded border">
                <ChevronRight strokeWidth={1} size={30} />
            </div>
        </div>
    </div>
  )
}

export default Pagination