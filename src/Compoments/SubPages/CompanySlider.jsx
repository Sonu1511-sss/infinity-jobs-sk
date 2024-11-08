import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Sample job data
const jobData = [
  {
    title: "web Developer",
    company: "Invision",
    location: "India, Balaghat",
    connections: 18,
    posted: "3 Days ago",
    logo: "https://connectshiksha.netlify.app/assets/images/logo/01.png", // Ensure this path is valid or replace with an imported image
  },
  {
    title: ".NET Developer",
    company: "Invision",
    location: "India, Pune",
    connections: 18,
    posted: "3 Days ago",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpEB0pwwB8BKgqs5msjHFdboMiy8LCFKKlQ&usqp=CAU", // Ensure this path is valid or replace with an imported image
  },
  {
    title: " Ruby Developer",
    company: "Envato",
    location: "India, Bangloare",
    connections: 18,
    posted: "2 Days ago",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQHVUb8KeHv_-A/company-logo_100_100/company-logo_100_100/0/1709249414071/opentable_logo?e=1739404800&v=beta&t=XANaFUXhVIQGEVyEHL3_SpyXy6ap4LuVDY-9LjPpg5I", // Ensure this path is valid or replace with an imported image
  },
  {
    title: "UI/UX Designer",
    company: "Envato",
    location: "India, Punjab",
    connections: 18,
    posted: "3 Days ago",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQFMNl9QNxOCIw/company-logo_100_100/company-logo_100_100/0/1680386034454/kreativstorm_logo?e=1739404800&v=beta&t=ABBnt1uIWFI7B9CiADKFieakr3G5ngpKF0zSplYVz28", // Ensure this path is valid or replace with an imported image
  },
  
  // Add more job objects as needed
];

const CompanySlider = () => {
  return (
    <Swiper className='bg-gray-700 w-[43.2rem] p-7 rounded-lg'
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]} // Add the modules to the Swiper component
    >
      {jobData.map((job, index) => (
        <SwiperSlide key={index} className="p-4 bg-gray-800 rounded-lg shadow-md">
          <div className="text-white">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold">{job.title}</h3>
              <img src={job.logo} alt={`${job.company} logo`} className="h-6 w-6" />
            </div>
            <p className="text-sm text-blue-400">{job.company}</p>
            <p className="text-xs">{job.location}</p>
            <div className="mt-3">
              <div className="flex items-center mb-1">
                <div className="flex -space-x-1">
                  <img src="./assids/dharam.jpeg" alt="connection" className="w-6 h-6 rounded-full border-2 border-gray-700" />
                  <img src="./assids/nilkhil.jpeg" alt="connection" className="w-6 h-6 rounded-full border-2 border-gray-700" />
                  <img src="./assids/samjay.jpeg" alt="connection" className="w-6 h-6 rounded-full border-2 border-gray-700" />
                </div>
                <span className="ml-2 text-sm">{job.connections} connections</span>
              </div>
              <p className="text-xs">Posted {job.posted}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CompanySlider;
