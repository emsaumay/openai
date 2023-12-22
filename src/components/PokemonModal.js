import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PokemonContext } from '../context/PokemonContext';
import { closeModal } from '../redux/pokemon/pokemonActions';
import PropTypes from 'prop-types';

const PokemonModal = () => {
  const { showModal, selectedPokemon } = useContext(PokemonContext);
  const dispatch = useDispatch();

  if (!showModal) return null;

  const handleCloseClick = () => {
    dispatch(closeModal());
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="pokemon-modal">
      <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-2/3 lg:w-1/2 shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{selectedPokemon.name}</h2>
          <button onClick={handleCloseClick} className="text-black">
            [X]
          </button>
        </div>
        <div className="mt-3">
          <img
            src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${selectedPokemon.id}.svg`}
            alt={selectedPokemon.name}
            className="mx-auto"
          />
          <div className="mt-4">
            <p><strong>ID:</strong> {selectedPokemon.id}</p>
            <p><strong>Type:</strong> {selectedPokemon.types.join(', ')}</p>
            <p><strong>Height:</strong> {selectedPokemon.height}</p>
            <p><strong>Weight:</strong> {selectedPokemon.weight}</p>
            <p><strong>Abilities:</strong> {selectedPokemon.abilities.join(', ')}</p>
            <p><strong>Stats:</strong></p>
            <ul>
              {selectedPokemon.stats.map(stat => (
                <li key={stat.name}>{`${stat.name}: ${stat.value}`}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

PokemonModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  selectedPokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
    height: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    abilities: PropTypes.arrayOf(PropTypes.string).isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    })).isRequired
  })
};

export default PokemonModal;