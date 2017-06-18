import React from 'react'
import {connect} from 'react-redux'
import MovieDetails from './MovieDetails'
import * as movieActions from '../../actions/movieActions'

class MovieDetailsPage extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render(){
    return (
      <div>
        <h1>Movie Details Page</h1>
        <MovieDetails movie={this.movie}/>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    movie: state.movie
  }
}


export default connect()(MovieDetailsPage)
