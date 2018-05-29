import React, { Component } from 'react';
import Search from './Search.js';
// import Welcome from './Welcome.js';
import CurrentWeather from './CurrentWeather.js';
import currentDataCleaner from './currentDataCleaner.js';
import SevenHourForecast from './SevenHourForecast.js';
import sevenHourDataCleaner from './sevenHourDataCleaner.js';
import TenDayForecast from './TenDayForecast.js';
import tenDayDataCleaner from './tenDayDataCleaner.js';
import './App.css';
// import { mockData } from './mockData.js';
import { key } from './key.js'
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

  getWeather(location) {
    fetch(`http://api.wunderground.com/api/${key}/conditions/hourly/forecast10day/q/CA/${location}.json`)
      .then(data => data.json())
      .then(data => {
        this.setState({
          tenDayForecast: tenDayDataCleaner(data),
          sevenHourForecast: sevenHourDataCleaner(data),
          currentWeather: currentDataCleaner(data)
        })
      })
      .catch(err => "al;skdjflaskdfj")
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Weatherly</h1>
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
