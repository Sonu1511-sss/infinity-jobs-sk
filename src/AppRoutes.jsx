import React, { Profiler } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './Compoments/Pages/SignIn';
import SignUp from './Compoments/Pages/SignUp';
import Connection from './Compoments/Pages/Connection';
import CompanyProfile from './Compoments/Pages/CompanyProfile';
import ContactUs from './Compoments/Pages/Contact';
import BlogSection from './Compoments/Pages/Blog';
import Job from './Compoments/Pages/Job';
import Profile from './Compoments/Pages/Profile';
import HomePage from './Compoments/Pages/Home';
import EditProfile from './Compoments/Pages/EditProfile';
import BlogSingle from './Compoments/Pages/SingleBlog';
import JobMessage from './Compoments/Pages/Messages';
import NotFound from './Compoments/Pages/NotFound';
import FAQPage from './Compoments/Pages/FAQ';
import TermsAndConditions from './Compoments/Pages/Terms';
import PrivacyPolicy from './Compoments/Pages/Privacy';
import Pricing from './Compoments/Pages/Pricing';
import ComingSoon from './Compoments/Pages/ComingSoon';
import ResetPassword from './Compoments/Pages/ResetPassword';
import ProtectedRoute from './Compoments/Pages/ProtectedRoutes';
import Admin from './Compoments/Admin/admin';

function AppRoutes() {
  const token = localStorage.getItem('token'); // Check if the user is logged in
  
  return (
    <Routes>

      {/* Redirect to the login page if not logged in */}
      <Route path="/" element={token ? <Navigate to="/home" /> : <Navigate to="/sign-in" />} />
      
      {/* Public routes */}
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      
      {/* Protected routes (require login) */}
      <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
      <Route path="/jobs" element={<ProtectedRoute><Job /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path="/connection" element={<ProtectedRoute><Connection /></ProtectedRoute>} />
      <Route path="/edit-profile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
      <Route path="/company/:companyName" element={<ProtectedRoute><CompanyProfile /></ProtectedRoute>} />
      <Route path="/messages" element={<ProtectedRoute><JobMessage /></ProtectedRoute>} />
      <Route path="/notification" element={<ProtectedRoute><Notification /></ProtectedRoute>} />
      <Route path="/blog" element={<ProtectedRoute><BlogSection /></ProtectedRoute>} />
      <Route path="/blog/:id" element={<ProtectedRoute><BlogSingle /></ProtectedRoute>} />
      <Route path="/reviews" element={<ProtectedRoute><CompanyProfile /></ProtectedRoute>} />
      <Route path="/faq" element={<ProtectedRoute><FAQPage /></ProtectedRoute>} />
      <Route path="/terms" element={<ProtectedRoute><TermsAndConditions /></ProtectedRoute>} />
      <Route path="/privacy" element={<ProtectedRoute><PrivacyPolicy /></ProtectedRoute>} />
      <Route path="/contact" element={<ProtectedRoute><ContactUs /></ProtectedRoute>} />
      <Route path="/pricing" element={<ProtectedRoute><Pricing/></ProtectedRoute>} />
      <Route path="/admin" element={<ProtectedRoute><Admin/></ProtectedRoute>} />
      <Route path="/coming-soon" element={<ComingSoon />} />

      
      {/* Catch-all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
