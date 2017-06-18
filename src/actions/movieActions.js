import * as actionTypes from './actionTypes'

export const createMovie = (movie) => {
  return {
    type: actionTypes.CREATE_MOVIE,
    movie
  }
};

export const deleteMovie = (id) => {
  console.log('action triggered. movie index: ' + id)
  return {
    type: actionTypes.DELETE_MOVIE,
    id
  }
}
