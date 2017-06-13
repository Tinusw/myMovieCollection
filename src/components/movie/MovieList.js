import React from 'react'
import Slider from 'react-slick'
import { connect } from 'react-redux'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './MovieList.scss'

class MovieList extends React.Component{
  constructor(props){
    super (props)
  }

  submitMovie(input){
    this.props.createMovie(input)
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
              {b.images.map((b, i) =>
                <div className="img-wrapper">
                  <img className="img-responsive" key={i} src={b.base64}></img>
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
const mapStateToProps = (state, props) => {
  return {
    movies: state.movies
  }
};

// Map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    createMovie: movie => dispatch(movieActions.createMovie(movie))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
