import React from "react";
import JobCard from "../SubPages/JobCard";
import CompanyCard from "../SubPages/CompanyCard";
import JobListings from "../SubPages/JobListings";
import ProfileList from "../SubPages/ProfileList";
import AllJobs from "../SubPages/AllJobs";

function Job() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap p-4 bg-gray-900">
      {/* Left Sidebar */}
      <aside className="w-full md:w-1/4 p-2 mb-4 md:mb-0">
        <JobCard />
        <CompanyCard/>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-2/4 p-2 mb-4 md:mb-0">
    <AllJobs/>
      </main>

      {/* Right Sidebar */}
      <aside className="w-[20rem] md:w-1/4 p-2">
      <h2 className="text-white text-2xl pl-7 font-bold ">Because you viewed</h2>
      <p className="text-gray-600 text-base pl-8 font-mediume">Designer at Google?</p>
     <JobListings/>
     <ProfileList/>
      </aside>
    </div>
  );
}

export default Job;
