import React from 'react';

const adminStats = {
  totalUsers: 1000,
  totalSale: 2500,
  totalAmount: '$50,000',
  totalViews: 50000,
};

const AdminPanel = ({ isDarkMode }) => (
  <div className={`${isDarkMode ? 'bg-gray-800 dark' : 'bg-white light'}`}>
    <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Admin Dashboard</h2>

      <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className={`bg-gray-100 p-4 rounded-lg shadow ${isDarkMode ? 'dark:bg-gray-900' : 'light:bg-gray-100'}`}>
          <h3 className={`text-xl font-semibold text ${isDarkMode?'text-white':'text-gray-900'}`}>Total Users</h3>
          <p className={`text-2xl mt-2 ${isDarkMode?'text-white':'text-gray-900'}`}>{adminStats.totalUsers}</p>
        </div>
        <div className={`bg-gray-100 p-4 rounded-lg shadow ${isDarkMode ? 'dark:bg-gray-900' : 'light:bg-gray-100'}`}>
          <h3 className={`text-xl font-semibold text ${isDarkMode?'text-white':'text-gray-900'}`}>Total Sale</h3>
          <p className={`text-2xl mt-2 ${isDarkMode?'text-white':'text-gray-900'}`}>{adminStats.totalSale}</p>
        </div>
        <div className={`bg-gray-100 p-4 rounded-lg shadow ${isDarkMode ? 'dark:bg-gray-900' : 'light:bg-gray-100'}`}>
          <h3 className={`text-xl font-semibold text ${isDarkMode?'text-white':'text-gray-900'}`}>Total Amount</h3>
          <p className={`text-2xl mt-2 ${isDarkMode?'text-white':'text-gray-900'}`}>{adminStats.totalAmount}</p>
        </div>
        <div className={`bg-gray-100 p-4 rounded-lg shadow ${isDarkMode ? 'dark:bg-gray-900' : 'light:bg-gray-100'}`}>
          <h3 className={`text-xl font-semibold text ${isDarkMode?'text-white':'text-gray-900'}`}>Total Views</h3>
          <p className={`text-2xl mt-2 ${isDarkMode?'text-white':'text-gray-900'}`}>{adminStats.totalViews}</p>
        </div>
      </div>
    </div>
  </div>
);

export default AdminPanel;
