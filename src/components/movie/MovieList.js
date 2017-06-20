import React from 'react'
import Slider from 'react-slick'
import {Icon} from 'react-fa'
import { deleteMovie } from '../../actions/movieActions'
import { Link } from 'react-router'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './MovieList.scss'

class MovieList extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    // Settings for slick-carousel
    let settings = {
      infinite: true,
      speed: 500
    }

    return (
      <div className='col-lg-12'>
        {this.props.movies.map((movie, i) =>
          <div key={movie.id} className="col-lg-2">
            <Slider {...settings}>
              {movie.images && movie.images.map((image, z) =>
                <div key={z+'image'} className="img-wrapper">
                  <Icon name="trash" className="trash-icon" onClick={(event) => {
                    event.preventDefault()
                    this.props.onClickDelete(movie.id)
                  }}/>
                  <img className="img-responsive" src={image.base64}></img>
                </div>
              )}
            </Slider>
            <div className="text-left info">
              <div className="span">
                <div className="col-lg-10">
                  <h4>{movie.title}</h4>
                  <h5>{movie.director}</h5>
                </div>
                <div className="col-lg-2 text-right">
                  <Link to={`/movie/${movie.id}`}>Edit</Link>
                </div>
              </div>
              <div className="col-lg-12">
                <h6>{movie.description}</h6>
                <h5 className="text-center">{movie.genre}</h5>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

MovieList.defaultProps = {
  movies: [],
  onClickDelete: () => {}
}

export default MovieList
