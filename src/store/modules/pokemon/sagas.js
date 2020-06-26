import { takeLatest, call, put, all, select } from 'redux-saga/effects';

import api from 'app/services/api';
import { Types, pokemonListSuccess, pokemonDetailFailure } from './actions';
import { flashError } from 'app/utils';

export const getPokemons = (state) => state.pokemon;

export function* addPokemons({ payload }) {
  try {
    let { pokemons } = yield select(getPokemons);
    const total = pokemons.length;

    const { data = [] } = yield call(api.get, `pokemon?limit=5&offset=${total}`, {});
    const list = data?.results || [];

    const newPokemons = [];

    for (const index in list) {
      const { data } = yield call(api.get, list[index].url);
      newPokemons.push(data);
    }

    yield put(pokemonListSuccess(newPokemons));
  } catch (error) {
    yield put(pokemonDetailFailure());
    flashError(error);
  }
}

export default all([takeLatest(Types.POKEMON_LIST_REQUEST, addPokemons)]);
