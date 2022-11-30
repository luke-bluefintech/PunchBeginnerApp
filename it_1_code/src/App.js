import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./login/Login";
import Navbar from "./navbar/Navbar";
import Dashboard from "./dashboard/Dashboard";
<<<<<<< HEAD
import Table from "./table/Table";
import Pledge from "./pledge/Pledge";
=======
>>>>>>> 210e7d4df77292d11f55c6b6329d5901c4a9b592

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="navbar" element={<Navbar />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
<<<<<<< HEAD
          <Route path="table" element={<Table />} />
          <Route path="pledge" element={<Pledge />} />
=======
>>>>>>> 210e7d4df77292d11f55c6b6329d5901c4a9b592
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);