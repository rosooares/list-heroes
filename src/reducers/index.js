
import { combineReducers } from 'redux';
import heroes from './heroesReducer';

export default combineReducers({
    heroes: heroes
});