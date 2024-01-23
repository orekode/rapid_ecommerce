import { Btn, Card, Img, Logo, Mode, Scroll } from "@/components";
import { Search, ShoppingBag } from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Shop = () => {
  return (
    <div className=" ">

        <nav className="fixed top-0 left-0 w-full backdrop-blur-lg">
          <div className="px-24 py-3 flex items-center w-full max-w-[1224px] mx-auto">

            <Logo.Sm />

            <div className="search flex-grow flex items-center dark:bg-[#111] rounded-md shadow relative ">
              <input type="text" placeholder="Search for products here..." className="w-full bg-transparent h-[40px] rounded-md rounded-tr-none rounded-br-none border dark:border-[#111] px-6" />
              <Btn.Icon extraClass=" rounded-tl-none rounded-bl-none h-[40px] w-[40px] bg-blue-600 absolute top-1/2 right-0 -translate-y-1/2 ">
                <Search />
              </Btn.Icon>
            </div>

            <div className="flex items-end px-3 relative group mr-4 ml-3">
              <ShoppingBag />
              <div className="absolute -top-1 -right-0.5 h-[20px] w-[20px] text-xs flex-center rounded-full bg-red-600 group-hover:bg-yellowy">0</div>
            </div>

            <Mode />
          </div>


        </nav>

        <div className="mt-16 py-6 px-24 max-[1060px]:px-12">

          <div className="slide-box max-w-[1224px] mx-auto">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-8 max-[1060px]:col-span-12 h-[400px] rounded-md overflow-hidden bg-neutral-800">
                <Carousel interval={3000} infiniteLoop={true} showStatus={false} autoPlay={true}>
                  <div className="h-[400px]">
                    <img src="/images/laptop.webp" alt="" className="img-cover" />
                  </div>
                  <div className="h-[400px]">
                    <img src="/images/laptop2.webp" alt="" className="img-cover" />
                  </div>
                  <div className="h-[400px]">
                    <img src="/images/laptop3.webp" alt="" className="img-cover" />
                  </div>
                </Carousel>
              </div>
              <div className="grid grid-cols-1 col-span-4 max-[1060px]:col-span-12 max-[1060px]:grid-cols-2  gap-8">
                <div className="h-[184px] bg-neutral-800 rounded-md overflow-hidden">
                  <Carousel interval={3000} infiniteLoop={true} showStatus={false} autoPlay={true}>
                    <div className="h-[184px]">
                      <img src="/images/laptop.webp" alt="" className="img-cover" />
                    </div>
                    <div className="h-[184px]">
                      <img src="/images/laptop2.webp" alt="" className="img-cover" />
                    </div>
                    <div className="h-[184px]">
                      <img src="/images/laptop3.webp" alt="" className="img-cover" />
                    </div>
                  </Carousel>
                </div>
                <div className="h-[184px] bg-neutral-800 rounded-md overflow-hidden">
                  <Carousel interval={3000} infiniteLoop={true} showStatus={false} autoPlay={true}>
                    <div className="h-[184px]">
                      <img src="/images/laptop.webp" alt="" className="img-cover" />
                    </div>
                    <div className="h-[184px]">
                      <img src="/images/laptop2.webp" alt="" className="img-cover" />
                    </div>
                    <div className="h-[184px]">
                      <img src="/images/laptop3.webp" alt="" className="img-cover" />
                    </div>
                  </Carousel>
                </div>
              </div> 
            </div>
          </div>


          <div className="products py-12 grid-box max-[550px]:grid-cols-2 gap-6 max-[550px]:gap-3">
            {Array.from({length: 8}, (_, index) => 
                <Card.Product key={index} />
            )}
          </div>

          <div className="">
            <Scroll.TopBtns title={"This Week's Offers"}>
              {Array.from({length: 8}, (_, index) => 
                  <div className="border dark:border-neutral-800 w-[520px] max-[760]:w-[300px]" key={index}>
                    <div className="grid grid-cols-12">
                      <div className="col-span-5 border-r dark:border-neutral-800">
                        <div className="h-[220px] ">
                          <img src="/images/laptop.webp" alt="" className="img-cover" />
                        </div>
                      </div>
                      <div className="col-span-7">
                        <div className="p-6">
                          <div className="font-bold text-lg">This is the product name</div>

                          <div className="price my-3">
                            <span className="text-gray-500 line-through">$200</span> <span>$3000</span>
                          </div>

                          <div className="">
                            <div className="flex items-center justify-between text-xs">
                              <span>Already Sold: 12</span>
                              <span>Available: 6</span>
                            </div>
                            <div className="dark:bg-gray-800 h-3 rounded-xl mt-0.5">
                              <div className="h-full bg-blue-600 w-[80%] rounded-xl"></div>
                            </div>
                          </div>

                          <div className="grid grid-cols-12 mt-3 gap-3">
                            <div className="col-span-3">
                              <div className="h-[60px] dark:bg-gray-700 rounded-md text-center flex flex-col items-center justify-center">
                                <div className="text-lg leading-none">06</div>
                                <div className="text-xs leading-none">Days</div>
                              </div>
                            </div>

                            <div className="col-span-3">
                              <div className="h-[60px] dark:bg-gray-700 rounded-md text-center flex flex-col items-center justify-center">
                                <div className="text-lg leading-none">12</div>
                                <div className="text-xs leading-none">Hours</div>
                              </div>
                            </div>

                            <div className="col-span-3">
                              <div className="h-[60px] dark:bg-gray-700 rounded-md text-center flex flex-col items-center justify-center">
                                <div className="text-lg leading-none">59</div>
                                <div className="text-xs leading-none">Minutes</div>
                              </div>
                            </div>

                            <div className="col-span-3">
                              <div className="h-[60px] dark:bg-gray-700 rounded-md text-center flex flex-col items-center justify-center">
                                <div className="text-lg leading-none">40</div>
                                <div className="text-xs leading-none">Seconds</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              )}
            </Scroll.TopBtns>
          </div>
        </div>

    </div>
  )
}

export default Shop