import React from 'react'
import {Link} from 'react-router'


const App = (props) => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/">My Collection</Link></li>
              <li><Link to="/movies">Add Movie</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      {props.children}
    </div>
  )
}


export default App
