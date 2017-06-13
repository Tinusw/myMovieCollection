import React from 'react'
import { connect } from 'react-redux'
import * as movieActions from '../../actions/movieActions'
import FileBase64 from 'react-file-base64'
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

  getFiles(files){
    this.setState({ files: files })
  }

  render () {
    let title
    let director
    let genre
    let description

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
              <div className="col-lg-12">
                {b.images.map((b, i) =>
                  <img key={i} src={b.base64} className="img-fluid" alt="responsive-image"></img>
                )}
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
            // Set our form values as input object
            var input ={title: title.value, director: director.value, genre: genre.value, description: description.value, images: this.state.files}
            this.submitMovie(input)
            e.target.reset();
          }}>
            <input type="text" name="title" ref={node => title = node}/>
            <input type="text" name="director" ref={node => director = node}/>
            <input type="text" name="genre" ref={node => genre = node}/>
            <input type="text" name="description" ref={node => description = node}/>
            <input type="submit"/>
          </form>
          <FileBase64
            multiple={ true }
            onDone={ this.getFiles.bind(this) } />
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
