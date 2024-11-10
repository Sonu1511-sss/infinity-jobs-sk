import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const JobPostCard = () => {
  const [showFullText, setShowFullText] = useState(false);

  const handleFollow = () => {
    toast.success('Followed!');
  };

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="bg-gray-800 p-6 mt-4 rounded-lg text-white flex flex-col mb-6">
      {/* Top Section: Profile Image, Name, and Follow Button */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&h=226.525&fit=crop&w=253.17499999999998&dpr=1"
            alt="Profile"
            className="rounded-full w-16 h-16 object-cover mr-4"
          />
          <div>
            <h3 className="text-xl font-semibold">Harshit Sharma</h3>
            <p className="text-sm text-gray-400">Senior Developer</p>
          </div>
        </div>

        {/* Follow Button (smaller, aligned right) */}
        <button
          onClick={handleFollow}
          className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 text-sm"
        >
          Follow
        </button>
      </div>

      {/* Images Section */}
      <div className="flex space-x-4 mb-4">
        <div className="w-1/3">
          <img
            src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Post Image 1"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="w-1/3">
          <img
            src="https://images.pexels.com/photos/5499551/pexels-photo-5499551.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Post Image 2"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="w-1/3">
          <img
            src="https://images.pexels.com/photos/8111881/pexels-photo-8111881.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Post Image 3"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      {/* About Us Text */}
      <div className="text-base text-gray-300 mb-4">
        <p>
          {showFullText
            ? "We are a passionate team of developers who love to create impactful projects. We work on both front-end and back-end technologies to deliver seamless and interactive web experiences. We thrive on challenges and always look for opportunities to innovate. Our focus is on creating user-centric solutions that solve real-world problems."
            : "We are a passionate team of developers who love to create impactful projects. We work on both front-end and back-end technologies..."}
        </p>
      </div>

      {/* Read More Button */}
      <button onClick={toggleText} className="text-blue-400 hover:underline">
        {showFullText ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default JobPostCard;
