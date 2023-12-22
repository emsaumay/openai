import { createReducer } from '@reduxjs/toolkit';
import {
  fetchPokemonsPending,
  fetchPokemonsSuccess,
  fetchPokemonsError,
  fetchPokemonDetailsPending,
  fetchPokemonDetailsSuccess,
  fetchPokemonDetailsError,
  setFilterType
} from './pokemonActions';

const initialState = {
  pokemons: [],
  pokemonDetails: {},
  isLoading: false,
  error: null,
  filterType: ''
};

const pokemonReducers = createReducer(initialState, {
  [fetchPokemonsPending]: (state) => {
    state.isLoading = true;
    state.error = null;
  },
  [fetchPokemonsSuccess]: (state, action) => {
    state.isLoading = false;
    state.pokemons = action.payload;
  },
  [fetchPokemonsError]: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  [fetchPokemonDetailsPending]: (state) => {
    state.isLoading = true;
    state.error = null;
  },
  [fetchPokemonDetailsSuccess]: (state, action) => {
    state.isLoading = false;
    state.pokemonDetails[action.payload.id] = action.payload;
  },
  [fetchPokemonDetailsError]: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  [setFilterType]: (state, action) => {
    state.filterType = action.payload;
  }
});

export default pokemonReducers;