import { createSelector } from '@reduxjs/toolkit';

const selectPokemonState = state => state.pokemon;

export const selectAllPokemons = createSelector(
  [selectPokemonState],
  pokemonState => pokemonState.pokemons
);

export const selectFilteredPokemons = createSelector(
  [selectAllPokemons, (state, typeFilter) => typeFilter],
  (pokemons, typeFilter) => {
    if (!typeFilter) return pokemons;
    return pokemons.filter(pokemon => pokemon.types.includes(typeFilter));
  }
);

export const selectPokemonById = createSelector(
  [selectAllPokemons, (state, pokemonId) => pokemonId],
  (pokemons, pokemonId) => pokemons.find(pokemon => pokemon.id === pokemonId)
);

export const selectIsLoading = createSelector(
  [selectPokemonState],
  pokemonState => pokemonState.isLoading
);

export const selectError = createSelector(
  [selectPokemonState],
  pokemonState => pokemonState.error
);

export const selectNextPageUrl = createSelector(
  [selectPokemonState],
  pokemonState => pokemonState.nextPageUrl
);