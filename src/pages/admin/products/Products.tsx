import { useState } from "react";
import { Btn, Pagination, Search, TableLoading } from "@/components"
import { Link } from "react-router-dom";
import { useProducts } from "@/api/products/read";

const Products = () => {

    const [ search, setSearch ] = useState<string>("");

    const [ page, setPage ] = useState<number>(1);

    const { data } = useProducts({ page });

    const products = data?.data;

    console.log(data);

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

                {!products && <TableLoading />}

                {products && products.map( (item: Record<string, any>, index: number) => 
                    <Link key={index} to={'/admin/products/' + item.id}>
                        <div className=" max-[700px]:flex-col  hover:bg-gray-100 dark:hover:bg-neutral-950 min-[700px]:my-3 active:scale-95 transition-all duration-300 table-head [& > .table-item:last-of-type]:border-r-0 flex border dark:border-neutral-800 rounded-md">
                            <div className="table-item w-[80px] max-[700px]:w-full">
                                <div className="h-[60px] w-[60px] max-[700px]:w-full max-[700px]:h-[200px] rounded overflow-hidden">
                                    <img src={item.image} className="img-cover" />
                                </div>
                            </div>
                            <div className="table-item w-[40%] max-[700px]:w-full">{item.name}</div>
                            <div className="table-item sm flex-grow max-[700px]:w-full">
                                <span className="min-[700px]:hidden bg-neutral-700 px-2 mr-2 rounded-full">Price:</span>
                                <span>Ghc {item.price}</span>
                            </div>
                            <div className="table-item sm flex-grow max-[700px]:w-full">
                                <span className="min-[700px]:hidden bg-neutral-700 px-2 mr-2 rounded-full">Quantity:</span>
                                <span>{item.quantity}</span>
                            </div>
                            <div className="table-item sm max-[700px]:w-full">
                                <span className="min-[700px]:hidden bg-neutral-700 px-2 mr-2 rounded-full">Orders:</span>
                                <span>3</span>
                            </div>
                        </div>
                    </Link>
                )}

            </div>

            <Pagination meta={data?.meta} callback={setPage} />
        </div>
    )
}

export default Products