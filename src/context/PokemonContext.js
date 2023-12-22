import { createContext, useContext, useReducer } from 'react';

// Define the shape of the context data and the type of actions that can be dispatched
const PokemonStateContext = createContext();
const PokemonDispatchContext = createContext();

// Reducer function to handle actions and update state
const pokemonReducer = (state, action) => {
  switch (action.type) {
    case 'SET_POKEMONS':
      return { ...state, pokemons: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

// Initial state for the context
const initialState = {
  pokemons: [],
  loading: false,
  error: null,
};

// Context provider component
export const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  return (
    <PokemonStateContext.Provider value={state}>
      <PokemonDispatchContext.Provider value={dispatch}>
        {children}
      </PokemonDispatchContext.Provider>
    </PokemonStateContext.Provider>
  );
};

// Custom hooks for using context
export const usePokemonState = () => {
  const context = useContext(PokemonStateContext);
  if (context === undefined) {
    throw new Error('usePokemonState must be used within a PokemonProvider');
  }
  return context;
};

export const usePokemonDispatch = () => {
  const context = useContext(PokemonDispatchContext);
  if (context === undefined) {
    throw new Error('usePokemonDispatch must be used within a PokemonProvider');
  }
  return context;
};