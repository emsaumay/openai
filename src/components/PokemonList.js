import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons } from '../redux/pokemon/pokemonActions';
import PokemonCard from './PokemonCard';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { pokemonSelectors } from '../redux/pokemon/pokemonSelectors';

const PokemonList = () => {
  const dispatch = useDispatch();
  const { pokemons, hasMore, loading, error } = useSelector(pokemonSelectors.selectAll);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  function fetchMoreListItems() {
    if (hasMore && !loading) {
      dispatch(fetchPokemons());
    }
    setIsFetching(false);
  }

  useEffect(() => {
    if (!pokemons.length) {
      dispatch(fetchPokemons());
    }
  }, [dispatch, pokemons.length]);

  return (
    <div id="pokemon-list" className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      {loading && <p>Loading more Pokémons...</p>}
      {error && <p>Error fetching Pokémons: {error}</p>}
      {!hasMore && <p>No more Pokémons to show.</p>}
      {isFetching && <p>Fetching more Pokémons...</p>}
    </div>
  );
};

export default PokemonList;