import React, { Component } from 'react';
// import Search from './Search.js';
// import Welcome from './Welcome.js';
import CurrentWeather from './CurrentWeather.js';
// import SevenHourForecast from './SevenHourForecast.js';
import TenDayForecast from './TenDayForecast.js';
import tenDayCleaner from './tenDayCleaner.js';
import './App.css';
import { mockData } from './mockData.js';
// import { key } from './Api.js'


// const URL = 'http:/weather/${key}/...'

class App extends Component {
  constructor() {
    super();
    this.state = {
      tenDayForecast: []
    }
  }

  componentDidMount() {
    this.setState({ tenDayForecast: tenDayCleaner(mockData) })
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Weatherly</h1>
        </header>
        <CurrentWeather
          name={mockData.current_observation.display_location.full}
          conditions={mockData.forecast.simpleforecast.forecastday[4].conditions}
          dayOfWeek={mockData.forecast.simpleforecast.forecastday[4].date.weekday}
          currentTemperature='78'
          expectedHigh={mockData.forecast.simpleforecast.forecastday[4].high.fahrenheit}
          expectedLow={mockData.forecast.simpleforecast.forecastday[4].low.fahrenheit} />
        <TenDayForecast 
        forecast={this.state.tenDayForecast}/>
      </div>
    );
  }

}

export default App;
