import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllTypes, filterPokemonsByType } from '../redux/pokemon/pokemonSlice';

const TypeFilterDropdown = () => {
  const dispatch = useDispatch();
  const allTypes = useSelector(selectAllTypes);
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    if (selectedType) {
      dispatch(filterPokemonsByType(selectedType));
    }
  }, [selectedType, dispatch]);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <div className="my-4">
      <label htmlFor="type-filter-dropdown" className="block text-sm font-medium text-gray-700">
        Filter by Type
      </label>
      <select
        id="type-filter-dropdown"
        name="type-filter-dropdown"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        value={selectedType}
        onChange={handleTypeChange}
      >
        <option value="">All Types</option>
        {allTypes.map((type) => (
          <option key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TypeFilterDropdown;