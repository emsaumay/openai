import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPokemons, fetchPokemonDetails } from '../../api/pokemonAPI';

// Async thunk for fetching the list of pokemons
export const getPokemons = createAsyncThunk(
  'pokemons/getPokemons',
  async (params, { rejectWithValue }) => {
    try {
      const response = await fetchPokemons(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for fetching details of a single pokemon
export const getPokemonDetails = createAsyncThunk(
  'pokemons/getPokemonDetails',
  async (pokemonId, { rejectWithValue }) => {
    try {
      const response = await fetchPokemonDetails(pokemonId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);