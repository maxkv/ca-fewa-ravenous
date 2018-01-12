import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';
import Yelp from './util/Yelp';


class App extends Component {
  constructor() {
    super();
    this.state = {businesses: []};
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    let trm = 'burger';
    let loction = 'stavanger';
    let sotBy = 'best_match';
    Yelp.search(trm, loction, sotBy).then(businesses=> {
      this.setState({businesses: businesses});
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
