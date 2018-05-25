import React, { Component } from 'react';
// import Search from './Search.js';
// import Welcome from './Welcome.js';
import CurrentWeather from './CurrentWeather.js';
import SevenHourForecast from './SevenHourForecast.js';
import TenDayForecast from './TenDayForecast.js';
<<<<<<< HEAD
import tenDayCleaner from './tenDayCleaner.js';
import sevenHourCleaner from './sevenHourCleaner.js';
import './App.css';
import { mockData } from './mockData.js';
// import { key } from './key.js'


// const URL = 'http:/weather/${key}/...'

=======
import tenDayDataCleaner from './tenDayDataCleaner.js';
import './App.css';
import { mockData } from './mockData.js';
import sevenHourDataCleaner from './sevenHourDataCleaner.js';
>>>>>>> 52b3cb83462a5e58b9e1aea2b6842486e9a9df2d
class App extends Component {
  constructor() {
    super();
    this.state = {
      tenDayForecast: [],
      sevenHourForecast: []
    }
  }

  componentDidMount() {
    this.setState({
      tenDayForecast: tenDayDataCleaner(mockData),
      sevenHourForecast: sevenHourDataCleaner(mockData)
    })
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
        <div className="TenDayForecast">
          <TenDayForecast 
          forecast={this.state.tenDayForecast}/>
        </div>
        <div className="SevenHourForecast">
          <SevenHourForecast
          forecast={this.state.sevenHourForecast}/>
        </div>
    );
  }

}

export default App;
