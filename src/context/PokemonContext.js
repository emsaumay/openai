import { createContext, useContext, useReducer } from 'react';

// Define the initial state of the Pokemon context
const initialState = {
  pokemons: [],
  filteredPokemons: [],
  selectedPokemon: null,
  isLoading: false,
  error: null,
  filterType: 'all',
};

// Define the actions for the Pokemon context
export const PokemonActionTypes = {
  SET_POKEMONS: 'SET_POKEMONS',
  SET_FILTERED_POKEMONS: 'SET_FILTERED_POKEMONS',
  SET_SELECTED_POKEMON: 'SET_SELECTED_POKEMON',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SET_FILTER_TYPE: 'SET_FILTER_TYPE',
};

// Define the reducer for the Pokemon context
const pokemonReducer = (state, action) => {
  switch (action.type) {
    case PokemonActionTypes.SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case PokemonActionTypes.SET_FILTERED_POKEMONS:
      return { ...state, filteredPokemons: action.payload };
    case PokemonActionTypes.SET_SELECTED_POKEMON:
      return { ...state, selectedPokemon: action.payload };
    case PokemonActionTypes.SET_LOADING:
      return { ...state, isLoading: action.payload };
    case PokemonActionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    case PokemonActionTypes.SET_FILTER_TYPE:
      return { ...state, filterType: action.payload };
    default:
      return state;
  }
};

// Create the Pokemon context
const PokemonContext = createContext();

// Define a custom hook to use the Pokemon context
export const usePokemonContext = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error('usePokemonContext must be used within a PokemonProvider');
  }
  return context;
};

// Define the Pokemon context provider component
export const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  // Define the value to be provided by the Pokemon context
  const value = { state, dispatch };

  return <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>;
};