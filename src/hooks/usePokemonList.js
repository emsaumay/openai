import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../redux/pokemon/pokemonActions';
import { selectAllPokemons, selectPokemonStatus, selectPokemonError } from '../redux/pokemon/pokemonSelectors';
import useInfiniteScroll from './useInfiniteScroll';

const usePokemonList = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(selectAllPokemons);
  const status = useSelector(selectPokemonStatus);
  const error = useSelector(selectPokemonError);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = useCallback(() => {
    if (status === 'succeeded' && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [status, hasMore]);

  useInfiniteScroll(loadMore);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPokemons(page));
    }
  }, [dispatch, page, status]);

  useEffect(() => {
    if (status === 'succeeded' && pokemons.length % 20 !== 0) {
      setHasMore(false);
    }
  }, [pokemons, status]);

  return {
    pokemons,
    status,
    error,
    hasMore,
  };
};

export default usePokemonList;