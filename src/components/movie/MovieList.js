import React from 'react'
import Slider from 'react-slick'
import { dispatch, connect } from 'react-redux'
import {Icon} from 'react-fa'
import { deleteMovie } from '../../actions/movieActions'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './MovieList.scss'

class MovieList extends React.Component{
  constructor(props){
    super (props)
  }

  handleClick(id) {
    dispatch(deleteMovie(id))
  }
  
  render () {
    // Settings for slick-carousel
    let settings = {
      infinite: true,
      speed: 500
    }
    return (
      <div className='col-lg-12'>
        {this.props.movies.map((b, i) =>
          <div key={i} className="col-lg-2">
            <Slider {...settings}>
              {b.images.map((b, z) =>
                <div className="img-wrapper">
                  <Icon name="trash" className="trash-icon" onClick={(e) =>
                    console.log(this.props.movies[i].id),
                    this.props.onMovieClick.bind(this.props.movies[i].id)
                  }/>
                  <img className="img-responsive" key={z} src={b.base64}></img>
                </div>
              )}
            </Slider>
            <div className="text-left info">
              <h2>{b.title}</h2>
              <p>{b.genre}</p>
            </div>
          </div>
        )}
      </div>
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
    onMovieClick: (id) => {
      dispatch(deleteMovie(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
