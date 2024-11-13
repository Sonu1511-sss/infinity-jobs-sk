import React from 'react';

function Navbar() {
  return (
    <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl">Admin Panel</h1>
      <button className="bg-blue-600 p-2 rounded">Logout</button>
    </div>
  );
}

export default Navbar;
