import React from 'react'
import {connect} from 'react-redux'
import MovieDetails from './MovieDetails'
import * as movieActions from '../../actions/movieActions'

class MovieDetailsPage extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  componentDidMount(){
    this.props.fetchMovie(this.props.params.id)
  }

  render(){
    return (
      <div>
        <h1>Movie Details Page</h1>
        <MovieDetails movie={this.props.movie}/>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    movie: state.movie
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovie: movieId => dispatch(movieActions.fetchMovie(movieId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPage)
