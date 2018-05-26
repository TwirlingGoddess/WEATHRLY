import React, { Component } from 'react';
// import Search from './Search.js';
// import Welcome from './Welcome.js';
import CurrentWeather from './CurrentWeather.js';
import currentDataCleaner from './currentDataCleaner.js';
import SevenHourForecast from './SevenHourForecast.js';
import sevenHourDataCleaner from './sevenHourDataCleaner.js';
import TenDayForecast from './TenDayForecast.js';
import tenDayDataCleaner from './tenDayDataCleaner.js';
import './App.css';
import { mockData } from './mockData.js';
// import { key } from './key.js'
// const URL = 'http:/weather/${key}/...'





class App extends Component {
  constructor() {
    super()
    this.state = {
      tenDayForecast: [],
      sevenHourForecast: [],
      currentWeather: []
    }
  }

  componentDidMount() {
    this.setState({
      tenDayForecast: tenDayDataCleaner(mockData),
      sevenHourForecast: sevenHourDataCleaner(mockData),
      currentWeather: currentDataCleaner(mockData)
    })
  };
  
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
