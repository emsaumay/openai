module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // Extend the default Tailwind CSS theme to suit the Pokedex application
      colors: {
        'pokemon-blue': '#3B4CCA',
        'pokemon-red': '#FF0000',
        'pokemon-yellow': '#FFDE00',
        'pokemon-green': '#4E8234',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '1rem',
      },
      backgroundImage: theme => ({
        'pokemon-pattern': "url('/src/assets/pokemon-pattern.png')",
      }),
    },
  },
  variants: {
    extend: {
      // Add additional variants as needed for the Pokedex application
      opacity: ['disabled'],
      cursor: ['hover', 'focus'],
    },
  },
  plugins: [],
};