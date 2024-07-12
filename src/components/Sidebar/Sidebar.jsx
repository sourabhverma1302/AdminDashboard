import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar, isDarkMode }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    // Check if the current path is within the dropdown paths to keep it open
    if (['/privacy-policy', '/help'].includes(location.pathname)) {
      setIsDropdownOpen(true);
    }
  }, [location.pathname]);

  return (
    <div className={`fixed inset-y-0 left-0 w-64 px-2 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900'} transform transition duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-64'}`}>
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
          <li onClick={() => navigate('/')} className={`px-6 py-2 mb-2 rounded-xl cursor-pointer ${isDarkMode ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-400'} ${isActive('/') ? 'bg-gray-800 text-white' : ''}`}>
            <Link to="/">Dashboard</Link>
          </li>
          <li onClick={() => navigate('/analytics')} className={`px-6 py-2 mb-2 rounded-xl cursor-pointer ${isDarkMode ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-400'} ${isActive('/analytics') ? 'bg-gray-800 text-white' : ''}`}>
            <Link to="/analytics">Analytics</Link>
          </li>
          <li className={`px-6 py-2 cursor-pointer rounded-xl mb-2 ${isDarkMode ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-400'}`} onClick={toggleDropdown}>
            <div className="flex justify-between items-center">
              <span>Configurations</span>
              <svg className={`w-4 h-4 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {isDropdownOpen && (
              <ul className={`ml-4 mt-2 border-l ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                <li onClick={() => navigate('/privacy-policy')} className={`px-6 py-2 mb-2 cursor-pointer rounded-xl ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-300'} ${isActive('/privacy-policy') ? 'bg-gray-700 text-white' : ''}`}>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li onClick={() => navigate('/help')} className={`px-6 py-2 cursor-pointer rounded-xl ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-300'} ${isActive('/help') ? 'bg-gray-700 text-white' : ''}`}>
                  <Link to="/help">Help-Support</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
