import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';
const IMAGE_BASE_URL = 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world';

const getPokemonList = async (offset = 0, limit = 20) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon`, {
      params: { offset, limit },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
    throw error;
  }
};

const getPokemonDetails = async (nameOrId) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon/${nameOrId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemon details:', error);
    throw error;
  }
};

const getPokemonImage = (id) => {
  return `${IMAGE_BASE_URL}/${id}.svg`;
};

const searchPokemon = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon/${query}`);
    return response.data;
  } catch (error) {
    console.error('Error searching for Pokemon:', error);
    throw error;
  }
};

const getPokemonTypes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/type`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching Pokemon types:', error);
    throw error;
  }
};

const filterPokemonByType = async (type) => {
  try {
    const response = await axios.get(`${BASE_URL}/type/${type}`);
    return response.data.pokemon.map(pokemonType => pokemonType.pokemon);
  } catch (error) {
    console.error('Error filtering Pokemon by type:', error);
    throw error;
  }
};

export const pokemonAPI = {
  getPokemonList,
  getPokemonDetails,
  getPokemonImage,
  searchPokemon,
  getPokemonTypes,
  filterPokemonByType,
};