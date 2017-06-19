import * as actions from './movieActions'
import * as actionTypes from './actionTypes'


describe('actions', () => {
  it('should create an action to add a movie', () => {
    const movie = {
      title: "testTitle",
      genre: "testGenre",
      director: "testDirector",
      description: "testDescription"
    }
    const expectedAction = {
      type: actionTypes.CREATE_MOVIE,
      movie
    }
    expect(actions.createMovie(movie)).toEqual(expectedAction)
  })
  it('should create an action to delete a movie', () => {
    const id = {
      title: "testTitle",
      genre: "testGenre",
      director: "testDirector",
      description: "testDescription"
    }
    const expectedAction = {
      type: actionTypes.DELETE_MOVIE,
      id
    }
    expect(actions.deleteMovie(id)).toEqual(expectedAction)
  })
  it('should create an action to update a movie', () => {
    const movie = {
      title: "testTitle",
      genre: "testGenre",
      director: "testDirector",
      description: "testDescription"
    }
    const expectedAction = {
      type: actionTypes.UPDATE_MOVIE,
      movie
    }
    expect(actions.updateMovie(movie)).toEqual(expectedAction)
  })
})
