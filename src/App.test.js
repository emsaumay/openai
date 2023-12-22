import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import store from './redux/store';
import { fetchPokemons } from './redux/pokemon/pokemonActions';

jest.mock('./redux/pokemon/pokemonActions');

describe('Pokedex Application', () => {
  test('renders the search bar', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const searchBarElement = screen.getByPlaceholderText(/search for pokémon/i);
    expect(searchBarElement).toBeInTheDocument();
  });

  test('renders the infinite scroll list', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const infiniteScrollList = screen.getByTestId('pokemon-list');
    expect(infiniteScrollList).toBeInTheDocument();
  });

  test('fetches pokemons on component mount', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(fetchPokemons).toHaveBeenCalled();
  });

  test('opens modal on pokemon card click', async () => {
    fetchPokemons.mockImplementation(() => async (dispatch) => {
      dispatch({ type: 'pokemon/fetchSuccess', payload: [{ id: 25, name: 'pikachu' }] });
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Simulate fetching and displaying of pokemons
    await store.dispatch(fetchPokemons());

    const pokemonCard = await screen.findByText('pikachu');
    fireEvent.click(pokemonCard);

    const pokemonModal = screen.getByTestId('pokemon-modal');
    expect(pokemonModal).toBeInTheDocument();
  });

  test('filters pokemons by type using the dropdown', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const typeFilterDropdown = screen.getByTestId('type-filter-dropdown');
    fireEvent.change(typeFilterDropdown, { target: { value: 'electric' } });

    // Assuming the action and reducer are correctly implemented to filter the state
    // The list should now be filtered by the electric type
    const filteredPokemonCard = screen.queryByText('pikachu');
    expect(filteredPokemonCard).toBeInTheDocument();
  });
});