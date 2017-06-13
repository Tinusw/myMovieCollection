import React from 'react'
import { connect } from 'react-redux'
import * as movieActions from '../../actions/movieActions'
import FileBase64 from 'react-file-base64'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './moviePage.css'

class Movie extends React.Component{
  constructor(props){
    super (props)
    this.state = {
      files: []
    }
  }


  submitMovie(input){
    this.props.createMovie(input)
  }

  // GetFiles from FileBase64 uploader and set to state
  getFiles(files){
    this.setState({ files: files })
  }

  // Reset state after submit
  resetState(){
    this.setState({ files: [] })
  }

  render () {
    let title
    let director
    let genre
    let description
    let settings = {
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplay: 500
    }

    return (
      <div className='container'>
        <h3>Films</h3>
        <div className='col-lg-12'>
          {this.props.movies.map((b, i) =>
            <div key={i} className="col-lg-3">
              <h3>{b.title}</h3>
              <h4>{b.director}</h4>
              <h4>{b.genre}</h4>
              <h4>{b.description}</h4>
              <div className="col-lg-12 image-slider">
                <Slider {...settings}>
                  {b.images.map((b, i) =>
                    <div><img key={i} src={b.base64}></img></div>
                  )}
                </Slider>
              </div>
            </div>
          )}
        </div>
        <div>
          <h3>Movie Form</h3>
          <form onSubmit={e => {
            e.preventDefault();
            if (!title.value.trim()) {
              return
            }
            if (!director.value.trim()){
              return
            }
            if (!genre.value.trim()){
              return
            }
            if (!description.value.trim()){
              return
            }
            // Set our form values as an object
            var input ={title: title.value, director: director.value, genre: genre.value, description: description.value, images: this.state.files}
            this.submitMovie(input)
            e.target.reset();
            this.resetState()
          }}>
            <input type="text" name="title" ref={node => title = node}/>
            <input type="text" name="director" ref={node => director = node}/>
            <input type="text" name="genre" ref={node => genre = node}/>
            <input type="text" name="description" ref={node => description = node}/>
            <FileBase64
              multiple={ true }
              onDone={ this.getFiles.bind(this) } />
            <div className="col-lg-3">
              {this.state.files.map((b, i) =>
                <img src={b.base64}></img>
              )}
            </div>
            <input type="submit"/>
          </form>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Movie)
