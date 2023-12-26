import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';

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
      
      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open ? open : false}
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
      </Backdrop>
    </div>
  );
}