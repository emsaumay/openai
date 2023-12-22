import React from 'react';
import { useDispatch } from 'react-redux';
import { openPokemonDetail } from '../redux/slices/pokemonSlice';

const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();

  const handleCardClick = () => {
    dispatch(openPokemonDetail(pokemon));
  };

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg m-2 cursor-pointer transition ease-in-out transform hover:-translate-y-1 hover:scale-105"
      onClick={handleCardClick}
    >
      <img
        className="w-full"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 capitalize">{pokemon.name}</div>
        <p className="text-gray-700 text-base">
          {pokemon.types.map((typeInfo) => (
            <span
              key={typeInfo.type.name}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {typeInfo.type.name}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default PokemonCard;