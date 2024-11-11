import React from 'react';
import { toast } from 'react-hot-toast'; // For toast notifications

const ContactUs = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8">
      
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-500">Contact Us</h1>
        <p className="mt-2 text-lg">We'd love to talk about how we can help you.</p>
      </div>

      {/* How Olink Assistants Can Help */}
      <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-semibold text-blue-500 mb-4">How Olink Assistants Can Help You</h2>
        <p className="text-sm">
          Olink Assistants are here to streamline your workflow, assist with your tasks, and optimize productivity. From managing emails and scheduling meetings to organizing your daily tasks, we're dedicated to providing top-notch virtual assistant services tailored to your needs. Let us help you save time and focus on what truly matters.
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-semibold text-blue-500 mb-4">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              className="w-full p-3 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-600 rounded-lg text-white font-semibold focus:outline-none hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>

     {/* Map Section */}
  <div className='flex gap-9'>


     <div className="mt-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508343!2d144.95373531531553!3d-37.81720997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f1a05ab%3A0x5045675218ceed0!2sYour%20Business%20Name!5e0!3m2!1sen!2sau!4v1610000000000!5m2!1sen!2sau"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="w-full h-auto rounded shadow-lg"
        ></iframe>
      </div>
    
      <div className="mt-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508343!2d144.95373531531553!3d-37.81720997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f1a05ab%3A0x5045675218ceed0!2sYour%20Business%20Name!5e0!3m2!1sen!2sau!4v1610000000000!5m2!1sen!2sau"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="w-full h-auto rounded shadow-lg"
        ></iframe>
      </div>
      </div>
    </div>
  );
};

export default ContactUs;
