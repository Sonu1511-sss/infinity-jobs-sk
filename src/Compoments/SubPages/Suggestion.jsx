import React from 'react';

const suggestions = [
  {
    name: 'Dharam patle',
    role: 'Mern Developer',
    mutualConnections: 4,
    profileImage: './assids/dharam.jpeg', 
    connections: [
      'https://media.licdn.com/dms/image/v2/D4D03AQFl-mlxBS6PQw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1724243812887?e=1736985600&v=beta&t=hjBP-IBZ9Q5ZW1ZUqc0S--Ta2l3iR9LgHIzQIoN6BRk', 
      'https://media.licdn.com/dms/image/v2/D4D03AQG742R0dPrvWg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1693855162478?e=1736985600&v=beta&t=UgXsQ29WciCxVkVl3nE4exBiG_PZy5ix5QxpPyAGw10',
      'https://media.licdn.com/dms/image/v2/D4D03AQGdWEfAwGEo_g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1684253533657?e=1736985600&v=beta&t=eKwxOUcBmx34LvT2ea5YPvKFq52-kuse1EHoFlB8c2w',
      'https://media.licdn.com/dms/image/v2/D4D03AQF6N9VVJxXaZA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718214076582?e=1736985600&v=beta&t=RbuFhXrMA-flj4sW48R6b-GAELxJlD4FLMGrY-kJ3Vs', 
    ],
  },
  {
    name: 'Sanjay Shende',
    role: 'Photographer',
    mutualConnections: 8,
    profileImage: './assids/samjay.jpeg',
    connections: [
        'https://media.licdn.com/dms/image/v2/D4D03AQFl-mlxBS6PQw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1724243812887?e=1736985600&v=beta&t=hjBP-IBZ9Q5ZW1ZUqc0S--Ta2l3iR9LgHIzQIoN6BRk', 
        'https://media.licdn.com/dms/image/v2/D4D03AQG742R0dPrvWg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1693855162478?e=1736985600&v=beta&t=UgXsQ29WciCxVkVl3nE4exBiG_PZy5ix5QxpPyAGw10',
        'https://media.licdn.com/dms/image/v2/D4D03AQGdWEfAwGEo_g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1684253533657?e=1736985600&v=beta&t=eKwxOUcBmx34LvT2ea5YPvKFq52-kuse1EHoFlB8c2w',
        'https://media.licdn.com/dms/image/v2/D4D03AQF6N9VVJxXaZA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718214076582?e=1736985600&v=beta&t=RbuFhXrMA-flj4sW48R6b-GAELxJlD4FLMGrY-kJ3Vs', 
      ],
  },
  {
    name: 'Nikhil Waghade',
    role: 'Backend Developer',
    mutualConnections: 4,
    profileImage: './assids/nilkhil.jpeg',
    connections: [
        'https://media.licdn.com/dms/image/v2/D4D03AQFl-mlxBS6PQw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1724243812887?e=1736985600&v=beta&t=hjBP-IBZ9Q5ZW1ZUqc0S--Ta2l3iR9LgHIzQIoN6BRk', 
        'https://media.licdn.com/dms/image/v2/D4D03AQG742R0dPrvWg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1693855162478?e=1736985600&v=beta&t=UgXsQ29WciCxVkVl3nE4exBiG_PZy5ix5QxpPyAGw10',
        'https://media.licdn.com/dms/image/v2/D4D03AQGdWEfAwGEo_g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1684253533657?e=1736985600&v=beta&t=eKwxOUcBmx34LvT2ea5YPvKFq52-kuse1EHoFlB8c2w',
        'https://media.licdn.com/dms/image/v2/D4D03AQF6N9VVJxXaZA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718214076582?e=1736985600&v=beta&t=RbuFhXrMA-flj4sW48R6b-GAELxJlD4FLMGrY-kJ3Vs', 
      ],
  },
  {
    name: 'Sunil Solanki',
    role: 'Angula Developer',
    mutualConnections: 4,
    profileImage: 'https://media.licdn.com/dms/image/v2/D5603AQFrMWghLn_U-w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1719018147388?e=1736985600&v=beta&t=peqp1hKV4BkjjVHa5-8INQTPFbSbB2beWaT19ayVTFA',
    connections: [
        'https://media.licdn.com/dms/image/v2/D4D03AQFl-mlxBS6PQw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1724243812887?e=1736985600&v=beta&t=hjBP-IBZ9Q5ZW1ZUqc0S--Ta2l3iR9LgHIzQIoN6BRk', 
        'https://media.licdn.com/dms/image/v2/D4D03AQG742R0dPrvWg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1693855162478?e=1736985600&v=beta&t=UgXsQ29WciCxVkVl3nE4exBiG_PZy5ix5QxpPyAGw10',
        'https://media.licdn.com/dms/image/v2/D4D03AQGdWEfAwGEo_g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1684253533657?e=1736985600&v=beta&t=eKwxOUcBmx34LvT2ea5YPvKFq52-kuse1EHoFlB8c2w',
        'https://media.licdn.com/dms/image/v2/D4D03AQF6N9VVJxXaZA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718214076582?e=1736985600&v=beta&t=RbuFhXrMA-flj4sW48R6b-GAELxJlD4FLMGrY-kJ3Vs', 
      ],
  },
  {
    name: 'Anklit Salni',
    role: 'java Developer',
    mutualConnections: 4,
    profileImage: 'https://media.licdn.com/dms/image/v2/D4D03AQEs162_TIXZVg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1689858954946?e=1736985600&v=beta&t=0N3l0IF4Uk1jApyHV_0IwHHp5xhe_RIHQLhcjRKluWA',
    connections: [
        'https://media.licdn.com/dms/image/v2/D4D03AQFl-mlxBS6PQw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1724243812887?e=1736985600&v=beta&t=hjBP-IBZ9Q5ZW1ZUqc0S--Ta2l3iR9LgHIzQIoN6BRk', 
        'https://media.licdn.com/dms/image/v2/D4D03AQG742R0dPrvWg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1693855162478?e=1736985600&v=beta&t=UgXsQ29WciCxVkVl3nE4exBiG_PZy5ix5QxpPyAGw10',
        'https://media.licdn.com/dms/image/v2/D4D03AQGdWEfAwGEo_g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1684253533657?e=1736985600&v=beta&t=eKwxOUcBmx34LvT2ea5YPvKFq52-kuse1EHoFlB8c2w',
        'https://media.licdn.com/dms/image/v2/D4D03AQF6N9VVJxXaZA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718214076582?e=1736985600&v=beta&t=RbuFhXrMA-flj4sW48R6b-GAELxJlD4FLMGrY-kJ3Vs', 
      ],
  },
  {
    name: 'NDipali Kumari ',
    role: 'React Developer',
    mutualConnections: 4,
    profileImage: 'https://media.licdn.com/dms/image/v2/D4D35AQEEEt_pHAQq7A/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1704974129618?e=1731816000&v=beta&t=lZ93dZk0f9AZ4nATp9WeCfSjhSbSS16BIdiQdPmQYtU',
    connections: [
        'https://media.licdn.com/dms/image/v2/D4D03AQFl-mlxBS6PQw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1724243812887?e=1736985600&v=beta&t=hjBP-IBZ9Q5ZW1ZUqc0S--Ta2l3iR9LgHIzQIoN6BRk', 
        'https://media.licdn.com/dms/image/v2/D4D03AQG742R0dPrvWg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1693855162478?e=1736985600&v=beta&t=UgXsQ29WciCxVkVl3nE4exBiG_PZy5ix5QxpPyAGw10',
        'https://media.licdn.com/dms/image/v2/D4D03AQGdWEfAwGEo_g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1684253533657?e=1736985600&v=beta&t=eKwxOUcBmx34LvT2ea5YPvKFq52-kuse1EHoFlB8c2w',
        'https://media.licdn.com/dms/image/v2/D4D03AQF6N9VVJxXaZA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718214076582?e=1736985600&v=beta&t=RbuFhXrMA-flj4sW48R6b-GAELxJlD4FLMGrY-kJ3Vs', 
      ],
  },
  {
    name: 'Tanya sen',
    role: 'Web Developer',
    mutualConnections: 4,
    profileImage: 'https://media.licdn.com/dms/image/v2/D4D03AQEzG6jDrSIQ_w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1663946955072?e=1736985600&v=beta&t=5C66DluIHnhr3sdSxg9kSERK-G2bTg_aa4tGyUlCOCE',
    connections: [
        'https://media.licdn.com/dms/image/v2/D4D03AQFl-mlxBS6PQw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1724243812887?e=1736985600&v=beta&t=hjBP-IBZ9Q5ZW1ZUqc0S--Ta2l3iR9LgHIzQIoN6BRk', 
        'https://media.licdn.com/dms/image/v2/D4D03AQG742R0dPrvWg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1693855162478?e=1736985600&v=beta&t=UgXsQ29WciCxVkVl3nE4exBiG_PZy5ix5QxpPyAGw10',
        'https://media.licdn.com/dms/image/v2/D4D03AQGdWEfAwGEo_g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1684253533657?e=1736985600&v=beta&t=eKwxOUcBmx34LvT2ea5YPvKFq52-kuse1EHoFlB8c2w',
        'https://media.licdn.com/dms/image/v2/D4D03AQF6N9VVJxXaZA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718214076582?e=1736985600&v=beta&t=RbuFhXrMA-flj4sW48R6b-GAELxJlD4FLMGrY-kJ3Vs', 
      ],
  },
  {
    name: 'Mohni Gupta',
    role: 'c++ Developer',
    mutualConnections: 4,
    profileImage: 'https://media.licdn.com/dms/image/v2/D4D35AQFNYSFT66H_JA/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1686309531213?e=1731816000&v=beta&t=HD0LYZmN2qDw5keuzXA2qlA8kuekdXm7QrS77jdnACE',
    connections: [
        'https://media.licdn.com/dms/image/v2/D4D03AQFl-mlxBS6PQw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1724243812887?e=1736985600&v=beta&t=hjBP-IBZ9Q5ZW1ZUqc0S--Ta2l3iR9LgHIzQIoN6BRk', 
        'https://media.licdn.com/dms/image/v2/D4D03AQG742R0dPrvWg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1693855162478?e=1736985600&v=beta&t=UgXsQ29WciCxVkVl3nE4exBiG_PZy5ix5QxpPyAGw10',
        'https://media.licdn.com/dms/image/v2/D4D03AQGdWEfAwGEo_g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1684253533657?e=1736985600&v=beta&t=eKwxOUcBmx34LvT2ea5YPvKFq52-kuse1EHoFlB8c2w',
        'https://media.licdn.com/dms/image/v2/D4D03AQF6N9VVJxXaZA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718214076582?e=1736985600&v=beta&t=RbuFhXrMA-flj4sW48R6b-GAELxJlD4FLMGrY-kJ3Vs', 
      ],
  },
  {
    name: 'Aryan Nagar',
    role: 'Backend Developer',
    mutualConnections: 4,
    profileImage: 'https://media.licdn.com/dms/image/v2/D5603AQGiKZZl92UtiA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1725872217598?e=1736985600&v=beta&t=teEH7-MFHJUcWWLXzFeCDTb1y73BfYZwp0p1GapbTD4',
    connections: [
        'https://media.licdn.com/dms/image/v2/D4D03AQFl-mlxBS6PQw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1724243812887?e=1736985600&v=beta&t=hjBP-IBZ9Q5ZW1ZUqc0S--Ta2l3iR9LgHIzQIoN6BRk', 
        'https://media.licdn.com/dms/image/v2/D4D03AQG742R0dPrvWg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1693855162478?e=1736985600&v=beta&t=UgXsQ29WciCxVkVl3nE4exBiG_PZy5ix5QxpPyAGw10',
        'https://media.licdn.com/dms/image/v2/D4D03AQGdWEfAwGEo_g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1684253533657?e=1736985600&v=beta&t=eKwxOUcBmx34LvT2ea5YPvKFq52-kuse1EHoFlB8c2w',
        'https://media.licdn.com/dms/image/v2/D4D03AQF6N9VVJxXaZA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718214076582?e=1736985600&v=beta&t=RbuFhXrMA-flj4sW48R6b-GAELxJlD4FLMGrY-kJ3Vs', 
      ],
  },
  {
    name: 'Dipali Kumari ',
    role: 'React Developer',
    mutualConnections: 4,
    profileImage: 'https://media.licdn.com/dms/image/v2/D4D35AQEEEt_pHAQq7A/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1704974129618?e=1731816000&v=beta&t=lZ93dZk0f9AZ4nATp9WeCfSjhSbSS16BIdiQdPmQYtU',
    connections: [
        'https://media.licdn.com/dms/image/v2/D4D03AQFl-mlxBS6PQw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1724243812887?e=1736985600&v=beta&t=hjBP-IBZ9Q5ZW1ZUqc0S--Ta2l3iR9LgHIzQIoN6BRk', 
        'https://media.licdn.com/dms/image/v2/D4D03AQG742R0dPrvWg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1693855162478?e=1736985600&v=beta&t=UgXsQ29WciCxVkVl3nE4exBiG_PZy5ix5QxpPyAGw10',
        'https://media.licdn.com/dms/image/v2/D4D03AQGdWEfAwGEo_g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1684253533657?e=1736985600&v=beta&t=eKwxOUcBmx34LvT2ea5YPvKFq52-kuse1EHoFlB8c2w',
        'https://media.licdn.com/dms/image/v2/D4D03AQF6N9VVJxXaZA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718214076582?e=1736985600&v=beta&t=RbuFhXrMA-flj4sW48R6b-GAELxJlD4FLMGrY-kJ3Vs', 
      ],
  },
  {
    name: 'Sunil Solanki',
    role: 'Angula Developer',
    mutualConnections: 4,
    profileImage: 'https://media.licdn.com/dms/image/v2/D5603AQFrMWghLn_U-w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1719018147388?e=1736985600&v=beta&t=peqp1hKV4BkjjVHa5-8INQTPFbSbB2beWaT19ayVTFA',
    connections: [
        'https://media.licdn.com/dms/image/v2/D4D03AQFl-mlxBS6PQw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1724243812887?e=1736985600&v=beta&t=hjBP-IBZ9Q5ZW1ZUqc0S--Ta2l3iR9LgHIzQIoN6BRk', 
        'https://media.licdn.com/dms/image/v2/D4D03AQG742R0dPrvWg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1693855162478?e=1736985600&v=beta&t=UgXsQ29WciCxVkVl3nE4exBiG_PZy5ix5QxpPyAGw10',
        'https://media.licdn.com/dms/image/v2/D4D03AQGdWEfAwGEo_g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1684253533657?e=1736985600&v=beta&t=eKwxOUcBmx34LvT2ea5YPvKFq52-kuse1EHoFlB8c2w',
        'https://media.licdn.com/dms/image/v2/D4D03AQF6N9VVJxXaZA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718214076582?e=1736985600&v=beta&t=RbuFhXrMA-flj4sW48R6b-GAELxJlD4FLMGrY-kJ3Vs', 
      ],
  },
  {
    name: 'Sanjay Shende',
    role: 'Photographer',
    mutualConnections: 8,
    profileImage: './assids/samjay.jpeg',
    connections: [
        'https://media.licdn.com/dms/image/v2/D4D03AQFl-mlxBS6PQw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1724243812887?e=1736985600&v=beta&t=hjBP-IBZ9Q5ZW1ZUqc0S--Ta2l3iR9LgHIzQIoN6BRk', 
        'https://media.licdn.com/dms/image/v2/D4D03AQG742R0dPrvWg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1693855162478?e=1736985600&v=beta&t=UgXsQ29WciCxVkVl3nE4exBiG_PZy5ix5QxpPyAGw10',
        'https://media.licdn.com/dms/image/v2/D4D03AQGdWEfAwGEo_g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1684253533657?e=1736985600&v=beta&t=eKwxOUcBmx34LvT2ea5YPvKFq52-kuse1EHoFlB8c2w',
        'https://media.licdn.com/dms/image/v2/D4D03AQF6N9VVJxXaZA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718214076582?e=1736985600&v=beta&t=RbuFhXrMA-flj4sW48R6b-GAELxJlD4FLMGrY-kJ3Vs', 
      ],
  },
];

const Suggestions = () => {
  return (
    <div className="p-6 bg-gray-800 mt-4 rounded-lg  text-white min-h-screen">
      {/* Header Section */}
      <h4 className="text-lg font-semibold mb-4">More suggestions for you</h4>
      
      {/* Suggestions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {suggestions.map((person, index) => (
          <div key={index} className="p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            {/* Profile Image and Details */}
            <div className="flex items-center mb-4">
              <img
                src={person.profileImage}
                alt={`${person.name}'s profile`}
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <h5 className="font-semibold">{person.name}</h5>
                <p className="text-sm text-gray-400">{person.role}</p>
              </div>
            </div>
            
            {/* Mutual Connections */}
            <div className="flex items-center mb-4">
              <div className="flex -space-x-4">
                {person.connections.map((connection, idx) => (
                  <img
                    key={idx}
                    src={connection}
                    alt={`Connection ${idx + 1}`}
                    className="w-8 h-8 rounded-full border-2 border-gray-900"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-300 ml-6">
                {person.mutualConnections} mutual connections
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex space-x-2">
              <button className="flex-1 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">Connect</button>
              <button className="flex-1 py-2 px-4 bg-gray-700 text-white rounded hover:bg-gray-600">Follow</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
