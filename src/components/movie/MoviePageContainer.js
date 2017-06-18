import React from 'react'
import { connect } from 'react-redux'
import MoviePage from './MoviePage'
import * as movieActions from '../../actions/movieActions'

class MovieContainer extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
      <MoviePage {...this.props}/>
    )
  }
}

// map state from store to props
const mapStateToProps = (state, props) => {
  if(props.params.id) {
    return {
      movie: state.movies.find((movie) => movie.id === props.params.id)
    }
  }
  return {
  }
};

// Map actions to props
const mapDispatchToProps = (dispatch, props) => {
  return {
    createOrUpdateMovie: (movie) => {
      dispatch(movieActions.createOrUpdateMovie(movie))
      props.router.push('/')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer)
