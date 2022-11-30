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
<<<<<<< HEAD
                    <li>
                        <Link to="/table">Table</Link>
                    </li>
                    <li>
                        <Link to="/pledge">Pledge</Link>
                    </li>
=======
>>>>>>> 210e7d4df77292d11f55c6b6329d5901c4a9b592
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;