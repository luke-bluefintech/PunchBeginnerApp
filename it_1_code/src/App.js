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
import MeetTheTeam from "./meettheteam/MeetTheTeam";
import './App.css';

export default function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [project, setProject] = useState("");
  const [pledgeUID, setPledgeUID] = useState("");
  const [accType, setAccType] = useState("");

  return (
    <div>
      {email != "" ? <Navbar /> : null}
      {email != "" ? document.body.style.height = '100%' : null}
      <Routes>
        <Route path='/' element={<Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} setAccType={setAccType}/>} />
        <Route path='/login' element={<Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} setAccType={setAccType}/>} />
        <Route path='/dashboard' element={<Dashboard email={email} password={password} setProject={setProject} />} />
        <Route path='/admindashboard' element={<AdminDashboard email={email} password={password} project={project}/>} />
        <Route path='/supporterdashboard' element={<SupporterDashboard email={email} password={password} setProject={setProject} />} />
        <Route path='/supporterdashboard/supporterviewproject' element={<SupporterViewProject email={email} password={password} project={project} setPledgeUID={setPledgeUID}/>} />
        <Route path='/supporterdashboard/supporterviewproject/viewpledge' element={<ViewPledge email={email} password={password} pledgeUID={pledgeUID} />} />
        <Route path='/dashboard/viewproject' element={<ViewProject email={email} password={password} project={project} />} />
        <Route path='/dashboard/viewproject/createpledge' element={<CreatePledge email={email} password={password} project={project} />} />
        <Route path='/dashboard/newproject' element={<NewProject email={email} password={password} />} />
        <Route path='/register' element={<Register email={email} password={password} />} />
        <Route path='/meet-the-team' element={<MeetTheTeam email={email} password={password} accType={accType}/>} />
      </Routes>
    </div>
  );
}