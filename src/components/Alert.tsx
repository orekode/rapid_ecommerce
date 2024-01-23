import Backdrop from '@mui/material/Backdrop';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { closeAlert } from '@/store/generalSlice';
import { Btn, Img } from '.';

export default function Alert() {

  const alert = useSelector((state: RootState) => state.general.alert);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeAlert());
  };

  return (
    <div>
      
      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 3 }}
        open={alert.open ? alert.open : false}
      >
        <div className="flex-center relative z-10 h-full w-full overflow-y-scroll scrollbar scrollbar-track-transparent py-12">

          <div className="text-center flex-col flex-center h-max w-[500px] max-[550px]:w-full pear-1 scale-90 bg-white dark:bg-neutral-800 shadow p-12 mx-auto relative z-10">
            <div className="w-[50%] h-[50%] overflow-hidden pear-1 shadow-xl">
              {alert.icon == 'error' &&
                <Img.Cover src="/images/error.jpg" />
              }
            </div>
            <div className="title font-bold text-3xl my-2">{alert.title}</div>
            <div className="text">{alert.text}</div>
            <div className="flex flex-center flex-y-center gap-1.5">
              {
                alert.ok && 
                  <Btn.Sm onClick={() => {alert.ok(); handleClose()}} extraClass='rounded-md mt-3 w-[100px]'>Ok</Btn.Sm>
              }
              {
                alert.cancel && 
                  <Btn.Sm onClick={() => {alert.cancel(); handleClose()}} extraClass='rounded-md w-[100px] mt-3 bg-red-500 border-red-500'>Cancel</Btn.Sm>
              }
            </div>
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