import React, { Component } from 'react';
import Welcome from './Welcome.js';
import Search from './Search.js';
import CurrentWeather from './CurrentWeather.js';
import currentDataCleaner from './currentDataCleaner.js';
import SevenHourForecast from './SevenHourForecast.js';
import sevenHourDataCleaner from './sevenHourDataCleaner.js';
import TenDayForecast from './TenDayForecast.js';
import tenDayDataCleaner from './tenDayDataCleaner.js';
import './App.css';
import { key } from './Key.js'
class App extends Component {
  constructor() {
    super()
    this.state = {
      tenDayForecast: [],
      sevenHourForecast: [],
      currentWeather: [],
      cityStateZip: ''
    }
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather(city, state) {
    fetch(`http://api.wunderground.com/api/${key}/conditions/hourly/forecast10day/q/${state}/${city}.json`)
      .then(data => data.json())
      .then(data => {
        this.setState({
          tenDayForecast: tenDayDataCleaner(data),
          sevenHourForecast: sevenHourDataCleaner(data),
          currentWeather: currentDataCleaner(data)
        })
      })
      .catch(err => alert("please enter valid city and state"))
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <Welcome/>
        </header>
        <h1>Current Weather</h1>
        <CurrentWeather
          forecast={this.state.currentWeather}/>
        <h1>10 Day Forecast</h1>
        <div className="TenDayForecast">
          <Search getWeather={this.getWeather}/>
          <TenDayForecast 
          forecast={this.state.tenDayForecast}/>
        </div>
        <h1>7 Hour Forecast</h1>
        <div className="SevenHourForecast">
          <SevenHourForecast
          forecast={this.state.sevenHourForecast}/>
        </div>
      </div>
    );
  }
}

export default App;
