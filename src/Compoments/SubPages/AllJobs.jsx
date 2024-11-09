import React, { useState } from "react";

const jobData = [
    {
      title: "Web Developer",
      company: "Invision",
      location: "India, Chennai",
      connections: 19,
      posted: "3 Days ago",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGotxw-I70YMQ/company-logo_100_100/company-logo_100_100/0/1683617270350/abhyazlearning_logo?e=1739404800&v=beta&t=qwqscMzrvvXDjIeyb2RNaqWhByZGTSFf7LICeDO1150",
      rating: 4.5,
      openJobsLink: "https://www.invision.com/careers",
      category: "Web Development",
      type: "Full-time",
    },
    {
      title: "React Developer",
      company: "Infraveo Technologies",
      location: "India, Mumbai",
      connections: 18,
      posted: "3 Days ago",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFUeDU-PsXePg/company-logo_100_100/company-logo_100_100/0/1690960464200?e=1739404800&v=beta&t=zm0IQCZrtP5HehrlziqiAa5_sk5hO4iy47xARnuhBn0",
      rating: 3.5,
      openJobsLink: "https://www.invision.com/careers",
      category: "Web Development",
      type: "Part-time",
    },
    {
      title: "React Native",
      company: "Zopsoft Technology Private Limited",
      location: "India, Pune",
      connections: 18,
      posted: "3 Days ago",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQE7Zf1-vvfbUA/company-logo_100_100/company-logo_100_100/0/1692876768583/infosys_logo?e=1739404800&v=beta&t=vXgQ0tNWTGWucUSF5urV7-ARRtk2kU2ILC5EO5r2Wis",
      rating: 4.5,
      openJobsLink: "https://www.invision.com/careers",
      category: "Web Development",
      type: "Full-time",
    },
    {
      title: "UI/UX Designer",
      company: "Finding Candidate",
      location: "India, Ujjian",
      connections: 18,
      posted: "3 Days ago",
      logo: "https://media.licdn.com/dms/image/v2/C510BAQHDfAnWj7iyfQ/company-logo_100_100/company-logo_100_100/0/1630595356509/mervan_agency_logo?e=1739404800&v=beta&t=XAhM1UQX7_rh-dz_vnk_QMoZrY2M2sAGE62NEslD0aA",
      rating: 4.5,
      openJobsLink: "https://www.invision.com/careers",
      category: "Designing",
      type: "Part-time",
    },
    {
      title: "UI/UX and Web Designer",
      company: "Mervan Agency",
      location: "India, Gujarat",
      connections: 18,
      posted: "3 Days ago",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFBdiTYG0zSLA/company-logo_100_100/company-logo_100_100/0/1691391872716/persistent_systems_logo?e=1739404800&v=beta&t=JcgELxh2SgKQrkZUluHrkJioFpL4BGY8s79SFv-x1Qc",
      rating: 4.5,
      openJobsLink: "https://www.invision.com/careers",
      category: "Designing",
      type: "Full-time",
    },
    {
      title: ".NET Developer",
      company: "Invision",
      location: "India, Pune",
      connections: 20,
      posted: "5 Days ago",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpEB0pwwB8BKgqs5msjHFdboMiy8LCFKKlQ&usqp=CAU",
      rating: 4.0,
      openJobsLink: "https://www.invision.com/careers",
      category: "Software Engineering",
      type: "Part-time",
    },
    {
      title: "Application Developer",
      company: "Accenture in India",
      location: "India, Hydrabad",
      connections: 20,
      posted: "5 Days ago",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQHbx0URQnbCKg/company-logo_100_100/company-logo_100_100/0/1719978199717/accentureindia_logo?e=1739404800&v=beta&t=lJARGMJbs0inXru-dnh3b72QtE30gs7QFeQvkwuk8mg",
      rating: 4.0,
      openJobsLink: "https://www.invision.com/careers",
      category: "Software Engineering",
      type: "Full-time",
    },
    {
      title: "Developer",
      company: "Wipro",
      location: "India, Hyderabad",
      connections: 20,
      posted: "5 Days ago",
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQEINH3Vf1swig/company-logo_100_100/company-logo_100_100/0/1730379480485/wipro_logo?e=1739404800&v=beta&t=xJoX_cetpMdOQ8XLODZstI4YBkCROdxHnAhhYUWdUCU",
      rating: 4.0,
      openJobsLink: "https://www.invision.com/careers",
      category: "Software Engineering",
      type: "Full-time",
    },
  ];

const CompanyCard = ({ job }) => {
  return (
    <div className="bg-gray-700 text-white p-6 rounded-md shadow-lg">
      <img
        src={job.logo}
        alt={job.company}
        className="w-16 h-16 rounded-full mb-4 mx-auto"
      />
      <h3 className="text-xl font-semibold">{job.title}</h3>
      <p className="text-sm">{job.company}</p>
      <p className="text-sm">{job.location}</p>
      <div className="mt-4">
        <span className="text-sm">{job.posted}</span>
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ${index < job.rating ? "text-yellow-500" : "text-gray-400"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              stroke="currentColor"
            >
              <path
                d="M10 15l3.09 1.63a1 1 0 001.42-1.07l-1.06-4.32 3.53-3.07a1 1 0 00-.6-1.7l-4.39-.34-1.5-4.29a1 1 0 00-1.9 0l-1.5 4.29-4.39.34a1 1 0 00-.6 1.7l3.53 3.07-1.06 4.32a1 1 0 001.42 1.07L10 15z"
              />
            </svg>
          ))}
        </div>
      </div>
      <a
        href={job.openJobsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 mt-4 block text-center"
      >
        Apply Now
      </a>
    </div>
  );
};

const AllJobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  // Apply search filter and type filter (Full-time, Part-time)
  const filteredJobs = jobData.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "All" || job.type === selectedType;
    
    return matchesSearch && matchesType;
  });

  // Remove duplicates based on title and company (ensures each job appears only once)
  const uniqueJobs = [
    ...new Map(filteredJobs.map((job) => [`${job.title}-${job.company}`, job])).values(),
  ];

  return (
    <div className="p-6 bg-gray-800 min-h-screen">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for jobs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-700 border-2 border-gray-500 focus:outline-none"
        />
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setSelectedType("All")}
          className={`p-2 text-white ${
            selectedType === "All" ? "bg-gray-600" : "bg-gray-700"
          } rounded-md`}
        >
          All Jobs
        </button>
        <button
          onClick={() => setSelectedType("Full-time")}
          className={`p-2 text-white ${
            selectedType === "Full-time" ? "bg-gray-600" : "bg-gray-700"
          } rounded-md`}
        >
          Full-time
        </button>
        <button
          onClick={() => setSelectedType("Part-time")}
          className={`p-2 text-white ${
            selectedType === "Part-time" ? "bg-gray-600" : "bg-gray-700"
          } rounded-md`}
        >
          Part-time
        </button>
      </div>

      {/* Job Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {uniqueJobs.length > 0 ? (
          uniqueJobs.map((job, index) => (
            <CompanyCard key={index} job={job} />
          ))
        ) : (
          <p className="text-white">No jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default AllJobs;
