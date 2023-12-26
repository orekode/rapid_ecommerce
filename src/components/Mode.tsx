import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '@/store/generalSlice';
import { RootState } from '@/store';


const Moder = () => {

    const mode = useSelector((state: RootState) => state.general.mode);
    const dispatch = useDispatch();

    if (mode === 'dark') {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }

  return (
    <AnimatePresence>

        { 
        mode == 'dark' ? 
            <motion.div onClick={() => {  dispatch(toggle()); }} whileTap={{ scale: 0.85 }} className="flex-center border rounded-full p-1 dark:hover:text-yellowy dark:hover:border-yellowy">
                <Sun />
            </motion.div>
        :

        <motion.div onClick={() => { dispatch(toggle()); }} whileTap={{ scale: 0.85 }} className="flex-center border rounded-full p-1 dark:hover:text-yellowy dark:hover:border-yellowy">
            <Moon />
        </motion.div>
        }

    </AnimatePresence>
  )
}

export default Moder