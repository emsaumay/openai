import { takeLatest, call, put, all } from 'redux-saga/effects';
import { pokemonAPI } from '../../api/pokemonAPI';
import { fetchPokemonsSuccess, fetchPokemonsFailure, POKEMON_FETCH_INITIATED } from '../slices/pokemonSlice';

function* fetchPokemonsSaga(action) {
  try {
    const response = yield call(pokemonAPI.fetchPokemons, action.payload);
    yield put(fetchPokemonsSuccess(response.data));
  } catch (error) {
    yield put(fetchPokemonsFailure(error.message));
  }
}

function* watchFetchPokemons() {
  yield takeLatest(POKEMON_FETCH_INITIATED, fetchPokemonsSaga);
}

export default function* rootSaga() {
  yield all([
    watchFetchPokemons(),
    // Add other watchers here when needed
  ]);
}