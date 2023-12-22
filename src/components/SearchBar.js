import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchPokemons } from '../redux/slices/pokemonSlice';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    dispatch(searchPokemons(event.target.value));
  };

  return (
    <div className="p-4">
      <input
        id="search-bar"
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full p-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
  );
};

export default SearchBar;