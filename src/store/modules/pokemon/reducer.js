import produce from 'immer';
import { Types } from './actions';

// Reducer
const initialState = {
  pokemons: [],
  loading: true,
  end: false,
};

export default function reducer(state = initialState, action) {
  const { payload } = action;

  return produce(state, (draft) => {
    switch (action.type) {
      case Types.POKEMON_LIST_REQUEST:
        draft.loading = true;
        break;

      case Types.POKEMON_LIST_FAILURE:
        draft.loading = false;
        break;

      case Types.POKEMON_LIST_SUCCESS: {
        draft.pokemons = [...draft.pokemons, ...payload];
        draft.loading = false;
        break;
      }

      default:
        return state;
    }
  });
}
