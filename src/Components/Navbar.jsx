import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";
import SearchComponent from './SearchComponent';
// import { withNavigation } from './withNavigation';
// import { useNavigate } from 'react-router-dom';


export default class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/" id="brand">
                <img src='data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M186.1 343.3c-9.7 9.7-9.7 25.3 0 34.9 9.7 9.7 25.3 9.7 34.9 0L378.2 221.1c19.3-19.3 50.6-19.3 69.9 0s19.3 50.6 0 69.9L294 445.1c19.3 19.3 50.5 19.3 69.8 0l0 0 119.3-119.2c38.6-38.6 38.6-101.1 0-139.7-38.6-38.6-101.2-38.6-139.7 0l-157.2 157.2zm244.5-104.8c-9.7-9.7-25.3-9.7-34.9 0l-157.2 157.2c-19.3 19.3-50.5 19.3-69.8 .1l-.1-.1c-9.6-9.6-25.3-9.7-34.9 0l0 0c-9.7 9.6-9.7 25.3 0 34.9l0 0c38.6 38.6 101.1 38.6 139.7 0l157.2-157.2c9.7-9.7 9.7-25.3 0-34.9zm-262 87.3l157.2-157.2c9.6-9.7 9.6-25.3 0-34.9-9.6-9.6-25.3-9.6-34.9 0L133.7 290.9c-19.3 19.3-50.6 19.3-69.9 0l0 0c-19.3-19.3-19.3-50.5 0-69.8l0 0L218 66.9c-19.3-19.3-50.6-19.3-69.9 0l0 0L28.9 186.1c-38.6 38.6-38.6 101.1 0 139.7 38.6 38.6 101.1 38.6 139.7 0zm-87.3-52.4c9.6 9.6 25.3 9.6 34.9 0l157.2-157.2c19.3-19.3 50.6-19.3 69.8 0l0 0c9.7 9.7 25.3 9.7 34.9 0 9.7-9.7 9.7-25.3 0-34.9-38.6-38.6-101.1-38.6-139.7 0L81.3 238.5c-9.7 9.6-9.7 25.3 0 34.9h0z"/></svg>' alt="" width="32" height="32" className="rounded-circle me-2 mx-1"/>
                Newsify
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/About">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/Business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/Entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/General">General</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/Health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/Science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/Sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/Technology">Technology</Link>
                </li>


              </ul>
              <SearchComponent />
              <form className="d-flex" role="search">
                {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" list='suggession' id='searchInp'/>
                    <button className="btn btn-outline-success" type="submit" onClick={this.onSearchClick}>Search</button> */}
                <datalist id='suggession'>
                  <Link className="nav-link " aria-current="page" to="/Health"><option value="Health"></option></Link>
                  <Link className="nav-link " aria-current="page" to="/Business"><option value="Business"></option></Link>
                  <Link className="nav-link " aria-current="page" to="/Entertainment"><option value="Entertainment"></option></Link>
                  <Link className="nav-link " aria-current="page" to="/General"><option value="General"></option></Link>
                  <Link className="nav-link " aria-current="page" to="/Science"><option value="Science"></option></Link>
                  <Link className="nav-link " aria-current="page" to="/Sports"><option value="Sports"></option></Link>
                  <Link className="nav-link " aria-current="page" to="/Technology"><option value="Technology"></option></Link>
                </datalist>
              </form>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
