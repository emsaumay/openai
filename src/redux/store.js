import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from './middleware/thunkMiddleware';
import sagaMiddleware from './middleware/sagaMiddleware';
import pokemonSlice from './slices/pokemonSlice';

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware, sagaMiddleware),
});