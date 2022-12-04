import {React, useState, createContext, useContext} from 'react';
import { Route, Routes } from 'react-router-dom';
import ViewProject from "./viewproject/ViewProject";
import NewProject from "./newproject/NewProject";
import Register from "./register/Register";
import Navbar from './navbar/Navbar';
import Login from "./login/Login";
import Dashboard from "./dashboard/Dashboard";
import AdminDashboard from "./admindashboard/AdminDashboard";
import './App.css';

export default function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard/:email' element={<Dashboard />} />
        <Route path='/admindashboard' element={<AdminDashboard />} />
        <Route path='/dashboard/viewproject/:email' element={<ViewProject />} />
        <Route path='/newproject' element={<NewProject />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}