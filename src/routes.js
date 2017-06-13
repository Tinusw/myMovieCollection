import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Home from './components/common/HomePage'
import Movie from './components/movie/MoviePage'

import App from './components/App'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/movies" component={Movie}></Route>
  </Route>
)