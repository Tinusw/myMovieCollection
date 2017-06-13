import React from 'react'
import { connect } from 'react-redux'
import * as movieActions from '../../actions/movieActions'
import FileBase64 from 'react-file-base64'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './moviePage.scss'

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
      <div className="container">
        <div className="col-lg-12 text-center">
          <h3>Add a new movie to your collection</h3>
        </div>
        <div className="col-lg-12 text-center">
      <form className='horizontal' onSubmit={e => {
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
        <div className="form-group">
          <label className="control-label col-sm-6 text-right">Title:</label>
          <div className="col-sm-6 text-left">
            <input type="text" name="title" placeholder="Snatch" ref={node => title = node}/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-6 text-right">Director:</label>
          <div className="col-sm-6 text-left">
            <input type="text" name="title" placeholder="Guy Ritchie" ref={node => director = node}/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-6 text-right">Genre:</label>
          <div className="col-sm-6 text-left">
            <input type="text" name="title" placeholder="Crime" ref={node => genre = node}/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-6 text-right">description:</label>
          <div className="col-sm-6 text-left">
            <input type="text" name="title" placeholder="Guy Ritchie" ref={node => description = node}/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-6 text-right">Images:</label>
          <div className="col-sm-6 text-left">
            <FileBase64
              multiple={ true }
              onDone={ this.getFiles.bind(this) } />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12 text-center">
            <h5 className="hint">You can upload multiple images at the same time </h5>
            <input type="submit"/>
          </div>
        </div>
      </form>
    </div>

        <div className="container">
          <div className="row">
            {this.state.files.map((b, i) =>
            <div className="col-lg-3">
                <img className="img-responsive" src={b.base64}></img>
            </div>
            )}
          </div>
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
