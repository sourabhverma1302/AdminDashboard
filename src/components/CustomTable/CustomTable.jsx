import React, { useState } from 'react';

const CustomTable = ({ data, isDarkMode }) => {
  const [sortedField, setSortedField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle sorting
  const handleSort = (field) => {
    if (field === sortedField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortedField(field);
      setSortDirection('asc');
    }
  };

  // Function to handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter and sort data
  let filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  if (sortedField) {
    filteredData = filteredData.sort((a, b) => {
      const aValue = a[sortedField];
      const bValue = b[sortedField];
      if (sortDirection === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search..."
          className={`px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring ${isDarkMode ? 'focus:border-blue-300 text-white bg-gray-800' : 'focus:border-blue-300 text-gray-800 bg-white'}`}
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className={`shadow overflow-hidden border-b border-gray-200 ${isDarkMode ? 'dark' : ''}`}>
        <table className={`min-w-full divide-y divide-gray-200 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          <thead className={`bg-gray-50 ${isDarkMode ? 'dark:bg-gray-900' : ''}`}>
            <tr>
              {Object.keys(data[0]).map((field) => (
                <th
                  key={field}
                  className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer ${isDarkMode ? 'text-white' : 'text-gray-500'}`}
                  onClick={() => handleSort(field)}
                >
                  {field}
                  {sortedField === field && (
                    <span className="ml-1">
                      {sortDirection === 'asc' ? (
                        <svg
                          className="w-4 h-4 inline-block"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                      ) : (
                        <svg
                          className="w-4 h-4 inline-block"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      )}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={`bg-white divide-y divide-gray-200 ${isDarkMode ? 'dark:bg-gray-800' : ''}`}>
            {filteredData.map((item, index) => (
              <tr key={index} className={`hover:bg-gray-50 ${isDarkMode ? 'dark:hover:bg-gray-700' : ''}`}>
                {Object.values(item).map((value, idx) => (
                  <td key={idx} className="px-6 py-4 whitespace-nowrap text-sm">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomTable;
