import { combineReducers } from 'redux';
import movies from './movieReducers'

const movieApp = combineReducers({
   movies
});

export default movieApp
