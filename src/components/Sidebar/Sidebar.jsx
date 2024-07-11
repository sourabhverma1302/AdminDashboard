import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar, isDarkMode }) => {
    const navigate=useNavigate();

  return (
    <div className={`fixed inset-y-0 left-0 w-64 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900'} transform transition duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-64'}`}>
      <div className={`flex items-center justify-between h-16 border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-300'}`}>
        <h1 className={`text-lg font-bold px-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Sidebar</h1>
        <button onClick={toggleSidebar} className="px-4 focus:outline-none">
          <svg className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="mt-4">
        <ul>
          <li onClick={()=>navigate('/')} className={`px-6 py-2 cursor-pointer ${isDarkMode ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-400'}`}>
            <Link to="/" >Dashboard</Link>    
          </li>
          <li onClick={()=>navigate('/analytics')} className={`px-6 py-2 cursor-pointer ${isDarkMode ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-400'}`}>
            <Link to="/analytics" >Analytics</Link>
          </li>
          {/* Add more sidebar items as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
