import React, { useState, useEffect } from 'react';

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 322,
    hours: 22,
    minutes: 4,
    seconds: 43
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTime => {
        const newTime = { ...prevTime };
        newTime.seconds -= 1;
        if (newTime.seconds < 0) {
          newTime.seconds = 59;
          newTime.minutes -= 1;
        }
        if (newTime.minutes < 0) {
          newTime.minutes = 59;
          newTime.hours -= 1;
        }
        if (newTime.hours < 0) {
          newTime.hours = 23;
          newTime.days -= 1;
        }
        if (newTime.days < 0) {
          clearInterval(interval);
        }
        return newTime;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-8">
      <div className="text-center space-y-8">
        <h1 className="text-4xl text-blue-500 font-bold">We're Coming Soon!</h1>
        <p className="text-lg">Our website is under construction. We'll be here soon with our new awesome site, subscribe to be notified.</p>
        <div className="space-x-6">
          <div className="inline-block text-xl font-semibold">
            <span className="block">{timeLeft.days}</span>
            <span className="text-sm">Days</span>
          </div>
          <div className="inline-block text-xl font-semibold">
            <span className="block">{timeLeft.hours}</span>
            <span className="text-sm">Hours</span>
          </div>
          <div className="inline-block text-xl font-semibold">
            <span className="block">{timeLeft.minutes}</span>
            <span className="text-sm">Mins</span>
          </div>
          <div className="inline-block text-xl font-semibold">
            <span className="block">{timeLeft.seconds}</span>
            <span className="text-sm">Secs</span>
          </div>
        </div>
        <input
          type="email"
          placeholder="Enter your email to get notified"
          className="mt-4 p-2 rounded-lg text-black"
        />
        <button className="mt-4 ml-4 bg-blue-500 text-white py-2 px-4 rounded-lg">Subscribe</button>
      </div>
    </div>
  );
};

export default ComingSoon;
