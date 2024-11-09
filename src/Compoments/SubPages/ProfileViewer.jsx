import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registering chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ProfileViewer = () => {
  // Sample data for the chart
  const chartData = {
    labels: ['5 Days Ago', '4 Days Ago', '3 Days Ago', '2 Days Ago', '1 Day Ago', 'Since Last Week'], // Time labels
    datasets: [
      {
        label: 'Profile Views',
        data: [120, 180, 200, 220, 250, 300], // Sample view data
        fill: false,
        borderColor: '#4B8BF5', // Blue color for the line
        tension: 0.1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hides the legend
      },
    },
  };

  return (
    <div className="max-w-sm rounded-lg bg-gray-700 p-4 shadow-md w-[20rem] mt-5 ml-4">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-full bg-blue-500 flex justify-center items-center text-white">
          {/* Profile Avatar */}
          <span className="font-bold"><img className='w-12 h-12 rounded-full' src="./assids/shubha.jpeg" alt="" /></span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Profile Views</h3>
          <p className="text-sm text-gray-400">Last 5 days & Since last week</p>
        </div>
      </div>

      {/* Profile Views */}
      <div className="mt-4 text-center text-2xl text-white">
        <p>Total Views</p>
        <p className="text-3xl font-semibold text-blue-500">1,250</p>
      </div>

      {/* Chart */}
      <div className="mt-4">
        <Line data={chartData} options={chartOptions} />
      </div>

      {/* Footer */}
      <div className="mt-4 text-sm text-gray-400">
        <p>Profile Stats</p>
        <p className="text-xs">Updated regularly.</p>
      </div>
    </div>
  );
};

export default ProfileViewer;
