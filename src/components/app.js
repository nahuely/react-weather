import React, { Component } from 'react';

import SearchBar from '../containers/SearchBar'
import WeatherList from '../containers/WeatherList'

export default class App extends Component {
  render() {
    return (
      <section>
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <SearchBar />
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <WeatherList />
          </div>
        </div>
      </section>
    );
  }
}
