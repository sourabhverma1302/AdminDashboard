import React, { useState, useEffect } from 'react';

const Navbar = ({ toggleSidebar, toggleTheme, isDarkMode, isSidebarOpen }) => {
  const [navbarWidth, setNavbarWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setNavbarWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    console.log("Navbar width:", navbarWidth);
  }, [navbarWidth]);

  const handleThemeToggle = () => {
    toggleTheme(!isDarkMode); // Toggle dark mode state
  };

  return (
    <div className={`flex justify-between items-center z-0 h-16 fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900'} shadow-lg`}>
      <div className="flex items-center space-x-4 px-4">
        {!isSidebarOpen && (
          <button onClick={toggleSidebar} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
      </div>
      <div className="px-4 ml-auto">
        <button onClick={handleThemeToggle} className="focus:outline-none">
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
