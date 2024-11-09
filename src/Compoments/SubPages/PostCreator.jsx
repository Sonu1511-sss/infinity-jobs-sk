import React, { useState } from "react";
import {
  FaEdit,
  FaPhotoVideo,
  FaFileAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const PostCreator = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handlePost = () => {
    toast.dismiss();
    toast.success("Post published successfully!");
  };

  return (
    <div className="p-2 sm:p-4 md:p-6">
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#333",
            color: "#fff",
            padding: "10px",
            borderRadius: "10px",
          },
        }}
      />
      {/* Tab Section */}
      <div className="space-x-1 sm:space-x-2 p-2 rounded-lg bg-gray-800">
        <div className="flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-4 p-2 rounded-lg border-t-0 border-gray-700">
          {/* Tab Buttons */}
          <button
            onClick={() => setActiveTab(0)}
            className={`flex items-center space-x-1 sm:space-x-2 cursor-pointer text-xs sm:text-sm md:text-base relative ${
              activeTab === 0 ? "text-blue-500" : "text-white"
            }`}
          >
            <FaEdit />
            <span>Update</span>
            {activeTab === 0 && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transition-all duration-300"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab(1)}
            className={`flex items-center space-x-1 sm:space-x-2 cursor-pointer text-xs sm:text-sm md:text-base relative ${
              activeTab === 1 ? "text-blue-500" : "text-white"
            }`}
          >
            <FaPhotoVideo />
            <span>Photo</span>
            {activeTab === 1 && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transition-all duration-300"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab(2)}
            className={`flex items-center space-x-1 sm:space-x-2 cursor-pointer text-xs sm:text-sm md:text-base relative ${
              activeTab === 2 ? "text-blue-500" : "text-white"
            }`}
          >
            <FaFileAlt />
            <span>Article</span>
            {activeTab === 2 && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transition-all duration-300"></div>
            )}
          </button>
        </div>

        {/* Tab Panels */}
        {activeTab === 0 && (
          <div className="p-2 sm:p-4 mt-2 shadow-md rounded-md bg-gray-800">
            <h2 className="text-white text-sm sm:text-lg">Share an update</h2>
            <textarea
              placeholder="Share an update..."
              className="w-full bg-gray-700 p-2 rounded-md mt-2 text-white text-sm"
            ></textarea>
            <div className="flex flex-col sm:flex-row sm:justify-between mt-2 space-y-2 sm:space-y-0 sm:space-x-4">
              <label className="flex items-center space-x-2 text-gray-300 w-full sm:w-auto">
                <FaMapMarkerAlt />
                <input
                  type="text"
                  placeholder="Add a location"
                  className="bg-gray-600 px-2 py-1 rounded-md text-white w-full sm:w-48 text-sm focus:outline-none"
                />
              </label>
              <div className="flex space-x-2 justify-end w-full sm:w-auto">
                <button className="bg-blue-600 w-full sm:w-auto px-4 py-2 rounded-md text-white hover:bg-blue-700 text-xs sm:text-sm">
                  Preview
                </button>
                <button
                  onClick={handlePost}
                  className="bg-green-600 w-full sm:w-auto px-4 py-2 rounded-md text-white hover:bg-green-700 text-xs sm:text-sm"
                >
                  Post Status
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div className="bg-gray-800 p-2 sm:p-4 mt-2 rounded-lg shadow-md">
            <h2 className="text-white text-sm sm:text-lg">Upload a photo</h2>
            <textarea
              placeholder="Upload a photo..."
              className="w-full bg-gray-700 p-2 rounded-md mt-2 text-white text-sm"
            ></textarea>
            <div className="flex flex-col sm:flex-row sm:justify-between mt-2 space-y-2 sm:space-y-0 sm:space-x-4">
              <label className="flex items-center space-x-2 text-gray-300 w-full sm:w-auto">
                <FaMapMarkerAlt />
                <input
                  type="text"
                  placeholder="Add a location"
                  className="bg-gray-600 px-2 py-1 rounded-md text-white w-full sm:w-48 text-sm focus:outline-none"
                />
              </label>
              <div className="flex space-x-2 justify-end w-full sm:w-auto">
                <button className="bg-blue-600 w-full sm:w-auto px-4 py-2 rounded-md text-white hover:bg-blue-700 text-xs sm:text-sm">
                  Preview
                </button>
                <button
                  onClick={handlePost}
                  className="bg-green-600 w-full sm:w-auto px-4 py-2 rounded-md text-white hover:bg-green-700 text-xs sm:text-sm"
                >
                  Post Status
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className="bg-gray-800 p-2 sm:p-4 mt-2 rounded-lg shadow-md">
            <h2 className="text-white text-sm sm:text-lg">Write an article</h2>
            <textarea
              placeholder="Write an article..."
              className="w-full bg-gray-700 p-2 rounded-md mt-2 text-white text-sm"
            ></textarea>
            <div className="flex flex-col sm:flex-row sm:justify-between mt-2 space-y-2 sm:space-y-0 sm:space-x-4">
              <label className="flex items-center space-x-2 text-gray-300 w-full sm:w-auto">
                <FaMapMarkerAlt />
                <input
                  type="text"
                  placeholder="Add a location"
                  className="bg-gray-600 px-2 py-1 rounded-md text-white w-full sm:w-48 text-sm focus:outline-none"
                />
              </label>
              <div className="flex space-x-2 justify-end w-full sm:w-auto">
                <button className="bg-blue-600 w-full sm:w-auto px-4 py-2 rounded-md text-white hover:bg-blue-700 text-xs sm:text-sm">
                  Preview
                </button>
                <button
                  onClick={handlePost}
                  className="bg-green-600 w-full sm:w-auto px-4 py-2 rounded-md text-white hover:bg-green-700 text-xs sm:text-sm"
                >
                  Post Status
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCreator;
