import React from 'react';
import { FaRegCommentDots, FaRegThumbsUp, FaRegHeart } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

const posts = [
  {
    id: 1,
    author: 'Dharamchand Patle',
    role: 'Web  Designer',
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
    <div className="p-4 -h-screen">
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
        <div key={post.id} className="bg-gray-700 p-4 mb-4 rounded-lg shadow-md flex">
          {/* Profile section */}
          <div className="flex items-start mr-4">
            <div className="relative">
              <img
                src={post.profileImage}
                alt={`${post.author} profile`}
                className="w-12 h-12 rounded-full border-2 border-gray-600"
              />
              {post.online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-700 rounded-full"></span>
              )}
            </div>
          </div>

          {/* Post content */}
          <div className="flex-1 text-gray-200">
            <h3 className="text-lg font-semibold">
              {post.author} - <span className="text-sm text-gray-400">{post.role}</span>
            </h3>
            <p className="text-sm text-gray-500">{post.time}</p>
            <p className="mt-2">{post.content}</p>
            <div className="flex justify-between mt-2 text-sm text-gray-500">
              <span>{post.likes} likes</span>
              <span>{post.comments} comments</span>
            </div>

            {/* Comment options */}
            <div className="mt-2 flex space-x-4">
              <button
                className="text-blue-400 hover:text-blue-300 flex items-center space-x-1"
                onClick={() => handleReaction('Awesome 😍')}
              >
                <FaRegThumbsUp />
                <span>Awesome 😍</span>
              </button>
              <button
                className="text-yellow-400 hover:text-yellow-300 flex items-center space-x-1"
                onClick={() => handleReaction('What is it about?')}
              >
                <FaRegCommentDots />
                <span>What is it about?</span>
              </button>
              <button
                className="text-purple-400 hover:text-purple-300 flex items-center space-x-1"
                onClick={() => handleReaction('Wow')}
              >
                <FaRegHeart />
                <span>Wow</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
