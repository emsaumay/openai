import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../redux/slices/pokemonSlice';

const usePokemons = () => {
  const dispatch = useDispatch();
  const { pokemons, status, error } = useSelector((state) => state.pokemon);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchPokemons({ page, searchQuery }));
  }, [dispatch, page, searchQuery]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const search = (query) => {
    setSearchQuery(query);
    setPage(1); // Reset to the first page for new search results
  };

  return {
    pokemons,
    status,
    error,
    loadMore,
    search,
  };
};

export default usePokemons;