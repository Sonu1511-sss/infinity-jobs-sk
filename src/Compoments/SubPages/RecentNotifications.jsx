import React from "react";
import { toast, Toaster } from "react-hot-toast"; // Import toast for notifications

const RecentNotifications = () => {
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
    // Add more notifications here
  ];

  const handleViewJob = (jobTitle) => {
    toast.success(`Viewing job: ${jobTitle}`);
    // Add functionality to navigate to the job page
  };

  return (
    <div className="space-y-4 p-4 bg-gray-800 text-white">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="flex items-start space-x-4 border-b border-gray-600 pb-4"
        >
          <img
            src={notification.profileImage}
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1">
            <h2 className="text-xl font-semibold">{notification.title}</h2>
            <p className="text-sm text-gray-400">{notification.description}</p>
            <p className="text-xs text-gray-500">{notification.date}</p>

            <div className="mt-2 flex items-center space-x-2">
              <p className="text-sm text-green-400">{notification.jobDetails.company}</p>
              <p className="text-sm text-gray-300">{notification.jobDetails.jobTitle}</p>
            </div>

            <button
              onClick={() => handleViewJob(notification.jobDetails.jobTitle)}
              className="mt-2 text-sm text-blue-500 hover:underline"
            >
              View Job
            </button>
          </div>
        </div>
      ))}
      <Toaster />
    </div>
  );
};

export default RecentNotifications;
