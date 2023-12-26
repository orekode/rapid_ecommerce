import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function SimpleBackdrop({ children, stateObj } : { children?: React.ReactNode, stateObj?: [boolean, React.Dispatch<React.SetStateAction<boolean>>] }) {

  const [open, setOpen] = stateObj ? stateObj : React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

//   const handleOpen = () => {
//     setOpen(true);
//   };

  return (
    <div>
      
      <AnimatePresence>
        {open && 
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className='fixed top-0 left-0 h-full w-full z-50'
          >
            <div className="relative z-10 h-full w-full overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-transparent py-12">
              <div className="w-max mx-auto relative z-10">
                {children}
              </div>
              <div onClick={handleClose} className="absolute z-0 top-0 left-0 h-full w-full">

              </div>
            </div>

            <div onClick={handleClose} className="absolute z-0 top-0 left-0 h-full w-full backdrop-blur">

            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>
  );
}