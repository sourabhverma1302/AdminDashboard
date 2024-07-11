import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import Analytics from './pages/Analytics/Analytics'; // Example Analytics component

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleTheme = (darkMode) => {
    setIsDarkMode(darkMode);
    // Store theme preference in local storage or cookie if needed
    // Example: localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Router>
      <div className={`flex h-screen ${isDarkMode ? 'dark' : ''}`}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} isDarkMode={isDarkMode} />
        <div className={`flex flex-col flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
          <Navbar toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <main className={`p-4 flex-grow ${isDarkMode ? 'bg-gray-800 dark' : ''}`}>
            <Routes>
              <Route path="/" element={<Dashboard isDarkMode={isDarkMode} />} />
              <Route path="/analytics" element={<Analytics />} />
              {/* Add more routes for other components */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
