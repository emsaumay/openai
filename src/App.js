import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import SearchBar from './components/SearchBar';
import InfinitePokemonList from './components/InfinitePokemonList';
import PokemonDetailModal from './components/PokemonDetailModal';
import TypeFilterDropdown from './components/TypeFilterDropdown';
import './styles/tailwind.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="bg-blue-500 text-white text-xl p-4">
          Pokedex
        </header>
        <div className="container mx-auto px-4">
          <SearchBar />
          <TypeFilterDropdown />
          <InfinitePokemonList />
        </div>
        <PokemonDetailModal />
      </div>
    </Provider>
  );
}

export default App;