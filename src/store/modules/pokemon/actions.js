export const Types = {
  UPDATE_SORT_ORDER: '@pokemon/UPDATE_SORT_ORDER',
  POKEMON_LIST_FAILURE: '@pokemon/POKEMON_LIST_FAILURE',
  POKEMON_LIST_REQUEST: '@pokemon/POKEMON_LIST_REQUEST',
  POKEMON_LIST_SUCCESS: '@pokemon/POKEMON_LIST_SUCCESS',
  DETAIL_POKEMON_FAILURE: '@pokemon/DETAIL_POKEMON_FAILURE',
  DETAIL_POKEMON_REQUEST: '@pokemon/DETAIL_POKEMON_REQUEST',
  DETAIL_POKEMON_SUCCESS: '@pokemon/DETAIL_POKEMON_SUCCESS',
};

export function pokemonListRequest() {
  return {
    type: Types.POKEMON_LIST_REQUEST,
  };
}

export function pokemonListSuccess(data) {
  return {
    type: Types.POKEMON_LIST_SUCCESS,
    payload: data,
  };
}
export function updateSortOrder(order) {
  return {
    type: Types.UPDATE_SORT_ORDER,
    payload: order,
  };
}

export function pokemonListFailure(error) {
  return {
    type: Types.POKEMON_LIST_FAILURE,
    payload: error,
  };
}

export function pokemonDetailRequest() {
  return {
    type: Types.DETAIL_POKEMON_REQUEST,
  };
}

export function pokemonDetailSuccess(data) {
  return {
    type: Types.DETAIL_POKEMON_SUCCESS,
    payload: data,
  };
}

export function pokemonDetailFailure(error) {
  return {
    type: Types.DETAIL_POKEMON_FAILURE,
    payload: error,
  };
}
