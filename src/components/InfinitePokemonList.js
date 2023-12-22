import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PokemonCard from './PokemonCard';
import { fetchPokemons } from '../redux/slices/pokemonSlice';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';

const InfinitePokemonList = () => {
  const dispatch = useDispatch();
  const { pokemons, status, error } = useSelector((state) => state.pokemon);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  function fetchMoreListItems() {
    if (status !== 'loading') {
      dispatch(fetchPokemons());
    }
  }

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPokemons());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (status === 'succeeded') {
      setIsFetching(false);
    }
  }, [status, setIsFetching]);

  return (
    <div id="pokemon-list" className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      {status === 'loading' && <Loader />}
      {error && <ErrorMessage message={error} />}
      {isFetching && <Loader />}
    </div>
  );
};

export default InfinitePokemonList;