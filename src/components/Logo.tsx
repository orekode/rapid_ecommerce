import { Link } from "react-router-dom";
import { Img } from ".";



export const Sm = ({ path="/" }) => {
    return (
        <Link to={path} className="logo h-[50px] w-[50px] rounded-full overflow-hidden mr-6">
            <Img.Cover src="/images/logo.jpg" />
        </Link>
    );
}