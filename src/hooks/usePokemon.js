import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonDetails } from '../redux/pokemon/pokemonActions';
import { selectPokemonDetails, selectPokemonDetailsStatus } from '../redux/pokemon/pokemonSelectors';

const usePokemon = (pokemonId) => {
  const dispatch = useDispatch();
  const pokemonDetails = useSelector((state) => selectPokemonDetails(state, pokemonId));
  const pokemonDetailsStatus = useSelector(selectPokemonDetailsStatus);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (pokemonId && pokemonDetailsStatus !== 'loading') {
      dispatch(fetchPokemonDetails(pokemonId));
    }
  }, [pokemonId, dispatch, pokemonDetailsStatus]);

  useEffect(() => {
    if (pokemonDetails) {
      setPokemon(pokemonDetails);
    }
  }, [pokemonDetails]);

  return {
    pokemon,
    isLoading: pokemonDetailsStatus === 'loading',
    isError: pokemonDetailsStatus === 'failed',
  };
};

export default usePokemon;