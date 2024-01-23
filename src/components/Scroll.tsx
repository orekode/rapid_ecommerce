

import { Btn } from "@/components";
import { ReactNode, useRef } from "react";

export const TopBtns = ({ children, title=""} : { children?: ReactNode, title?: string}) => {

  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction="left") => {

    const dirSign = direction == "left" ? -1 : 1;
    if(scrollRef.current)
    scrollRef.current.scrollLeft += dirSign * 300;
  }

  return (
    <div className="">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl max-[550px]:text-base">{title}</h3>

          <div className="flex items-center gap-3">

            <Btn.Chevron onClick={() => handleScroll()} />
            <Btn.Chevron onClick={() => handleScroll('right')} direction="right" />

          </div>
        </div>

        <div className="">

          <div ref={scrollRef} className="w-full overflow-x-scroll scrollbar-thin">
            <div className="w-max flex  gap-6 py-12">
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
            <div className="w-max mx-auto flex items-center gap-6 py-3">
              {children}
            </div>
          </div>
        </div>
    </div>
  )
}

