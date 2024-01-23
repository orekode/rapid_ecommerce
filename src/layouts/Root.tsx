import { Alert, Loading } from "@/components";
import { RootState } from "@/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";


const Root = () => {

  const location = useLocation();

  const loading = useSelector((state: RootState) => state.general.loading);

  useEffect(() => window.scrollTo(0,0), [location]);
  
  return (
    <div className="dark:bg-[#151515] dark:text-white text-[#111]">
        <div className="max-w-[2024px] mx-auto">
          <Outlet />
        </div>
        <Alert />
        <Loading open={loading} />
    </div>
  );
}

export default Root