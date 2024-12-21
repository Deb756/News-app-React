import React, { Component } from 'react';
import { withNavigation } from './withNavigation'; // Adjust the import path as necessary

class SearchComponent extends Component {
  onSearchClick = () => {
    let val = document.querySelector('#searchInp').value;
    this.props.navigate(`/${val}`);
  };

  render() {
    return (
      <div className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" list='suggession' id='searchInp'/>
        <button className="btn btn-outline-success" type="submit" onClick={this.onSearchClick}>Search</button>
      </div>
    );
  }
}

export default withNavigation(SearchComponent);
