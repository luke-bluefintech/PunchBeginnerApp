import { React, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ViewProject from "./viewproject/ViewProject";
import NewProject from "./newproject/NewProject";
import Register from "./register/Register";
import Navbar from './navbar/Navbar';
import Login from "./login/Login";
import CreatePledge from "./createpledge/CreatePledge";
import Dashboard from "./dashboard/Dashboard";
import AdminDashboard from "./admindashboard/AdminDashboard";
import SupporterDashboard from "./supporterdashboard/SupporterDashboard";
import SupporterViewProject from "./supporterviewproject/SupporterViewProject";
import ViewPledge from "./viewpledge/ViewPledge";
import './App.css';

export default function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [project, setProject] = useState("");

  return (
    <div>
      {email != "" ? <Navbar /> : null}
      <Routes>
        <Route path='/login' element={<Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} />} />
        <Route path='/dashboard' element={<Dashboard email={email} password={password} setProject={setProject} />} />
        <Route path='/admindashboard' element={<AdminDashboard email={email} password={password} />} />
        <Route path='/supporterdashboard' element={<SupporterDashboard email={email} password={password} setProject={setProject} />} />
        <Route path='/supporterdashboard/supporterviewproject' element={<SupporterViewProject email={email} password={password}/>} />
        <Route path='/supporterdashboard/supporterviewproject/viewpledge' element={<ViewPledge email={email} password={password}/>} />
        <Route path='/dashboard/viewproject' element={<ViewProject email={email} password={password} project={project} />} />
        <Route path='/dashboard/viewproject/createpledge' element={<CreatePledge email={email} password={password} project={project} />} />
        <Route path='/dashboard/newproject' element={<NewProject email={email} password={password} />} />
        <Route path='/register' element={<Register email={email} password={password} />} />
      </Routes>
    </div>
  );
}