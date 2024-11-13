import React from 'react';
import { Toaster } from 'react-hot-toast';

import PostCreator from '../SubPages/PostCreator';
import PostList from '../SubPages/PostList';
import CompanySlider from '../SubPages/CompanySlider';
import PostCreatorImg from '../SubPages/PostCreatorImg';
import ProfileViewer from '../SubPages/ProfileViewer';
import JobCard from '../SubPages/JobCard';
import ProfileList from '../SubPages/ProfileList';
import GalleryCard from '../SubPages/GalleryCard';
import JobCard2 from '../SubPages/JobCard2';
import JobListings from '../SubPages/JobListings';
import ProfileCard from '../SubPages/ProfileCart';

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap p-4 bg-gray-900">
      {/* Left Sidebar */}
      <aside className="w-full md:w-1/4 p-2 mb-4 md:mb-0">
        <ProfileCard />
        <ProfileViewer />
        <JobCard />
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-2/4 p-2 mb-4 md:mb-0">
        <PostCreator />
        <PostList />
        <CompanySlider />
        <PostCreatorImg />
      </main>

      {/* Right Sidebar */}
      <aside className="w-full md:w-1/4 p-2">
        <ProfileList />
        <GalleryCard />
        <JobCard2 />
        <JobListings />
      </aside>

      {/* Notification Toaster */}
      <Toaster position="top-right" />
    </div>
  );
};

export default HomePage;

