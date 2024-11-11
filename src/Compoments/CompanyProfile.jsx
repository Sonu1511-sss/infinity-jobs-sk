import React, { useState } from "react";
import { toast } from "react-hot-toast";
import GalleryCard from "./SubPages/GalleryCard";
import JobCard from "./SubPages/JobCard";
import OverView from "./SubPages/OverView"
import JobPostCard from "./SubPages/JobPostCard";
import CompanyCard from "./SubPages/CompanyCard";
import { FaBell } from "react-icons/fa";
import ProfileList from "./SubPages/ProfileList";
import JobCard2 from "./SubPages/JobCard2";
import AllJobs from "./SubPages/AllJobs";

const CompanyProfile = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [review, setReview] = useState("");

  const handleSave = () => {
    toast.success("Job Saved!");
  };

  const handleApply = () => {
    toast.success("Application Submitted!");
  };

  const handleClick = () => {
    toast.success("Job alert has been set!");
  };

  const handleReviewSubmit = () => {
    if (review.trim()) {
      toast.success("Review submitted successfully!");
      setReview(""); // Reset the review input after submission
    } else {
      toast.error("Please write a review before submitting.");
    }
  };


  return (
    <div className="relative">
      {/* Top Half Page Image */}
      <div
        className="h-[27rem] w-full  bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/8761540/pexels-photo-8761540.jpeg?auto=compress&cs=tinysrgb&w=600')",
        }}
      >
        {/* Overlay for text */}
        <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          {/* Job Details */}
          <div className="text-center text-white p-8 max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Senior Ruby Developer</h1>
            <p className="text-lg mb-2">Envato</p>
            <p className="text-sm mb-6">Melbourne, AU</p>
            <p className="text-sm mb-8">Date Posted: 2 weeks ago</p>

            {/* Buttons */}
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition"
              >
                Save
              </button>
              <button
                onClick={handleApply}
                className="bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600 transition"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap p-4 bg-gray-900">
    {/* Left Sidebar */}
    <aside className="w-full md:w-1/4 p-2 mb-4 md:mb-0">
    <div className="max-w-sm mx-auto bg-gray-800 w-[20rem] shadow-lg rounded-lg overflow-hidden">
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
    <GalleryCard/>
    <JobCard/>
    </aside>

    {/* Main Content */}
    <main className="w-full md:w-2/4 p-2 mb-4 md:mb-0">
    {/* Tab Navigation */}
    <div className="flex justify-center mt-4 space-x-4 text-white">
        <button
          className={`py-2 px-4 ${activeTab === "overview" ? "bg-blue-500" : "bg-gray-700"} rounded-md`}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={`py-2 px-4 ${activeTab === "jobs" ? "bg-blue-500" : "bg-gray-700"} rounded-md`}
          onClick={() => setActiveTab("jobs")}
        >
          Jobs
        </button>
        <button
          className={`py-2 px-4 ${activeTab === "reviews" ? "bg-blue-500" : "bg-gray-700"} rounded-md`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === "overview" && <OverView />}
        {activeTab === "jobs" && <AllJobs />}
        {activeTab === "reviews" && (
          <div className="bg-gray-800 p-4 rounded-md">
            <h2 className="text-2xl text-white mb-4">Submit a Review</h2>
            <textarea
              className="w-full p-2 rounded-md bg-gray-700 text-white"
              placeholder="Write your review..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
            <button
              onClick={handleReviewSubmit}
              className="mt-2 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
            >
              Submit Review
            </button>
          </div>
        )}
      </div>
    </main>

    {/* Right Sidebar */}
    <aside className="w-full md:w-1/4 p-2">
      <JobPostCard />
      <CompanyCard />
      <ProfileList />
      <JobCard2 />
      <button
        onClick={handleClick}
        className="flex items-center justify-center mt-4 bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition w-full"
      >
        <FaBell className="mr-2" /> Set Job Alert
      </button>
    </aside>
  </div>
</div>
  );
};

export default CompanyProfile;
