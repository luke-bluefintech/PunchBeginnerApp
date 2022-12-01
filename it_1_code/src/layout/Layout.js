import Login from "../login/Login";
import Navbar from '../navbar/Navbar';

console.log("LAYOUT");

const Layout = () => {
    console.log("now we are here");
    return (
        <div style={{ marginTop: "7%" }}>
            <Navbar />
            <Login />
        </div>
    )
};

export default Layout;