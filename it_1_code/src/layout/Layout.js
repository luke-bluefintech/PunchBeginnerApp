import Login from "../login/Login";
import Navbar from '../navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

//console.log(window.location.href);
//window.location.href += "/layout";

const Layout = () => {
    return (
        <div style={{ marginTop: "7%" }}>
            <Routes>
                <Route path='/' element={<Navbar />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </div>
    )
};

export default Layout;