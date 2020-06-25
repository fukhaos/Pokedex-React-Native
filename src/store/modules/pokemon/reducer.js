import produce from 'immer';
import { Types } from './actions';

// Reducer
const initialState = {
  pokemons: [],
  loading: false,
};

export default function reducer(state = initialState, action) {
  const { payload } = action;

  return produce(state, (draft) => {
    switch (action.type) {
      case Types.POKEMON_LIST_SUCCESS: {
        draft.pokemons = [...draft.pokemons, ...payload];
        break;
      }

      default:
        return state;
    }
  });
}
