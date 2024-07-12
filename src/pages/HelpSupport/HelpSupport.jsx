import React from 'react'

const HelpSupport = ({ isDarkMode }) => {
  return (
    <div className={`container mx-auto p-4 mt-16 ${isDarkMode ? 'dark' : ''}`}>
      <h1 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Help And Support</h1>
    </div>
  )
}

export default HelpSupport