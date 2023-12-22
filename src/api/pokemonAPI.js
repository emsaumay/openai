import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

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

const getPokemonDetails = async (pokemonId) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon/${pokemonId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemon details:', error);
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

export const pokemonAPI = {
  getPokemonList,
  getPokemonDetails,
  getPokemonTypes,
};