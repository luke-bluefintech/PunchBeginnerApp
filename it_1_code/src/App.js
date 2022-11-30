import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./login/Login";
import Navbar from "./navbar/Navbar";
import Dashboard from "./dashboard/Dashboard";
import ViewProject from "./viewproject/ViewProject";
import Pledge from "./pledge/Pledge";
import Register from "./register/Register";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="navbar" element={<Navbar />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="viewproject" element={<ViewProject />} />
          <Route path="pledge" element={<Pledge />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Layout />);