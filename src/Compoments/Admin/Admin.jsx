import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Job from '../Pages/Job';
import Users from './pages/Users';
import Setting from './pages/Setting';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

function Admin() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/job" element={<Job />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Setting />} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
