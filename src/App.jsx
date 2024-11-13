import React from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './Compoments/Pages/Navbar';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <div>
      <Navbar/>
      <AppRoutes />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
