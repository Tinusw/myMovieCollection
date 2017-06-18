import React from 'react'
import MovieList from './MovieList'
import { dispatch, connect } from 'react-redux'
import { deleteMovie } from '../../actions/movieActions'

class MovieListContainer extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
      <MovieList {...this.props} />
    )
  }
}

// map state from store to props
const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
};

// Map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    onClickDelete: (id) => {
      dispatch(deleteMovie(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer)
