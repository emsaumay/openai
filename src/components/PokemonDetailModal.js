import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../redux/slices/pokemonSlice';

const PokemonDetailModal = () => {
  const dispatch = useDispatch();
  const { selectedPokemon, isModalOpen } = useSelector((state) => state.pokemon);

  const handleClose = () => {
    dispatch(closeModal());
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full" id="pokemon-modal">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">{selectedPokemon.name}</h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">{selectedPokemon.description}</p>
          </div>
          <div className="items-center px-4 py-3">
            <button
              id="close-modal"
              onClick={handleClose}
              className="px-4 py-2 bg-gray-800 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailModal;