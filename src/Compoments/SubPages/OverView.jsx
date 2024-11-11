import React, { useState } from 'react';
import JobPostCard from './JobPostCard';

function OverView() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>

    <div className="p-6 bg-gray-800 rounded-lg mt-2 text-white">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-6">OverView</h1>

      {/* Description */}
      <p className="text-base">
        {isExpanded
          ? `As a passionate Full Stack Developer, I thrive in the world of web technologies and creative problem-solving. With a strong foundation in both front-end and back-end development, I am proficient in modern frameworks such as I’ve had the privilege of working on various projects ranging from dynamic e-commerce websites to interactive  React.js, Node.js, and Express.js. My goal is to create seamless, responsive web applications that provide users with an exceptional experience.
          
          Throughout my career, I’ve had the privilege of working on various projects ranging from dynamic e-commerce websites to interactive applications. Each project has refined my skills and taught me the importance of clean, maintainable code. I believe in delivering solutions that not only meet the client’s requirements but also exceed expectations.
          
          I take pride in my ability to adapt quickly to new technologies  the success of every project I undertake. Outside of development, I enjoy staying up-to-date with the latest trends in web  design and continually learning new skills to stay ahead in this ever-evolving field.`
          : `As a passionate Full Stack Developer, I thrive in the world of web technologies and creative problem-solving. With a strong foundation in both front-end and back-end development, I am proficient in modern frameworks such as React.js, Node.js, and Express.js. My goal is to create seamless, responsive web applications...`}
      </p>

      {/* Read More Button */}
      <button
        onClick={toggleReadMore}
        className="text-blue-400 mt-4 hover:underline"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
     </div>
     <div className="p-6 bg-gray-800 rounded-lg mt-4 text-white">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-6">Job Details</h1>

      {/* Table */}
      <table className="min-w-full text-left table-auto border-collapse">
        <thead>
          <tr className="bg-gray-800">
            <th className="px-6 py-3 text-lg font-semibold text-gray-300">Field</th>
            <th className="px-6 py-3 text-lg font-semibold text-gray-300">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-700">
            <td className="px-6 py-4 text-sm text-gray-400">Seniority Level</td>
            <td className="px-6 py-4 text-sm text-white">Mid-Senior level</td>
          </tr>
          <tr className="border-t border-gray-700">
            <td className="px-6 py-4 text-sm text-gray-400">Industry</td>
            <td className="px-6 py-4 text-sm text-white">Internet Information Technology & Services</td>
          </tr>
          <tr className="border-t border-gray-700">
            <td className="px-6 py-4 text-sm text-gray-400">Employment Type</td>
            <td className="px-6 py-4 text-sm text-white">Full-time</td>
          </tr>
          <tr className="border-t border-gray-700">
            <td className="px-6 py-4 text-sm text-gray-400">Job Functions</td>
            <td className="px-6 py-4 text-sm text-white">Other</td>
          </tr>
        </tbody>
      </table>
    </div>
     <JobPostCard  className=""/>
</div>
  );
}

export default OverView;
