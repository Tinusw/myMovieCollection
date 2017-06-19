import * as actionTypes from './actionTypes'
import { v4 } from 'uuid'

export const createMovie = (movie) => {
  movie.id = v4()
  return {
    type: actionTypes.CREATE_MOVIE,
    movie,
  }
};

export const deleteMovie = (id) => {
  return {
    type: actionTypes.DELETE_MOVIE,
    id
  }
}

export const updateMovie = (movie) => {
  return {
    type: actionTypes.UPDATE_MOVIE,
    movie
  }
}

// Since we use the same form for createMovie & updateMovie
// We use this function to route to the correct action
export const createOrUpdateMovie = (movie) => {
  if (movie.id) {
    return updateMovie(movie)
  }
  return createMovie(movie)
}
