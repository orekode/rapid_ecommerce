import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Backdrop, Empty } from '.';
import { Skeleton } from '@mui/material';


export const Base = ({ extraClass=" flex-grow ",  ...props }) => {

  return (

    <input 
        placeholder="Search categories here.."
        type="text" 
        className={` ${extraClass} bg-transparent input border-2 dark:border-neutral-700 outline outline-2 outline-neutral-500 dark:outline-neutral-900 rounded-lg px-3 py-1.5 `} 
        {...props}
    />

  )

}



export const  Select = ({
    options, 
    pages=0,
    currentPage=0,
    setPage=(page: number)=>{page}, 
    placeholder, 
    filter=(item: Record<string, any >) => item, 
    onSelect=(x: Record<string, any >)=>{x}, 
    onSearch=(search: string)=>{search} 
  } 
  : 
  { 
    options: Array<{label: string, value: any}> ,
    pages?: number,
    currentPage?: number,
    setPage?: any,
    placeholder: string, filter?: any, 
    onSelect?: any , 
    onSearch?: any 
  }) => {

  const defaultValue = {
    label: placeholder,
    value: ""
  };

  options = options ? options.map(filter) : options;

  const [ selected, setSelected ] = React.useState<Record<string, any >>(defaultValue);

  const [open, setOpen] = React.useState<boolean>(false);
  

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = (value: Record<string, any >) => {
    setSelected(value);
    setOpen(false);
  };

  React.useEffect( () => {
    onSelect(selected)
  }, [selected]);

 

  return (
    <div className='relative z-[40] '>
      
      <div
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="relative z-10"
      >
        <div  
            className={` bg-transparent input border-2 dark:border-neutral-700 outline outline-2 outline-neutral-500 dark:outline-neutral-900 flex-y-center justify-between rounded-lg px-3 py-1.5 `} 
        >
            <span>{selected.label}</span>

            <AnimatePresence>
                {open ? 
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

      <Backdrop stateObj={[open, setOpen]}>

        <div className='flex-center h-max w-full'>
            <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}  className="w-[400px] max-[440px]:w-[300px] p-0.5 z-10">
                <div className="bg-gray-100 dark:bg-neutral-900 shadow rounded-md overflow-hidden border dark:border-neutral-600 w-full">
                    <div className="border-b p-1.5 dark:border-neutral-600">
                      <Base onChange={(event: React.ChangeEvent<HTMLInputElement> ) => onSearch(event.target.value)} extraClass='w-full border-none outline-none' />
                    </div>

                    {options && 
                    
                      <>
                        <div className="max-h-[220px] overflow-y-scroll scrollbar scrollbar-track-transparent">
                          {options.map((item, index) => 
                              <div key={index} onClick={() => handleClose(item)} className="hover:bg-blue-600 hover:text-white p-3 py-1.5">{item.label}</div>
                          )}
                        </div>

                        <div className="flex border dark:border-neutral-600">
                          <div onClick={() => currentPage > 1 ? setPage(currentPage - 1 ) : ""} className="prev hover:bg-blue-600 active:bg-yellowy text-white px-2 py-0.4 flex-grow h-10 flex-center border-r dark:border-neutral-600">prev</div>

                          {Array.from({length: pages < 5 ? pages : 5 }, (_, index) =>
                            <div key={index} onClick={() => setPage(index + 1)} className={` ${index + 1 == currentPage ? 'bg-blue-600' : ''} hover:bg-blue-600 active:bg-yellowy border-r [&:last-of-type]:border-none flex-center h-10 w-10 dark:border-neutral-600 `}>
                              {index + 1}
                            </div>
                          )}
                          <div onClick={() => currentPage < pages ? setPage(currentPage + 1 ) : ""} className="prev hover:bg-blue-600 active:bg-yellowy text-white px-2 py-0.4 flex-grow h-10 flex-center">next</div>
                        </div>
                      </>

                    }

                    {!options && Array.from({ length: 5 }, (_, index) =>
                      <Skeleton style={{height: '35px', margin: "0.75rem", transform: "scale(1)"}} key={index} />
                    )}

                    <Empty load={options && options.length <= 0} size={100}/>
                </div>
            </motion.div>

            <div onClick={() => setOpen(false)} className="absolute top-0 left-0 h-full w-full"></div>
        </div>
      </Backdrop>
      
    </div>
  );
}