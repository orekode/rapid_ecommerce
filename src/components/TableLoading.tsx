import { Skeleton } from "@mui/material"

const TableLoading = () => {
  return (
    <div>
        {Array.from({length: 10}, (_, index) => 
            <div key={index} className=" max-[700px]:flex-col  hover:bg-gray-100 dark:hover:bg-neutral-950 min-[700px]:my-3 active:scale-95 transition-all duration-300 table-head [& > .table-item:last-of-type]:border-r-0 flex border dark:border-neutral-800 rounded-md">
                <div className="table-item w-[80px] max-[700px]:w-full">
                    <div className="h-[60px] w-[60px] max-[700px]:w-full max-[700px]:h-[200px] rounded overflow-hidden">
                        <Skeleton style={{width: "100%", height: "100%", transform: "scale(1)"}} />
                    </div>
                </div>
                <div className="table-item w-[40%] max-[700px]:w-full">
                    <Skeleton style={{width: "100%", transform: "scale(1)"}} />
                </div>
                <div className="table-item sm flex-grow max-[700px]:w-full">
                    <Skeleton style={{width: "100%", transform: "scale(1)"}} />
                </div>
                <div className="table-item sm flex-grow max-[700px]:w-full">
                    <Skeleton style={{width: "100%", transform: "scale(1)"}} />
                </div>
                <div className="table-item sm max-[700px]:w-full">
                    <Skeleton style={{width: "100%", transform: "scale(1)"}} />
                </div>
            </div>
        )}
    </div>
  )
}

export default TableLoading