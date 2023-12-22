import React from 'react';
import PropTypes from 'prop-types';

const PokemonCard = ({ pokemon, onCardClick }) => {
  const { id, name, types } = pokemon;
  const imageUrl = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`;

  return (
    <div
      id={`pokemon-card-${id}`}
      className="max-w-sm rounded overflow-hidden shadow-lg m-2 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
      onClick={() => onCardClick(pokemon)}
    >
      <img className="w-full" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          ID: {id}
        </p>
        <div className="pt-4">
          {types.map((typeInfo, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {typeInfo.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.shape({
          name: PropTypes.string.isRequired,
        }).isRequired,
      })
    ).isRequired,
  }).isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default PokemonCard;