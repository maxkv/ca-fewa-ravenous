import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';

class App extends Component {
  searchYelp(term, location, sortBy) {
    window.alert(`Searching yelp with ${term}, ${location}, ${sortBy}`);
  }

  render() {
    return (
      <div className="App">
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList />
      </div>
    );
  }
}

export default App;
