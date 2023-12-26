import { Alert, Loading } from "@/components";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";


const Root = () => {

  const loading = useSelector((state: RootState) => state.general.loading);
  return (
    <div className="dark:bg-[#151515] dark:text-white text-[#111]">
        <Outlet />
        <Alert />
        <Loading open={loading} />
    </div>
  );
}

export default Root