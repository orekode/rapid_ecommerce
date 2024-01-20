

import { HTMLMotionProps, motion } from "framer-motion"
import { Img } from "."
import { Skeleton } from "@mui/material"
import { ReactNode } from "react"

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
