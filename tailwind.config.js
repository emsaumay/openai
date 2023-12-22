module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // Extend the default Tailwind CSS theme to include custom colors, fonts, etc.
      colors: {
        'pokedex-red': '#FF0000',
        'pokedex-blue': '#3B4CCA',
        'pokedex-yellow': '#FFDE00',
        'pokedex-green': '#4CAF50',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  variants: {
    extend: {
      // Add additional variants for utilities here
      opacity: ['disabled'],
      cursor: ['hover', 'focus'],
    },
  },
  plugins: [],
};