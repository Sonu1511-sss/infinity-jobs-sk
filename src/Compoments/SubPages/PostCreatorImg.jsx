import React, { useState } from 'react';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';
import { toast, Toaster } from 'react-hot-toast';

const initialComments = [
  {
    user: 'Nikhil Waghade',
    time: '2 min',
    content: '"Great job, developers! The photo post is visually appealing and engaging. The use of vibrant images and clear formatting adds a professional touch. I appreciate the attention to detail and how the content flows smoothly. Keep up the excellent work – it.',
  },
];

const PostCreatorImg = () => {
  const [likes, setLikes] = useState(16);
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
    toast.success('You liked the post!');
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      setComments([
        ...comments,
        { user: 'Current User', time: 'Just now', content: newComment },
      ]);
      setNewComment('');
      toast.success('Comment added!');
    }
  };

  return (
    <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg mx-auto my-8 w-[43.2rem]">
      <Toaster position="top-right" reverseOrder={false} />
      {/* Post Header */}
      <div className="flex items-center mb-4">
        <img
          src="./assids/nilkhil.jpeg"
          alt="Profile"
          className="rounded-full w-10 h-10"
        />
        <div className="ml-3">
          <h3 className="font-bold">Nikhil Waghade</h3>
          <p className="text-sm text-gray-400">Web Developer @Google</p>
        </div>
        <span className="ml-auto text-gray-500 text-sm">3 hours</span>
      </div>
      {/* Post Content */}
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur 😍😎 adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco <a href="/" className="text-blue-400">laboris consequat</a>.
      </p>
      {/* Post Images */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <img
          src="./assids/shubha.jpeg"
          alt="Post Image 1"
          className="rounded-lg w-full h-[15rem]"
        />
        <img
          src="./assids/dharam.jpeg"
          alt="Post Image 2"
          className="rounded-lg w-full h-[15rem]"
        />
        <img
          src="./assids/samjay.jpeg"
          alt="Post Image 3"
          className="rounded-lg w-full h-[15rem]"
        />
        <img
          src="./assids/nilkhil.jpeg"
          alt="Post Image 4"
          className="rounded-lg w-full h-[15rem]"
        />
      </div>
      {/* Engagement Buttons */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={handleLike} className="flex items-center space-x-1">
          <FaHeart className="text-red-500" />
          <span>{likes}</span>
        </button>
        <button className="flex items-center space-x-1">
          <FaComment />
          <span>{comments.length}</span>
        </button>
        <button className="flex items-center space-x-1">
          <FaShare />
          <span>2</span>
        </button>
      </div>
      {/* Comment Section */}
      <div>
        {comments.map((comment, index) => (
          <div key={index} className="mb-2">
            <p className="font-bold">{comment.user}</p>
            <p className="text-gray-400 text-xs">{comment.time}</p>
            <p>{comment.content}</p>
          </div>
        ))}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Add Comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-700 boreder text-white outline-none"
          />
          
        </div>
      </div>
    </div>
  );
};

export default PostCreatorImg;
