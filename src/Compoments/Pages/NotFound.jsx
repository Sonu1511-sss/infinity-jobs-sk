import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate back to the previous pages
  };

  const goToHelp = () => {
    // Redirect to the help page (change the route as needed)
    navigate('/help');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-8 relative overflow-hidden">
      {/* Background Circle Animation */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gray-600 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-600 rounded-full opacity-30 animate-pulse"></div>

      {/* Main Content */}
      <div className="text-center z-10">
        {/* Large Image or Heading */}
        <h1 className="text-5xl sm:text-7xl font-extrabold text-indigo-400 mb-6 animate__animated animate__fadeInUp">404 NOT FOUND</h1>

        {/* Error Message */}
        <h2 className="text-2xl sm:text-4xl font-semibold mb-4 animate__animated animate__fadeInUp animate__delay-1s">
          Page Not Found
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-6 animate__animated animate__fadeInUp animate__delay-2s">
          Oops! Looks like you followed a bad link.
        </p>
        <p className="text-base sm:text-lg text-gray-300 mb-8 animate__animated animate__fadeInUp animate__delay-3s">
          If you think this is a problem with us, please tell us.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center">
          <button
            onClick={goBack}
            className="bg-indigo-700 hover:bg-indigo-600 text-white py-3 px-8 rounded-lg shadow-xl transform transition duration-300 ease-in-out hover:scale-105 mb-4 sm:mb-0 animate__animated animate__fadeInUp animate__delay-4s"
          >
            Go Back
          </button>
          <button
            onClick={goToHelp}
            className="bg-gray-700 hover:bg-gray-800 text-white py-3 px-8 rounded-lg shadow-xl transform transition duration-300 ease-in-out hover:scale-105 animate__animated animate__fadeInUp animate__delay-5s"
          >
            Help
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
