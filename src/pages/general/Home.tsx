import { Btn, Card, CategoryScroll, Img, Scroll } from "@/components"
import Accordion from "@/components/Accordion"
import {  motion } from "framer-motion"
import { ShoppingBag, Star } from "lucide-react"


const Home = () => {


  return (
    <div className="">

      <header className="">
        <div className="relative z-0 overflow-hidden">

          <div className=" gap-6 pt-24 max-[760px]:backdrop-blur-sm max-[760px]:bg-opacity-20 max-[760px]:dark:bg-opacity-0 max-[760px]:bg-white grid grid-cols-10 max-[760px]:grid-cols-5 relative z-10 spacing">

            <div className="col-span-5 max-[890px]:col-span-6 py-12 max-[550px]:py-0 flex-center max-[890px]:max-w-[500px]">
              <div className="">
                <h1 className="text-6xl max-[1055px]:text-5xl max-[550px]:text-3xl "> <span className="text-blue-600">Amazing</span> Devices at Affordable <span className="text-blue-600">Prices</span></h1>
                <p className="py-3 max-[550px]:hidden">Your one stop shop for all your tech needs, browse our collection of products and find the best fit today</p>
                <div className="max-[550px]:mt-3">
                  <Btn.Md>Shop Now</Btn.Md>
                </div>
              </div>
            </div>

            <div className="col-span-5 max-[760px]:hidden max-[890px]:col-span-4 relative flex-center  ">

              {/* <Img.Contain src="/images/vr2.png" /> */}
              <Img.Contain src="/images/laptop.webp" />

            </div>

          </div>

          <div className="absolute  top-0 left-0 h-full w-full z-0 flex-center overflow-hidden font-black  dark:dark-text-outline text-outline ">
            {/* <div className="h-full w-full max-[760px]:block hidden">
              <Img.Cover src="/images/laptop.webp" />
            </div> */}
            <span className="max-[760px]:hidden">THE 
            RAPID CREW</span>
          </div>

          

        </div>
      </header>

      <section className="spacing pt-12 max-[550px]:pt-6 relative z-10">

        <CategoryScroll />
      </section>

      <section className="spacing pt-12">
        <div className=" text-center max-w-[500px] mx-auto">
          <h1 className="text-4xl">Trending This Season</h1>
          <p className="py-3 text-sm">
            We have made the ideal list of products for you to choose from,
            you want to see more? Visit the shop page to see all our products
          </p>
          <div className="w-max mx-auto">
            <Btn.Sm>Shop Page</Btn.Sm>
          </div>
        </div>

        <div className="products py-12 grid-box max-[550px]:grid-cols-2 gap-6 max-[550px]:gap-3">
          {Array.from({length: 8}, (_, index) => 
              <Card.Product key={index} />
          )}
        </div>
      </section>

      <section className="spacing py-12">

        <div className="grid grid-cols-12 max-[760px]:grid-cols-6 gap-3">

          <div className="col-span-6 flex-y-center">
            <div className="">
              <h2 className="text-5xl max-[550px]:text-3xl">This Week At The Swap Market</h2>
              <p className="py-3 max-[550px]:text-sm">Tired of a device you own? need a phone, laptop or some cash urgently?, our swap market is the best place to be, check out amaizing deals from the swap community today </p>
              <Btn.Md>Visit The Swap Market</Btn.Md>
            </div>
          </div>

          <div className="col-span-6">
            <Img.Contain src="/images/swap.jpg" />
          </div>
        </div>


      </section>

      <section className="spacing pt-12">
        <div className=" text-center max-w-[500px] mx-auto">
          <h1 className="text-4xl">Meet The Rapid Experience</h1>
        </div>

        <div className="py-3 ">
          <Scroll.SideBtns>
            {Array.from({length: 10}, (_, index) => 
            
              <motion.div whileTap={{scale: 0.85}} key={index} className="rounded  transition-all duration-150 text-center relative">
                <div className="leaf-2 p-9 px-6 max-[820px]:px-3 min-h-[300px]  w-[350px] max-[820px]:w-[270px]   border dark:border-neutral-800 hover:border-blue-600 hover:shadow-xl active:shadow-none">
                  <div className="h-[120px] w-[120px] mx-auto border border-neutral-800 overflow-hidden pear-1">
                    <Img.Cover src="/images/black_guy.webp" />
                  </div>
                  <div className="font-semibold py-3">Adeniyi David Shalom</div>
                  <p className="font-light max-[820px]:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Distinctio voluptate at, accusamus nulla quam corrupti voluptates, 
                    debitis architecto earum doloremque et, beatae excepturi.
                    Architecto rem, et maiores voluptates saepe soluta?
                  </p>
                </div>
              </motion.div>
            )}
          </Scroll.SideBtns>
        </div>
      </section>

      <section className="spacing py-12">
        <div className=" text-center max-w-[500px] mx-auto pb-12">
          <h1 className="text-4xl">Frequently Asked Questions</h1>
        </div>

        <div className="border rounded-lg dark:border-neutral-600">
          {Array.from({length: 10}, (_, index) => 
            <Accordion 
              key={index}
              title="How Long Does It Take For Deliveries To Reach Their Intended Desitination?"
              content={<>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Dolor minima tenetur nisi voluptatem ratione, fugit architecto nesciunt quod commodi, 
                porro dignissimos facilis incidunt! Delectus quibusdam eum quas numquam perspiciatis magnam, 
                nostrum inventore saepe repellendus similique ducimus deserunt quo quod magni!
              </>}
            />
          )}
        </div>
      </section> 

    </div>
  )
}

export default Home