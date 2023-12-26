

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { ReactNode, useRef, useState } from 'react'

const Accordion = ({ title , content } : {title: ReactNode , content: ReactNode }) => {
    const [ visible, setVisible ] = useState<boolean>(false);
    const contentRef = useRef<HTMLDivElement | null>(null);
  return (
    <div>
        <div onClick={() => setVisible(!visible)} className="question border-b dark:border-neutral-600 p-6">
            <div className="flex items-center justify-between">

                <div className=" text-xl ">
                        {title}
                </div>

                <AnimatePresence>
                    {visible ? 
                        <motion.div>
                            <ChevronUp />
                        </motion.div>
                        :
                        <motion.div>
                            <ChevronDown />
                        </motion.div>
                    }
                    
                </AnimatePresence>

            </div>
        </div>

        <AnimatePresence>
           
            <motion.div ref={contentRef} initial={{ height: 0 }} animate={{ height: visible && contentRef.current ? contentRef.current.scrollHeight : 0 }} className={` overflow-hidden shadow  dark:bg-neutral-800 `}>
                <div className="p-6">
                    {content}
                </div>
            </motion.div>
            
        </AnimatePresence>
    </div>
  )
}

export default Accordion