import { FETCH_HEROES_NAME } from '../actions/types';

export default function heroesReducer(state = [], action) {
  switch (action.type) {
    case FETCH_HEROES_NAME:
        return action.payload;
    default:
      return state;
  }
}