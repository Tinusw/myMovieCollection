import * as actionTypes from './actionTypes'

export const createMovie = (movie) => {
  return {
    type: actionTypes.CREATE_MOVIE,
    movie
  }
};
