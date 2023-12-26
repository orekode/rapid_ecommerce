

import { Img, Btn } from "@/components";
import { motion } from 'framer-motion'
import { ReactNode } from "react";

export const TopBtns = ({ children, title=""} : { children?: ReactNode, title?: string}) => {
  return (
    <div className="">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl max-[550px]:text-base">{title}</h3>

          <div className="flex items-center gap-3">

            <Btn.Chevron />
            <Btn.Chevron direction="right" />

          </div>
        </div>

        <div className="">

          <div className="w-full overflow-x-scroll scrollbar-thin">
            <div className="w-max flex items-center gap-6 py-12">
              {children}
            </div>
          </div>
        </div>
    </div>
  )
}

export const SideBtns = ({ children, title=""} : { children?: ReactNode, title?: string}) => {
  return (
    <div className="">
        {title !== "" && 
          <div className="flex items-center justify-between">
            <h3 className="text-2xl max-[550px]:text-base">{title}</h3>
          </div>
        }

        <div className="relative">

          <div className="left top-1/2 absolute z-10 -translate-y-1/2 left-2">
            <Btn.Chevron extraClass="bg-white shadow dark:bg-neutral-800"/>
          </div>

          <div className="right  top-1/2 absolute z-10 -translate-y-1/2 right-2">
            <Btn.Chevron direction="right" extraClass="bg-white shadow dark:bg-neutral-800" />
          </div>



          <div className="w-full overflow-x-scroll scrollbar-thin relative z-0">
            <div className="w-max flex items-center gap-6 py-12">
              {children}
            </div>
          </div>
        </div>
    </div>
  )
}

