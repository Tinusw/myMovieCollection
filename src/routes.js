import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Home from './components/common/HomePage'
import MoviePageContainer from './components/movie/MoviePageContainer'
import MovieListContainer from './components/movie/MovieListContainer'

import App from './components/App'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/movies" component={MoviePageContainer}></Route>
    <Route path="/movie/:id" component={MoviePageContainer}></Route>
  </Route>
)
