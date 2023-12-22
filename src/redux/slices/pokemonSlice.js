import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPokemonData } from '../../api/pokemonAPI';

export const fetchPokemons = createAsyncThunk(
  'pokemon/fetchPokemons',
  async (params, { rejectWithValue }) => {
    try {
      const response = await fetchPokemonData(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  entities: [],
  loading: 'idle',
  error: null,
  nextPageUrl: null,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    resetPokemons(state) {
      state.entities = [];
      state.loading = 'idle';
      state.error = null;
      state.nextPageUrl = null;
    },
  },
  extraReducers: {
    [fetchPokemons.pending]: (state) => {
      state.loading = 'pending';
    },
    [fetchPokemons.fulfilled]: (state, action) => {
      state.entities = [...state.entities, ...action.payload.results];
      state.nextPageUrl = action.payload.next;
      state.loading = 'succeeded';
    },
    [fetchPokemons.rejected]: (state, action) => {
      state.loading = 'failed';
      state.error = action.payload;
    },
  },
});

export const { resetPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;