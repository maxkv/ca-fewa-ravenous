import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

export default App;
