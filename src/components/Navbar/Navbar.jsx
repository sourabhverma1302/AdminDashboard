import React from 'react';

const Navbar = ({ toggleSidebar, toggleTheme, isDarkMode, isSidebarOpen }) => {
  const handleThemeToggle = () => {
    toggleTheme(!isDarkMode); // Toggle dark mode state
  };

  return (
      <div className={`flex justify-between items-center h-16 fixed z-10 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900'} ${isSidebarOpen?'w-[85%]':'w-full'} shadow-lg`}>
      <div className="flex items-center">
        {!isSidebarOpen && (
          <button onClick={toggleSidebar} className="px-4 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
        <h1 className="ml-4 text-lg font-bold">Admin Panel</h1>
      
      </div>
      <div className="flex items-center px-5">
        <button onClick={handleThemeToggle} className="px-4 focus:outline-none">
          {isDarkMode ? (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
