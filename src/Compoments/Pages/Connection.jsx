import React from "react";
import Suggestions from "../SubPages/Suggestion";
import ManageNetwork from "../SubPages/ManageNetwok";
import ProfileCard from "../SubPages/ProfileCart";
import JobCard from "../SubPages/JobCard";
import JobCard3 from "../SubPages/JobCard3";

const Connection = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap p-4 bg-gray-900">
    {/* Left Sidebar */}
    <aside className="w-full md:w-1/4 p-2 mb-4 md:mb-0">
   <ProfileCard/>
   <JobCard/>
    </aside>

    {/* Main Content */}
    <main className="w-full md:w-2/4 p-2 mb-4 md:mb-0">
 <Suggestions/>
    </main>

    {/* Right Sidebar */}
    <aside className="w-full md:w-1/4 p-2">
<ManageNetwork/>
<JobCard3/>
    </aside>

  </div>
  );
};

export default Connection;
