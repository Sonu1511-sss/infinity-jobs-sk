import React, { useState } from 'react';

const GalleryCard = () => {
  // Array of gallery images
  const images = [
    'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/5499551/pexels-photo-5499551.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/23496661/pexels-photo-23496661/free-photo-of-office-workers-sitting-on-the-desk-in-her-office.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/7688455/pexels-photo-7688455.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/8111881/pexels-photo-8111881.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/5256816/pexels-photo-5256816.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1038628/pexels-photo-1038628.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/939331/pexels-photo-939331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/920381/pexels-photo-920381.jpeg?auto=compress&cs=tinysrgb&w=400',
  ];

  // State to toggle between showing all images or just some
  const [showAll, setShowAll] = useState(false);

  // Function to toggle show more or less images
  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  // Display images depending on the 'showAll' state
  const displayedImages = showAll ? images : images.slice(0, 9);

  return (
    <div className="space-y-4 p-4 bg-gray-700 mt-3 rounded-lg">
      <h2 className="text-1xl font-semibold text-left text-white ">Photos</h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-3 gap-1">
        {displayedImages.map((image, index) => (
          <div key={index} className="bg-gray-800  overflow-hidden shadow-lg">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-[6rem] h-[6rem] object-cover"
            />
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-4">
        <button
          onClick={toggleShowAll}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          {showAll ? 'View Less' : 'View More'}
        </button>
      </div>
    </div>
  );
};

export default GalleryCard;
