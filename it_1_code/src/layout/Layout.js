import { Outlet, Link } from "react-router-dom";
import Login from "../login/Login";
import Navbar from '../navbar/Navbar';
import Dashboard from "../dashboard/Dashboard";
import ViewProject from "../viewproject/ViewProject";
import Pledge from "../pledge/Pledge";

const Layout = () => {
    return (
<<<<<<< HEAD
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/navbar">Navbar</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/viewproject">View Project</Link>
                    </li>
                    <li>
                        <Link to="/pledge">Pledge</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
=======
        <div>
            <Navbar />
            <Login />
            <Dashboard />
            <ViewProject />
            <Pledge />
        </div>
>>>>>>> 4ad695724dafbb4a52a2396656c45afeb1467bcf
    )
};

export default Layout;