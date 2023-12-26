import { ShoppingBag, X } from 'lucide-react';
import { Btn, Img, Mode } from '.';
import {  motion } from 'framer-motion';
import { useState } from 'react';



const Nav = () => {


    
    const navs = [
        {
          name: 'Home',
          link: {},
        },
    
        {
          name: 'Shop',
          link: {},
        },
    
        {
          name: 'Swap Market',
          link: {},
        },
    ]

    const [ menu, setMenu ] = useState<boolean>(false);

    

  return (
    <>
      <nav className="min-h-[60px] py-3 px-24 max-[1055px]:px-12 max-[550px]:px-6 flex-y-center justify-between fixed w-full z-50 mx-auto max-w-[1224px] backdrop-blur-lg">
          <div className="logo h-[50px] w-[50px] rounded-full overflow-hidden">
            <Img.Cover src="/images/logo.jpg" />
          </div>

          <div className="flex-y-center gap-6 max-[800px]:hidden">

            <div className="flex-y-center gap-3 ">
                {navs.map( (item, index) =>
                  <div className="px-3 hover:text-blue-600 cursor-pointer" key={index} {...item.link}>{item.name}</div>
                )}

                <div className="flex items-end px-3 relative group">
                  <ShoppingBag />
                  <div className="absolute -top-1 -right-0.5 h-[20px] w-[20px] text-xs flex-center rounded-full bg-red-600 group-hover:bg-yellowy">0</div>
                </div>
            </div>

            <div className="flex-y-center gap-3">
                <Btn.SmOutline>Log In</Btn.SmOutline>
                <Btn.Sm>Sign Up</Btn.Sm>
            </div>

            <Mode />

          </div>

          <div className=" items-center max-[800px]:flex gap-6 hidden">
            
            <Mode />

            <div onClick={() => setMenu(!menu)} className="">
              <div className="h-[5px] w-[50px] dark:bg-white bg-[#222] mb-2"></div>
              <div className="h-[5px] w-[50px] dark:bg-white bg-[#222]"></div>
            </div>
          </div>

      </nav>

      <motion.div initial={{ left: "-130vw" }} animate={{ left: menu ? "0" : "-130vw" }} transition={{  duration: .3 }} className="fixed top-0 left-0 w-full h-full backdrop-blur z-[60]">

        <div className="w-full max-w-[400px] text-3xl bg-white dark:bg-[#080808] h-full">

          <div onClick={() => setMenu(!menu)} className="p-4 px-12 border-b dark:border-neutral-800 flex items-center justify-end">
            <span></span>
            <X size={40}/>
          </div>

          {navs.map( (item, index) =>
            <div className="p-4 px-12 border-b dark:border-neutral-800 hover:bg-blue-600 hover:text-white" key={index} {...item.link}>{item.name}</div>
          )}
            <div className="p-4 px-12 border-b dark:border-neutral-800 flex items-center justify-between hover:bg-blue-600 hover:text-white">
              <span>Cart</span>
              <ShoppingBag size={40}/>
            </div>

            <div className="p-6 px-12 border-b dark:border-neutral-800 hover:bg-blue-600 hover:text-white">
              Log In
            </div>

            <div className="p-6 px-12 border-b dark:border-neutral-800 hover:bg-blue-600 hover:text-white">
              Sign Up
            </div>

        </div>

      </motion.div>

    </>
  )
}

export default Nav