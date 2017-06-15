import * as actionTypes from './actionTypes'

export const createMovie = (movie) => {
  return {
    type: actionTypes.CREATE_MOVIE,
    movie
  }
};

export const deleteMovie = (movie) => {
  console.log('action triggered. movie index:' + movie)
  return {
    type: actionTypes.DELETE_MOVIE,
    movie
  }
}
