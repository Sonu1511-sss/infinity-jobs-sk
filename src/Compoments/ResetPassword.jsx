import React, { useState } from 'react';
import { toast } from 'react-hot-toast'; // For toast notifications

const  ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement the actual password reset logic here
    if (email) {
      toast.success('Password reset link sent!');
    } else {
      setError('Please enter a valid email address');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-8">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-500">Infinity-Jobs</h1>
          <p className="mt-2 text-lg">Reset your password</p>
        </div>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-600 rounded-lg text-white font-semibold focus:outline-none hover:bg-blue-700"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm">
            Remembered your password?{' '}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => window.location.reload()} // Here you would typically redirect to the Sign In page
            >
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default  ResetPassword;
