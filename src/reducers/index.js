import { combineReducers } from 'redux';
import {movies, movie} from './movieReducers'

const movieApp = combineReducers({
  movies: movies
});

export default movieApp
