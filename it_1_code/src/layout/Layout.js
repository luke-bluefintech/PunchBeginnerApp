import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
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
                        <Link to="/table">Table</Link>
                    </li>
                    <li>
                        <Link to="/pledge">Pledge</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;