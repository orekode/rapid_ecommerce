

import { HTMLMotionProps, motion } from "framer-motion"
import { Img } from "."
import { Skeleton } from "@mui/material"
import { ReactNode } from "react"
import { ShoppingBag, Star } from "lucide-react"

export const Pear = ({ image="/images/laptop.png", title="Laptops", ...props } : { image?: string, title?: string } & HTMLMotionProps<'div'>) => {

  return (
    <motion.div whileTap={{scale: 0.85}} className="rounded  transition-all duration-150 text-center relative" {...props}>
        <div className="h-[200px] w-[200px] mx-auto max-[760px]:h-[120px] max-[760px]:w-[120px] hover:bg-blue-600 pear-1 overflow-hidden border dark:border-neutral-800 hover:border-blue-600 hover:shadow-xl active:shadow-none">
            <Img.Cover src={image} />
        </div>
        <div className="w-[200px] max-[760px]:w-[120px] mx-auto max-[760px]:text-xs p-1.5">{title}</div>
    </motion.div>
  )

}

export const PearLoading = ({ load = true } : { load?: boolean }) => {

  if(load)
  return (
    <motion.div whileTap={{scale: 0.85}} className="rounded  transition-all duration-150 text-center relative">
        <div className="h-[200px] w-[200px] mx-auto max-[760px]:h-[120px] max-[760px]:w-[120px] hover:bg-blue-600 pear-1 overflow-hidden border dark:border-neutral-800 hover:border-blue-600 hover:shadow-xl active:shadow-none">
            <Skeleton style={{height: '200px', transform: "scale(1)"}} />
        </div>
        <div className="w-[200px] max-[760px]:w-[120px] mx-auto max-[760px]:text-xs p-1.5">
            <Skeleton style={{transform: "scale(1)"}} />
        </div>
    </motion.div>
  )

}

export const Box = ({ children, item } : {children: ReactNode, item: Record<string, any>}) => {
  return (
    <div className="hover:dark:bg-[#111] hover:bg-gray-50 active:scale-90 transition-all duration-200 rounded-md border dark:border-neutral-800 w-[200px] p-6 flex flex-col items-center justify-center text-center">
      {children}
      <div className="mt-6">{item.name}</div>
    </div>
  )
}

export const Product = () => {
  return (
    <div className="relative group">
        <div className="w-full h-[300px] max-[550px]:h-[220px] max-[360px]:h-[170px] overflow-hidden relative border dark:border-neutral-800 rounded">
          <div className="h-full w-full">
            <Img.Contain src='/images/laptop.png' />
          </div>

          <div className="transition-all duration-300 absolute -bottom-52 group-hover:bottom-2 left-0 w-full px-2 flex items-center gap-2 z-10">
            
            <motion.div whileTap={{ scale: 0.85 }} className="bg-blue-600 text-white text-sm max-[360px]:text-xs px-3 py-1.5 rounded flex-grow text-center">
              Buy Now
            </motion.div>

            <motion.div whileTap={{ scale: 0.85 }} className="flex-center ">
              <ShoppingBag />
            </motion.div>
            
          </div>
        </div>

        <div className="details py-1.5">
          <div className="name max-[550px]:text-sm max-[360px]:text-xs hover:text-blue-300 active:text-yellow-200 underline">ThinkVision 23.8 inch Monitor - T24i-30</div>
          <div className="flex gap-1 py-1 text-yellowy">

            {Array.from({length: 5}, (_, index) => 
              <Star fill="#ffa436" key={index} size={15}/>
            )}

          </div>

          <div className="max-[550px]:text-sm max-[360px]:text-xs top-2 left-2 absolute bg-white dark:bg-[#222] group-hover:bg-blue-600 shadow px-3 py-1.5 rounded-full">
            Ghc 3450
          </div>

        </div>
    </div>
  );
}