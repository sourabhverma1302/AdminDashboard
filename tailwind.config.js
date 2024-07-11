module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.jsx', './src/**/*.js'],
  darkMode: 'class', // Enable dark mode variant
  theme: {
    extend: {
      colors: {
        light: {
          DEFAULT: '#FFFFFF', // White color for light theme
          blue: '#3182CE', // Light blue color for light theme (adjust as needed)
        },
        dark: {
          DEFAULT: '#1A202C', // Dark color for dark theme
          blue: '#4A5568', // Dark blue color for dark theme (adjust as needed)
        },
      },
    },
  },
  plugins: [
    // Add any plugins here
  ],
};
