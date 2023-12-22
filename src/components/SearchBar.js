import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { searchPokemon } from '../redux/pokemon/pokemonActions';
import { useDebounce } from '../hooks/useDebounce';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const dispatch = useDispatch();

  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  React.useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(searchPokemon(debouncedSearchTerm));
    }
  }, [debouncedSearchTerm, dispatch]);

  return (
    <div className="p-4">
      <input
        id="search-bar"
        type="text"
        placeholder="Search Pokemon by name or ID"
        className="w-full p-2 border rounded shadow"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;