import { useState } from "react";
import { Btn, Input, Search } from "@/components"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {

    const [ search, setSearch ] = useState<string>("");

    return (
        <div>
            <div className="flex justify-between">
                <Link to={'/admin/product/new'}>
                    <Btn.Sm extraClass="rounded-md">New Product</Btn.Sm>
                </Link>

                <select defaultValue={"latest"} className="border dark:border-neutral-800 bg-transparent px-6 py-2 rounded-md">
                    <option className="dark:bg-black" value="latest">Latest</option>
                    <option className="dark:bg-black" value="old">Oldest</option>
                    <option className="dark:bg-black" value="high">High Price</option>
                    <option className="dark:bg-black" value="low">Low Price</option>
                </select>
            </div>
            <Search.Lg placeholder="Search for products here..." callback={setSearch} />

            <div className="div table w-full max-[700px]:grid grid-cols-2 max-[460px]:grid-cols-1 gap-3">

                <div className="mb-3 table-head [& > .table-item:last-of-type]:border-r-0 flex border dark:border-neutral-800 rounded-md max-[700px]:hidden">
                    <div className="table-item w-[80px]">Image</div>
                    <div className="table-item w-[40%]">Name</div>
                    <div className="table-item sm flex-grow">Price</div>
                    <div className="table-item sm flex-grow">Quantity</div>
                    <div className="table-item sm">Orders</div>
                </div>

                {Array.from({length: 10}, (_, index) => 
                    <div key={index} className=" max-[700px]:flex-col  hover:bg-gray-100 dark:hover:bg-neutral-950 min-[700px]:my-3 active:scale-95 transition-all duration-300 table-head [& > .table-item:last-of-type]:border-r-0 flex border dark:border-neutral-800 rounded-md">
                        <div className="table-item w-[80px] max-[700px]:w-full">
                            <div className="h-[60px] w-[60px] max-[700px]:w-full max-[700px]:h-[200px] rounded overflow-hidden">
                                <img src="/images/camera.jpg" className="img-cover" />
                            </div>
                        </div>
                        <div className="table-item w-[40%] max-[700px]:w-full">Acer 14" 32GB Chromebook 514 (Silver)</div>
                        <div className="table-item sm flex-grow max-[700px]:w-full">
                            <span className="min-[700px]:hidden bg-neutral-700 px-2 mr-2 rounded-full">Price:</span>
                            <span>Ghc 3200</span>
                        </div>
                        <div className="table-item sm flex-grow max-[700px]:w-full">
                            <span className="min-[700px]:hidden bg-neutral-700 px-2 mr-2 rounded-full">Quantity:</span>
                            <span>14</span>
                        </div>
                        <div className="table-item sm max-[700px]:w-full">
                            <span className="min-[700px]:hidden bg-neutral-700 px-2 mr-2 rounded-full">Orders:</span>
                            <span>3</span>
                        </div>
                    </div>
                )}

                <div className="flex justify-end">
                    <div className="flex items-center gap-3">
                        <div className="h-[40px] w-[40px] flex items-center justify-center rounded border">
                            <ChevronLeft strokeWidth={1} size={30} />
                        </div>

                        {Array.from({length: 10}, (_, item) => 
                            <div key={item} className="h-[40px] w-[40px] flex items-center justify-center rounded border">
                                {item}
                            </div>
                        )}

                        <div className="h-[40px] w-[40px] flex items-center justify-center rounded border">
                            <ChevronRight strokeWidth={1} size={30} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products