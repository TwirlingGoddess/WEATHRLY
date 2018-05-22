import React, { Component } from 'react';
import Search from './Search.js';
import Welcome from './Welcome.js';
import CurrentWeather from './CurrentWeather.js';
import SevenHourForecast from './SevenHourForecast.js';
// import TenDayForecast from '.TenDayForecast.js';
import Card from './Card.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Weatherly</h1>
        </header>
      </div>
    );
  }
}

export default App;
