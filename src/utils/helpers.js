// src/utils/helpers.js

/**
 * Capitalizes the first letter of a string.
 * @param {string} string - The string to capitalize.
 * @returns {string} - The capitalized string.
 */
export const capitalizeFirstLetter = (string) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * Formats the Pokemon ID to a three-digit string.
 * @param {number} id - The Pokemon ID.
 * @returns {string} - The formatted ID.
 */
export const formatPokemonID = (id) => {
  return id.toString().padStart(3, '0');
};

/**
 * Constructs the URL for a Pokemon's image.
 * @param {number} id - The Pokemon ID.
 * @returns {string} - The URL for the Pokemon's image.
 */
export const getPokemonImageURL = (id) => {
  return `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`;
};

/**
 * Debounce function to limit the rate at which a function can fire.
 * @param {function} func - The function to debounce.
 * @param {number} wait - The number of milliseconds to delay.
 * @returns {function} - A debounced version of the original function.
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};