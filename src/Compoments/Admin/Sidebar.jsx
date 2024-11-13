import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaBriefcase, FaUsers, FaCog } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="w-64 h-full bg-gray-800 text-white p-4">
      <h2 className="text-2xl mb-6">Admin Panel</h2>
      <ul>
        <li>
          <Link to="/dashboard" className="flex items-center space-x-2 p-2 hover:bg-gray-600">
            <FaTachometerAlt />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/job" className="flex items-center space-x-2 p-2 hover:bg-gray-600">
            <FaBriefcase />
            <span>Jobs</span>
          </Link>
        </li>
        <li>
          <Link to="/users" className="flex items-center space-x-2 p-2 hover:bg-gray-600">
            <FaUsers />
            <span>Users</span>
          </Link>
        </li>
        <li>
          <Link to="/settings" className="flex items-center space-x-2 p-2 hover:bg-gray-600">
            <FaCog />
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
