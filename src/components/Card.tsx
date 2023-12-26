

import { motion } from "framer-motion"
import { Img } from "."
import { Skeleton } from "@mui/material"

export const Pear = ({ image="/images/laptop.png", title="Laptops" } : { image?: string, title?: string }) => {

  return (
    <motion.div whileTap={{scale: 0.85}} className="rounded  transition-all duration-150 text-center relative">
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


