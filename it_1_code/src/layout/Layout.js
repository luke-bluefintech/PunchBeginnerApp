import { Outlet, Link } from "react-router-dom";
import Login from "../login/Login";
import Navbar from '../navbar/Navbar';
import Dashboard from "../dashboard/Dashboard";
import ViewProject from "../viewproject/ViewProject";
import Pledge from "../pledge/Pledge";

const Layout = () => {

    var showLogin = true;
    var showDashboard = false;
    var showViewProject = false;
    var showPledge = false;

    return (
        <div>
            <Navbar />
            {showLogin ? <Login /> : null}
            {showDashboard ? <Dashboard /> : null}
            {showViewProject ? <ViewProject /> : null}
            {showPledge ? <Pledge /> : null}
        </div>
    )
};

export default Layout;