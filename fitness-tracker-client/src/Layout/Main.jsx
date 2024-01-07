import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
// import { Toaster } from "react-hot-toast";


const Main = () => {
    return (
        <div className="">
            {/* <Toaster></Toaster> */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default Main;