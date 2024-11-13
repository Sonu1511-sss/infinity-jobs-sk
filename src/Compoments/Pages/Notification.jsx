import React from 'react';
import NotificationCard from '../SubPages/NotificationCard';
import CompanyCard from '../SubPages/CompanyCard';
import ProfileList from '../SubPages/ProfileList';
import JobCard2 from '../SubPages/JobCard2';
import { FaBell } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

function Notification() {
  const notifications = [
    {
      id: 1,
      title: "DAILY RUNDOWN: WEDNESDAY",
      description:
        "Income tax sops on the cards, The bias in VC funding, and other top news for you",
      date: "3d",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg", // Random profile image
      jobDetails: {
        company: "wrapbootstrap Ltd",
        jobTitle: "Vivamus imperdiet venenatis est...",
      },
    },
    {
      id: 2,
      title: "DAILY RUNDOWN: THURSDAY",
      description: "Latest updates on the tech world and more!",
      date: "2d",
      profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
      jobDetails: {
        company: "TechCo",
        jobTitle: "Software Developer",
      },
    },
    {
      id: 3,
      title: "DAILY RUNDOWN: FRIDAY",
      description: "Breaking news in the stock market.",
      date: "1d",
      profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
      jobDetails: {
        company: "StockMasters",
        jobTitle: "Financial Analyst",
      },
    },
    {
      id: 4,
      title: "DAILY RUNDOWN: SATURDAY",
      description: "Startup news: major funding rounds this week.",
      date: "6h",
      profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
      jobDetails: {
        company: "StartUpX",
        jobTitle: "Business Development",
      },
    },
    {
      id: 5,
      title: "DAILY RUNDOWN: SUNDAY",
      description: "Tips for improving your remote work life.",
      date: "4h",
      profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
      jobDetails: {
        company: "RemoteWork Inc.",
        jobTitle: "Remote Job Specialist",
      },
    },
    {
      id: 6,
      title: "DAILY RUNDOWN: MONDAY",
      description: "AI news: the latest breakthroughs in technology.",
      date: "2h",
      profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
      jobDetails: {
        company: "AI Innovations",
        jobTitle: "AI Researcher",
      },
    },
    {
      id: 7,
      title: "DAILY RUNDOWN: TUESDAY",
      description: "Crypto news: market trends and analysis.",
      date: "1h",
      profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
      jobDetails: {
        company: "CryptoCorp",
        jobTitle: "Blockchain Developer",
      },
    },
  ];

  const handleViewJob = (jobTitle) => {
    toast.success(`Viewing job: ${jobTitle}`);
    // Add functionality to navigate to the job page
  };
 // Separate recent and earlier notifications
 const recentNotifications = notifications.slice(0, 2); // Recent (first 3)
 const earlierNotifications = notifications.slice(3); // Earlier (after 3)

  return (
<div className="flex flex-col md:flex-row flex-wrap p-4 bg-gray-900">
      {/* right Sidebar */}
      <aside className="w-full md:w-1/4 p-2 mb-4 md:mb-0">
   <NotificationCard/>
   <div className="max-w-sm mx-auto bg-gray-800 w-[20rem] mt-4 shadow-lg rounded-lg overflow-hidden">
      {/* Logo Image */}
      <div className="flex justify-center py-4">
        <img
          src="data:image/png;base64,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 "className="h-28 w-auto object-contain"
        />
      </div>

      {/* Job Details */}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-center text-white mb-2">Envato</h2>
        <p className="text-gray-100 text-center mb-2">Melbourne, AU</p>
        <p className="text-sm text-gray-300 text-center mb-4">
          <span className="font-semibold">Posted:</span> 1 day ago
        </p>

        {/* Applicant Rank */}
        <div className="text-center mb-6">
          <p className="text-sm text-gray-100">
            <span className="font-semibold">Applicant Rank:</span> 25
          </p>
        </div>


      </div>
    </div>
    </aside>
      {/* Main Content */}
      <main className="w-[43rem]  p-4 bg-gray-900">
        {/* Title */}
        <h2 className="text-xl font-semibold text-white">Recent Notifications</h2>

        {/* Recent Notifications */}
        <div className="mt-4 space-y-4">
          {recentNotifications.map((notification) => (
            <div key={notification.id} className="bg-gray-800 rounded-lg shadow-md p-4">
              <h3 className="text-white font-medium">{notification.title}</h3>
              <p className="text-gray-400">{notification.description}</p>
              <div className="flex items-center mt-2 space-x-3">
                <img
                  src={notification.profileImage}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="text-white font-medium">{notification.jobDetails.company}</p>
                  <p className="text-gray-400">{notification.jobDetails.jobTitle}</p>
                </div>
              </div>
              <button
                onClick={() => handleViewJob(notification.jobDetails.jobTitle)}
                className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg"
              >
                View Job
              </button>
            </div>
          ))}
        </div>

        {/* Earlier Notifications */}
        <h3 className="text-xl font-semibold text-white mt-8">Earlier Notifications</h3>
        <div className="mt-4 space-y-4">
          {earlierNotifications.map((notification) => (
            <div key={notification.id} className="bg-gray-800 rounded-lg shadow-md p-4">
              <h3 className="text-white font-medium">{notification.title}</h3>
              <p className="text-gray-400">{notification.description}</p>
              <div className="flex items-center mt-2 space-x-3">
                <img
                  src={notification.profileImage}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="text-white font-medium">{notification.jobDetails.company}</p>
                  <p className="text-gray-400">{notification.jobDetails.jobTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
          {/* Left Sidebar */}
      <aside className="w-full md:w-1/4 p-2">
    <button
      className="flex items-center space-x-2 px-11 py-2 bg-red-500 mt-4 ml-8 w-60 text-center text-white rounded hover:bg-red-600"
    >
    <FaBell />{/* Job icon */}
      <span>Set Job Alert</span>
    </button>
    <h2 className="text-white text-2xl pt-2 pl-9 font-bold ">Similar Jobs</h2>
     <CompanyCard/>
     <ProfileList/>
     <JobCard2/>
    </aside>
  </div>
  )
}

export default Notification