import React from 'react';
import {  Routes, Route } from 'react-router-dom'
import Home from './Home';
import Blog from './Blog';
import ComingSoon from './ComingSoon';
import CompanyProfile from './CompanyProfile';
import Connection from './Connection';
import Contact from './Contact';
import EditProfile from './EditProfile';
import FAQ from './FAQ';
import Job from './Job';
import Messages from './Messages';
import Notification from './Notification';
import NotFound from './NotFound';
import Pricing from './Pricing';
import SingleBlog from './SingleBlog';
import Terms from './Terms';
import Privacy from './Privacy';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';
import Profile from './Profile';

function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Job />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/connection" element={<Connection />} />
        <Route path="/company/:companyName" element={<CompanyProfile />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/reviews" element={<CompanyProfile />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all for undefined routes */}
      </Routes>
  );
}

export default AppRoutes;
