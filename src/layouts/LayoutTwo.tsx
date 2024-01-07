import { Img, Mode } from "@/components";
import { Home, Laptop, LayoutPanelLeft, LogOut, Settings, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import BadgeAvatars from "@/components/Avatar";


const LayoutTwo = () => {



  const location = useLocation();
    
  const navs = [
      {
        name: 'Dashboard',
        link: '/admin',
        icon: <LayoutPanelLeft strokeWidth={'1.35'} />
      },
  
      {
        name: 'Products',
        link: '/admin/products',
        icon: <Laptop strokeWidth={'1.35'}/>
      },
  
      {
        name: 'Categories',
        link: '/admin/categories',
        icon: <ShoppingBag strokeWidth={'1.35'}/>
      },

      {
        name: 'Settings',
        link: '/',
        icon: <Settings strokeWidth={'1.35'}/>
      },

      {
        name: 'Home',
        link: '/',
        icon: <Home strokeWidth={'1.35'}/>
      },

      {
        name: 'Logout',
        link: '/logout',
        icon: <LogOut strokeWidth={'1.35'}/>
      },
  ]

  const [ menu, setMenu ] = useState<boolean>(false);



  return (
    <div className="min-h-screen flex justify-end [&>*]:h-screen">
      
        <div className={`left shadow w-[250px] py-6 bg-[#111] text-white dark:border-neutral-600 ${ menu ? 'left-0' : '-left-[100vw]'} top-0 fixed z-50 transition-all duration-300 `}>
          <div className="logo pear-1 h-[60px] w-[60px] mx-auto rounded-md overflow-hidden">
            <Img.Cover src="/images/logo.jpg" />
          </div>

          <div className="py-12 px-3">
            {navs.map( (item, index) => 
              <Link to={item.link} key={index} className={` ${ item.link == (location.pathname) && 'bg-blue-600'} hover:bg-yellowy rounded px-3 py-1.5 mb-3 flex items-center gap-3 `}>
                <div className="icon">{item.icon}</div>
                <div className="name">{item.name}</div>
              </Link>
            )}
          </div>

          <div onClick={() => setMenu(!menu)} className="absolute top-2 right-2 flex-center w-[30px] h-[30px] rounded-full min-[1150px]:hidden border border-neutral-700">
            <X size={20}/>
          </div>
        </div>

        <div className={` right ${menu ? 'expand' : 'w-full'} transition-all duration-300`}>

          <nav className="h-[60px] px-6 flex-y-center justify-between shadow w-full">

              <div onClick={() => setMenu(!menu)} className="menu-">
                <div className="h-0.5 w-10 mb-2 bg-black dark:bg-white"></div>
                <div className="h-0.5 w-10 mb-2 bg-black dark:bg-white"></div>
                <div className="h-0.5 w-10 bg-black dark:bg-white"></div>
              </div>

              <div className="flex-y-center gap-3">

                <Mode />

                <BadgeAvatars />
              </div>

          </nav>


          <motion.div initial={{ height: 'calc( 100% - 60px )' }} animate={{ height: 'calc( 100% - 60px )' }} className="content-area relative overflow-hidden">
            <div className="overflow-y-scroll h-full scrollbar scrollbar-track-transparent scrollbar-thumb-slate-400 dark:scrollbar-thumb-zinc-950 p-6">
                  
              <Outlet />

            </div>
          </motion.div>
        </div>


    </div>
  );
}

export default LayoutTwo