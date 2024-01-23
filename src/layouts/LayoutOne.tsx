import { Footer, Nav } from "@/components";
import { Outlet } from "react-router-dom";


const LayoutOne = () => {
  return (
    <div className="max-w-[1224px] mx-auto ">
        <Nav />
        <Outlet />
        <Footer />
    </div>
  );
}

export default LayoutOne