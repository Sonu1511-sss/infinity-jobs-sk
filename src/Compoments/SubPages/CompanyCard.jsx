import React from 'react';

// Sample job data for two companies
const jobData = [
  {
    title: "Android Developer",
    company: "Invision",
    location: "India, Bangloare",
    connections: 18,
    posted: "3 Days ago",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHhkpaac5S9nw/company-logo_100_100/company-logo_100_100/0/1719256480492?e=1739404800&v=beta&t=Ev4XzZmByClnh31oeRv3B61CrWFNS_wbea7OXi1SKLg",
    rating: 4.5, // Out of 5 stars
    openJobsLink: "https://www.invision.com/careers", // Link to the company's job page
  },
  {
    title: "React Developer",
    company: "Invision",
    location: "India, Pune",
    connections: 20,
    posted: "5 Days ago",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFUeDU-PsXePg/company-logo_100_100/company-logo_100_100/0/1690960464200?e=1739404800&v=beta&t=zm0IQCZrtP5HehrlziqiAa5_sk5hO4iy47xARnuhBn0",
    rating: 4.0, // Out of 5 stars
    openJobsLink: "https://www.invision.com/careers",
  },
  // Add more job data as needed
];

const JobCard = ({ job }) => {
  return (
    <div className="bg-gray-700 p-4 rounded-lg shadow-md mb-2 w-[20rem] mt-5 ml-4">
      <div className="flex justify-between items-center mb-4">
        {/* Job Title and Company */}
        <h3 className="text-lg font-semibold text-white">{job.title}</h3>
        <img src={job.logo} alt={`${job.company} logo`} className="h-8 w-8" />
      </div>

      <p className="text-sm text-blue-400">{job.company}</p>
      <p className="text-xs text-gray-400">{job.location}</p>

      <div className="mt-2">
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

        {/* Rating */}
        <div className="flex items-center mt-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg
              key={index}
              className={`h-4 w-4 ${index < Math.floor(job.rating) ? 'text-yellow-400' : 'text-gray-500'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09L5.34 12.9 1 9.5l6.317-.97L10 3l2.683 5.53L19 9.5l-4.34 3.4 1.218 5.19L10 15z" />
            </svg>
          ))}
        </div>
        
        {/* Open Jobs Link */}
        <a
          href={job.openJobsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-sm mt-2 block"
        >
          View open jobs
        </a>
      </div>
    </div>
  );
};

const CompanyCard = () => {
  return (
    <div className="flex flex-wrap">
      {jobData.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

export default CompanyCard;
