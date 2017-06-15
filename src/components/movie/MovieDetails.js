import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MovieDetails = (movie) => {
  let settings = {
    infinite: true,
    speed: 500
  }

  return (
    <div className='col-lg-12'>
      <div className='col-lg-2'>
        
        <div className="text-left info">
          <h2>{movie.title}</h2>
          <p>{movie.genre}</p>
        </div>
      </div>
    </div>
  )}


export default MovieDetails
