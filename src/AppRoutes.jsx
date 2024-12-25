import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Job from './Compoments/Pages/Job';
import SignIn from './Compoments/Pages/SignIn';
import SignUp from './Compoments/Pages/SignUp';
import ResetPassword from './Compoments/Pages/ResetPassword';
import Profile from './Compoments/Pages/Profile';
import Connection from './Compoments/Pages/Connection';
import EditProfile from './Compoments/Pages/EditProfile';
import ContactUs from './Compoments/Pages/Contact';
import ComingSoon from './Compoments/Pages/ComingSoon';
import Pricing from './Compoments/Pages/Pricing';
import PrivacyPolicy from './Compoments/Pages/Privacy';
import TermsAndConditions from './Compoments/Pages/Terms';
import FAQPage from './Compoments/Pages/FAQ';
import CompanyProfile from './Compoments/Pages/CompanyProfile';
import ProtectedRoute from './Compoments/Pages/ProtectedRoutes';
import BlogSection from './Compoments/Pages/Blog';
import JobMessage from './Compoments/Pages/Messages';
import HomePage from './Compoments/Pages/Home';
import NotFound from './Compoments/Pages/NotFound';


function AppRoutes() {
  const token = localStorage.getItem('token'); // Check if the user is logged in
  
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<SignIn/>} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Protected routes (require login) */}
      <Route path="/jobs" element={<ProtectedRoute><Job /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path="/connection" element={<ProtectedRoute><Connection /></ProtectedRoute>} />
      <Route path="/edit-profile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
      <Route path="/company/:companyName" element={<ProtectedRoute><CompanyProfile /></ProtectedRoute>} />
      <Route path="/messages" element={<ProtectedRoute><JobMessage /></ProtectedRoute>} />
      <Route path="/notification" element={<ProtectedRoute><Notification /></ProtectedRoute>} />
      <Route path="/blog" element={<ProtectedRoute><BlogSection/></ProtectedRoute>} />
      <Route path="/reviews" element={<ProtectedRoute><CompanyProfile /></ProtectedRoute>} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/terms" element={<TermsAndConditions />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/coming-soon" element={<ComingSoon />} />

      {/* Catch-all route */}
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default AppRoutes;
