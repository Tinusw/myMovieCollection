import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import * as movieActions from '../../actions/movieActions'
import FileBase64 from 'react-file-base64'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './moviePage.scss'

class Movie extends React.Component{
  constructor(props){
    super (props)
  }

  getDefaultProps: function(){
    return {
      id: null,
      title: '',
      director: '',
      genre: '',
      description: '',
      images: '',
      files: [],
    };
}

  submitMovie(input){
    input.id = this.state.id;
    this.props.createOrUpdateMovie(input)
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
    let images = this.state.files

    return (
      <div className="container">
        <div className="col-lg-12 text-center">
          <h3>Add a new movie to your collection</h3>
        </div>
        <div className="col-lg-offset-4 col-lg-4 text-center">
          <form className='horizontal' onSubmit={e => {
            e.preventDefault();
            if (!title.value.trim()) {
              title.focus()
              return
            }
            if (!director.value.trim()){
              title.focus()
              return
            }
            if (!genre.value.trim()){
              genre.focus()
              return
            }
            if (!description.value.trim()){
              description.focus()
              return
            }
            if(!images.length > 0){
              alert('please upload at least one image')
              return
            }
            // Set our form values as an object
            var input ={title: title.value, director: director.value, genre: genre.value, description: description.value, images: images}
            console.log(input)
            this.submitMovie(input)
            this.setState({
              redirectToNewPage: true
            })
            e.target.reset();
            this.resetState()
          }}>
            <div className="form-group">
              <label className="control-label col-sm-3 text-right">Title:</label>
              <div className="col-sm-9 text-left">
                <input className="form-control" type="text" name="title" placeholder="Snatch" defaultValue={this.props.title} ref={node => title = node}/>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-3 text-right">Director:</label>
              <div className="col-sm-9 text-left">
                <input className="form-control" type="text" name="title" defaultValue={this.props.director} placeholder="Guy Ritchie" ref={node => director = node}/>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-3 text-right">Genre:</label>
              <div className="col-sm-9 text-left">
                <input className="form-control" type="text" name="title" defaultValue={this.props.genre} placeholder="Crime" ref={node => genre = node}/>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-3 text-right">description:</label>
              <div className="col-sm-9 text-left">
                <textarea className="form-control" type="text" name="title" placeholder="A great film" defaultValue={this.props.description} ref={node => description = node}/>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-3 text-right">Images:</label>
              <div className="col-sm-9 text-left">
                <FileBase64
                  multiple={ true }
                  onDone={ this.getFiles.bind(this) }
                 />
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
            <div className="col-lg-12 text-center">
              <h2>Preview Images</h2>
            </div>
            <div className="col-lg-12 text-center">
              {this.state.files.map((b) =>
              <div className="col-lg-3">
                  <img className="img-responsive" src={b.base64}></img>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// map state from store to props
const mapStateToProps = (state, props) => {
  if(props.params.id) {
    console.log('id available')
    return {
      state.movies.find(movie => movie.id === props.params.id)
    }
  }
  return {
    movie: null
  }
};

// Map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    createOrUpdateMovie: movie => dispatch(movieActions.createOrUpdateMovie(movie))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)
