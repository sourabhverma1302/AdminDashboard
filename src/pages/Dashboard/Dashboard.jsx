import React from 'react';
import CustomTable from '../../components/CustomTable/CustomTable';
// import Cards from '../../components/Cards/Cards';
import AdminPanel from '../../components/Cards/Cards';

const Dashboard = ({ isDarkMode }) => {
  const data = [
    { id: 1, name: 'John Doe', age: 30, position: 'Software Engineer', department: 'Engineering' },
    { id: 2, name: 'Jane Smith', age: 28, position: 'Product Manager', department: 'Product Management' },
    { id: 3, name: 'Bob Johnson', age: 35, position: 'Data Analyst', department: 'Analytics' },
    { id: 4, name: 'Alice Brown', age: 32, position: 'UI/UX Designer', department: 'Design' },
    { id: 5, name: 'Michael Lee', age: 31, position: 'Marketing Specialist', department: 'Marketing' },
    // Add more data as needed
  ];

  return (
    <div className={`container mx-auto p-2 ${isDarkMode ? 'dark' : ''}`}>
      <AdminPanel isDarkMode={isDarkMode}/>
      <h1 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Employee Directory</h1>
      <CustomTable data={data} isDarkMode={isDarkMode} />
      <CustomTable data={data} isDarkMode={isDarkMode} />
    </div>
  );
};

export default Dashboard;
