// Pokemon API base URL
export const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2';

// Pokemon Image API base URL
export const POKEAPI_IMAGE_BASE_URL = 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world';

// Action types for Redux
export const FETCH_POKEMONS_START = 'FETCH_POKEMONS_START';
export const FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS';
export const FETCH_POKEMONS_FAILURE = 'FETCH_POKEMONS_FAILURE';
export const FILTER_POKEMONS_BY_TYPE = 'FILTER_POKEMONS_BY_TYPE';
export const SEARCH_POKEMONS = 'SEARCH_POKEMONS';

// Responsive breakpoints
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Infinite scroll settings
export const INFINITE_SCROLL_THRESHOLD = 300; // Distance from bottom of the page to trigger more loading

// Default settings for fetching Pokemons
export const DEFAULT_FETCH_LIMIT = 20; // Number of Pokemons to fetch per request

// Error messages
export const ERROR_FETCHING_POKEMONS = 'An error occurred while fetching Pokemons. Please try again later.';