import React from 'react';
import { Toaster } from 'react-hot-toast';
import AppRoutes from './Compoments/AppRoutes';
import Navbar from './Compoments/Navbar';

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
