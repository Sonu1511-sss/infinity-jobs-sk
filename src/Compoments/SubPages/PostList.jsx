import React from 'react';
import { FaRegCommentDots, FaRegThumbsUp, FaRegHeart } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

const posts = [
  {
    id: 1,
    author: 'Dharamchand Patle',
    role: 'Web Designer',
    time: '3 hours ago',
    content: 'This is an example post with engaging content.',
    likes: 12,
    comments: 4,
    profileImage: './assids/dharam.jpeg', // Placeholder for profile image URL
    online: true,
  },

  // Add more posts as needed
];

const PostList = () => {
  const handleReaction = (reaction) => {
    toast.success(`You reacted: ${reaction}`);
  };

  return (
    <div className="p-2 sm:p-4">
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: '#333',
            color: '#fff',
            padding: '10px',
            borderRadius: '10px',
          },
        }}
      />
      {posts.map((post) => (
        <div key={post.id} className="bg-gray-700 p-3 sm:p-4 mb-4 rounded-lg shadow-md flex flex-col sm:flex-row">
          {/* Profile section */}
          <div className="flex items-start mb-3 sm:mb-0 sm:mr-4">
            <div className="relative">
              <img
                src={post.profileImage}
                alt={`${post.author} profile`}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-600"
              />
              {post.online && (
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 border-2 border-gray-700 rounded-full"></span>
              )}
            </div>
          </div>

          {/* Post content */}
          <div className="flex-1 text-gray-200">
            <h3 className="text-base sm:text-lg font-semibold">
              {post.author} - <span className="text-xs sm:text-sm text-gray-400">{post.role}</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">{post.time}</p>
            <p className="mt-1 sm:mt-2 text-sm">{post.content}</p>
            <div className="flex justify-between mt-2 text-xs sm:text-sm text-gray-500">
              <span>{post.likes} likes</span>
              <span>{post.comments} comments</span>
            </div>

            {/* Comment options */}
            <div className="mt-2 flex space-x-3 sm:space-x-4">
              <button
                className="text-blue-400 hover:text-blue-300 flex items-center space-x-1"
                onClick={() => handleReaction('Awesome 😍')}
              >
                <FaRegThumbsUp className="text-xs sm:text-base" />
                <span className="text-xs sm:text-sm">Awesome 😍</span>
              </button>
              <button
                className="text-yellow-400 hover:text-yellow-300 flex items-center space-x-1"
                onClick={() => handleReaction('What is it about?')}
              >
                <FaRegCommentDots className="text-xs sm:text-base" />
                <span className="text-xs sm:text-sm">What is it about?</span>
              </button>
              <button
                className="text-purple-400 hover:text-purple-300 flex items-center space-x-1"
                onClick={() => handleReaction('Wow')}
              >
                <FaRegHeart className="text-xs sm:text-base" />
                <span className="text-xs sm:text-sm">Wow</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
