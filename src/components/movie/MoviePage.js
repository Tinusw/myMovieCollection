import React from 'react'
import FileBase64 from 'react-file-base64'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './moviePage.scss'

class MoviePage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      files: this.props.movie.images ? this.props.movie.images : []
    }
  }

  submitMovie(data){
    data.id = this.props.movie.id;
    this.props.createOrUpdateMovie(data)
  }

  // GetFiles from FileBase64 uploader and set to state
  getFiles(files){
    // We set initial state here so we can preview uploads
    this.setState({ files: files })
  }

  // Reset state after submit
  resetState(){
    this.setState({ files: [] })
  }

  render() {
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
            e.target.reset()
            this.resetState()
          }}>
            <div className="form-group">
              <label className="control-label col-sm-3 text-right">Title:</label>
              <div className="col-sm-9 text-left">
                <input className="form-control" type="text" name="title" placeholder="Snatch" defaultValue={this.props.movie.title} ref={node => title = node}/>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-3 text-right">Director:</label>
              <div className="col-sm-9 text-left">
                <input className="form-control" type="text" name="title" defaultValue={this.props.movie.director} placeholder="Guy Ritchie" ref={node => director = node}/>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-3 text-right">Genre:</label>
              <div className="col-sm-9 text-left">
                <input className="form-control" type="text" name="title" defaultValue={this.props.movie.genre} placeholder="Crime" ref={node => genre = node}/>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-3 text-right">description:</label>
              <div className="col-sm-9 text-left">
                <textarea className="form-control" type="text" name="title" placeholder="A great film" defaultValue={this.props.movie.description} ref={node => description = node}/>
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
              {this.state.files.map((image, i) =>
              <div key={i+'image'} className="col-lg-3">
                  <img className="img-responsive" src={image.base64}></img>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

MoviePage.defaultProps = {
  movie: {
    id: null,
    title: '',
    director: '',
    genre: '',
    description: '',
    images: '',
    files: []
  },
  createOrUpdateMovie: (movie) => {}
}

export default MoviePage
