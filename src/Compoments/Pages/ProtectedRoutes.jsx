import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token'); // Check for authentication token

  return token ? children : <Navigate to="/sign-in" />;
}

export default ProtectedRoute;
