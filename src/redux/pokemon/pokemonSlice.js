import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { pokemonAPI } from '../../api/pokemonAPI';

export const fetchPokemons = createAsyncThunk(
  'pokemon/fetchPokemons',
  async (page, { rejectWithValue }) => {
    try {
      const response = await pokemonAPI.fetchPokemons(page);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchPokemonDetails = createAsyncThunk(
  'pokemon/fetchPokemonDetails',
  async (pokemonId, { rejectWithValue }) => {
    try {
      const response = await pokemonAPI.fetchPokemonDetails(pokemonId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  pokemons: [],
  pokemonDetails: {},
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  page: 0,
  hasMore: true
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    resetPokemonDetails(state) {
      state.pokemonDetails = {};
    }
  },
  extraReducers: {
    [fetchPokemons.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchPokemons.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.pokemons = [...state.pokemons, ...action.payload.results];
      state.page += 1;
      state.hasMore = action.payload.next != null;
    },
    [fetchPokemons.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    [fetchPokemonDetails.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchPokemonDetails.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.pokemonDetails = action.payload;
    },
    [fetchPokemonDetails.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    }
  }
});

export const { resetPokemonDetails } = pokemonSlice.actions;

export default pokemonSlice.reducer;