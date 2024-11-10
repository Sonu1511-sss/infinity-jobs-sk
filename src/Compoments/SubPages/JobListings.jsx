import React from 'react';
import { Link } from 'react-router-dom';

// Sample job data for two companies
const jobData = [
  {
    title: "Web Developer",
    company: "Invision",
    location: "India, Balaghat",
    connections: 18,
    posted: "3 Days ago",
    logo: "https://connectshiksha.netlify.app/assets/images/logo/01.png",
  },
  {
    title: ".NET Developer",
    company: "Invision",
    location: "India, Pune",
    connections: 20,
    posted: "5 Days ago",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpEB0pwwB8BKgqs5msjHFdboMiy8LCFKKlQ&usqp=CAU",
  }
];

const JobCard = ({ job }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6 w-[20rem] mt-5 ml-4">
      <div className="flex justify-between items-center mb-4">
        {/* Job Title and Company */}
        <Link to={`/company/${job.company}`} className="text-lg font-semibold text-white">
          {job.title}
        </Link>
        <img src={job.logo} alt={`${job.company} logo`} className="h-8 w-8" />
      </div>

      <p className="text-sm text-blue-400">{job.company}</p>
      <p className="text-xs text-gray-400">{job.location}</p>

      <div className="mt-4">
        {/* Connections */}
        <div className="flex items-center mb-2">
          <div className="flex -space-x-1">
            <img src="./assids/dharam.jpeg" alt="connection" className="w-6 h-6 rounded-full border-2 border-gray-700" />
            <img src="./assids/nilkhil.jpeg" alt="connection" className="w-6 h-6 rounded-full border-2 border-gray-700" />
            <img src="./assids/samjay.jpeg" alt="connection" className="w-6 h-6 rounded-full border-2 border-gray-700" />
          </div>
          <span className="ml-2 text-sm text-gray-300">{job.connections} connections</span>
        </div>

        {/* Posted Date */}
        <p className="text-xs text-gray-400">Posted {job.posted}</p>
      </div>
    </div>
  );
};

const JobListings = () => {
  return (
    <div className="">
      {/* Render Job Cards */}
      {jobData.map((job, index) => (
        <div key={index} className="w-full md:w-1/2 lg:w-1/3">
          <JobCard job={job} />
        </div>
      ))}
    </div>
  );
};

export default JobListings;
