import React, { useState } from 'react';

function OverView() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
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
  );
}

export default OverView;
