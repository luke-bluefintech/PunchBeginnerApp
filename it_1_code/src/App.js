import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from "./layout/Layout";
import ViewProject from "./viewproject/ViewProject";
import Navbar from './navbar/Navbar';
import Login from "./login/Login";
import Dashboard from "./dashboard/Dashboard";
import './App.css';

export default function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}