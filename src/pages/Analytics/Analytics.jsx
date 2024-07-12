import React from 'react';
import BarChart from '../../components/UserStatsGraph/UserStats';

const Dashboard = ({isDarkMode}) => {
  return (
    <main className="p-4">
      <h1 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Analytics</h1>
      <BarChart/>
      {/* Add your main content components here */}
    </main>
  );
};

export default Dashboard;
