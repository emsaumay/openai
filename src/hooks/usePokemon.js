import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemon } from '../redux/slices/pokemonSlice';

const usePokemon = (pokemonId) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const pokemon = useSelector((state) =>
    state.pokemon.entities.find((p) => p.id === pokemonId)
  );

  useEffect(() => {
    if (!pokemon) {
      setIsLoading(true);
      dispatch(fetchPokemon(pokemonId))
        .unwrap()
        .then(() => setIsLoading(false))
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }
  }, [dispatch, pokemonId, pokemon]);

  return { pokemon, isLoading, error };
};

export default usePokemon;