import React from 'react';
import StatsCard from '../StatsCard';


function DashboardPage() {
  return (
    <div className="p-4">
      <h2 className="text-2xl mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatsCard title="Total Jobs" value={120} />
        <StatsCard title="Active Users" value={80} />
        <StatsCard title="New Applications" value={150} />
      </div>
    </div>
  );
}

export default DashboardPage;
