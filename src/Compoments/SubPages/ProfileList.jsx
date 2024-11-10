import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

// Profile Card component
const ProfileList = () => {
  // Array of persons (maximum 5)
  const people = [
    { name: 'Nithesh Kumar', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600', work: 'Software Engineer' },
    { name: 'Harsh chandela', image: 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600', work: 'Product Manager' },
    { name: 'bhisma shnai', image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600', work: 'UX Designer' },
    { name: 'Sanjay kumar', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600', work: 'Data Scientist' },
    { name: 'Charlie White', image: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=600', work: 'Front-End Developer' },
  ];

  // State to track connection requests sent
  const [connected, setConnected] = useState({});

  // Function to handle connection send action
  const handleSendConnection = (name) => {
    setConnected((prevState) => ({
      ...prevState,
      [name]: true, // Mark the person as connected
    }));

    toast.success(`Connection request sent to ${name}!`, {
      duration: 3000,
      position: 'top-right',
      style: {
        background: '#333',
        color: '#fff',
        padding: '10px',
        borderRadius: '10px',
      },
    });
  };

  return (
    <div className="space-y-4 w-[20rem] p-2 bg-gray-800 rounded-lg mt-4 ml-4">
      {/* Headline */}
      <h2 className="text-2xl font-semibold text-center text-white mb-6">People you might know</h2>

      {/* Profile Cards */}
      {people.map((person, index) => (
        <div key={index} className="flex items-center max-w-xs justify-between ">
          {/* Profile Image */}
          <img
            src={person.image} // Ensure 'image' is a valid URL or path
            alt={`${person.name}'s Profile`}
            className="w-10 h-10 object-cover rounded-full"
          />

          {/* Person Name and Work */}
          <div className="flex flex-col">
            <h3 className="text-[1rem] font-semibold text-white">{person.name}</h3>
            <p className="text-sm text-gray-400">{person.work}</p>
          </div>

          {/* Send Connection Icon */}
          <div
            onClick={() => handleSendConnection(person.name)}
            className={`${
              connected[person.name] ? 'bg-green-600' : 'bg-blue-600'
            } text-white p-2 rounded-full hover:bg-blue-700 cursor-pointer`}
          >
            <FaUser className="text-white text-xl" />
          </div>
        </div>
      ))}

      {/* Toast Container */}
      <Toaster />
    </div>
  );
};

export default ProfileList;

