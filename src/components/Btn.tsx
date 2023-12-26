import { ReactNode } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";



export const Md = ({ children, extraClass="", ...props } : { children?: ReactNode, extraClass?: string } & HTMLMotionProps<'button'>) => {
    return (
        <motion.button whileTap={{scale: 0.85}} className={` ${extraClass} border-2 bg-blue-600 border-blue-600 hover:border-yellowy hover:bg-yellowy text-white px-9 p-3`} {...props}>
            {children}
        </motion.button>
    );
}

export const MdOutline = ({ children, extraClass="", ...props } : { children?: ReactNode, extraClass?: string } & HTMLMotionProps<'button'>) => {
    return (
        <motion.button whileTap={{scale: 0.85}}  className={` ${extraClass} border-2 border-[#111] dark:border-gray-200 hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white px-9 p-3 `} {...props}>
            {children}
        </motion.button>
    );
}

export const Sm = ({ children,  extraClass="", ...props } : { children?: ReactNode, extraClass?: string } & HTMLMotionProps<'button'>) => {
    return (
        <motion.button whileTap={{scale: 0.85}}  className={` ${extraClass} bg-blue-600 border border-blue-600 hover:border-yellowy hover:bg-yellowy text-white px-6 p-1.5 `} {...props}>
            {children}
        </motion.button>
    );
}

export const SmOutline = ({ children,  extraClass="", ...props } : { children?: ReactNode, extraClass?: string } & HTMLMotionProps<'button'>) => {
    return (
        <motion.button whileTap={{scale: 0.85}}  className={` ${extraClass} border border-[#111] dark:border-gray-200 hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white px-6 p-1.5`} {...props}>
            {children}
        </motion.button>
    );
}

export const Xs = ({ children,  extraClass="", ...props } : { children?: ReactNode, extraClass?: string } & HTMLMotionProps<'button'>) => {
    return (
        <motion.button whileTap={{scale: 0.85}}  className={` ${extraClass} bg-blue-600 border border-blue-600 hover:border-yellowy hover:bg-yellowy text-white text-xs px-2 p-1.5 `} {...props}>
            {children}
        </motion.button>
    );
}

export const Chevron = ({ direction="left", extraClass="", ...props } : { direction?: string, extraClass?: string } & HTMLMotionProps<'button'>) => {
    return (
        <motion.button whileTap={{scale: 0.85}} className={` ${extraClass} border hover:bg-blue-600 hover:border-blue-600 hover:text-white dark:border-neutral-800 p-3 max-[760px]:p-1.5 rounded hover:shadow flex-center `} {...props}>
            {direction === "left" &&
                <ChevronLeft />
            }

            {direction !== "left" &&
                <ChevronRight />
            }
        </motion.button>
    );
}

export const Icon = ({ direction="left", children, extraClass="", ...props } : { direction?: string, children?: ReactNode, extraClass?: string } & HTMLMotionProps<'button'>) => {
    return (
        <motion.button whileTap={{scale: 0.85}} className={` ${extraClass} border hover:bg-blue-600 hover:border-blue-600 hover:text-white dark:border-neutral-800 p-3 max-[760px]:p-1.5 rounded hover:shadow flex-center `} {...props}>
            {children}
        </motion.button>
    );
}