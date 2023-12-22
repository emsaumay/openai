import { createAsyncThunk } from '@reduxjs/toolkit';
import { pokemonAPI } from '../../api/pokemonAPI';
import { FETCH_POKEMON, SEARCH_POKEMON, FILTER_POKEMON_BY_TYPE } from './pokemonTypes';

export const fetchPokemon = createAsyncThunk(
  FETCH_POKEMON,
  async (_, { rejectWithValue }) => {
    try {
      const response = await pokemonAPI.getAllPokemon();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const searchPokemon = createAsyncThunk(
  SEARCH_POKEMON,
  async (searchTerm, { rejectWithValue }) => {
    try {
      const response = await pokemonAPI.searchPokemon(searchTerm);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const filterPokemonByType = createAsyncThunk(
  FILTER_POKEMON_BY_TYPE,
  async (type, { rejectWithValue }) => {
    try {
      const response = await pokemonAPI.filterPokemonByType(type);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);