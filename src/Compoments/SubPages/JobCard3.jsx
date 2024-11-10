import React from 'react';

const JobCard3 = () => {
  return (
    <div className="max-w-sm mt-4 bg-gray-800 w-[20rem] text-white rounded-lg overflow-hidden shadow-lg p-4">
    <div className="flex items-center justify-between mb-4">
      {/* Profile Images */}
      <div className="flex space-x-4">
        <img 
          src="./assids/dharam.jpeg" 
          alt="Profile 1"
          className="w-20 h-20 rounded-full object-cover"
        />
        <img 
          src="./assids/nilkhil.jpeg" 
          alt="Profile 2"
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>
    </div>

    <div className="p-4">
      <h3 className="text-lg font-semibold">Dharam Nikhil</h3>
      <p className="text-sm text-gray-400 mb-4">Grow your career by following Wrapbootstrap</p>
      <p className="text-sm mb-4">Stay up-to-date with industry trends!</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full w-full md:w-auto">
        Follow
      </button>
    </div>
  </div>
  );
};

export default JobCard3;
