import { Outlet, Link } from "react-router-dom";
import Login from "../login/Login";
import Navbar from '../navbar/Navbar';
import Dashboard from "../dashboard/Dashboard";
import ViewProject from "../viewproject/ViewProject";
import Pledge from "../pledge/Pledge";

const Layout = () => {

    return (
        <div>
            <Navbar />
            <Login />
        </div>
    )
};

export default Layout;