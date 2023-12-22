import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList';
import PokemonModal from './components/PokemonModal';
import TypeFilterDropdown from './components/TypeFilterDropdown';
import { PokemonContext } from './context/PokemonContext';
import './styles/App.css';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [filterType, setFilterType] = useState('');

  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleCloseModal = () => {
    setSelectedPokemon(null);
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1 className="text-4xl font-bold">Pokedex</h1>
        </header>
        <PokemonContext.Provider value={{ handleSelectPokemon }}>
          <div className="search-and-filter">
            <SearchBar />
            <TypeFilterDropdown onFilterChange={handleFilterChange} />
          </div>
          <PokemonList filterType={filterType} />
          {selectedPokemon && (
            <PokemonModal
              pokemon={selectedPokemon}
              onClose={handleCloseModal}
            />
          )}
        </PokemonContext.Provider>
      </div>
    </Provider>
  );
}

export default App;