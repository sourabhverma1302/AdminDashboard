import React from 'react'

const PrivacyPolicy = ({ isDarkMode }) => {
  return ( 
    <div className={`container mx-auto p-4 ${isDarkMode ? 'dark' : ''}`}>
      <h1 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Privacy Policy</h1>
    </div>
  )
}

export default PrivacyPolicy