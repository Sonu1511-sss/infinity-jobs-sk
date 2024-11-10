import React from 'react';
import { FaUserFriends, FaAddressBook, FaUsers, FaHashtag, FaRegBuilding } from 'react-icons/fa';

const networkData = [
  {
    title: 'Connections',
    count: 68,
    icon: <FaUserFriends className="text-blue-500" />,
  },
  {
    title: 'Contacts',
    count: 869,
    icon: <FaAddressBook className="text-green-500" />,
  },
  {
    title: 'People I Follow',
    count: 156,
    icon: <FaUsers className="text-indigo-500" />,
  },
  {
    title: 'Groups',
    count: 15,
    icon: <FaRegBuilding className="text-yellow-500" />,
  },
  {
    title: 'Page',
    count: 3,
    icon: <FaRegBuilding className="text-pink-500" />,
  },
  {
    title: 'Hashtags',
    count: 8,
    icon: <FaHashtag className="text-gray-500" />,
  },
];

const ManageNetwork = () => {
  return (
    <div className="p-6 bg-gray-800 text-white w-[20rem] mt-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Manage My Network</h2>
      <div className="space-y-6">
        {networkData.map((item, index) => (
          <div key={index} className="flex items-center space-x-6">
            <div className="text-2xl">{item.icon}</div>
            <div>
              <p className="text-[1rem] font-medium">{item.title}</p>
              <p className="text-1xl font-semibold">{item.count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageNetwork;
