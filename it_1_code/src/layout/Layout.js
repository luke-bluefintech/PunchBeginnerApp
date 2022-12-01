import { Outlet, Link } from "react-router-dom";
import Login from "../login/Login";
import Navbar from '../navbar/Navbar';

const Layout = () => {

    return (
        <div style={{ marginTop: "7%" }}>
            <Navbar />
            <Login />
        </div>
    )
};

export default Layout;