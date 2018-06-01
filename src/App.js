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
import { key } from './Key.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tenDayForecast: [],
      sevenHourForecast: [],
      currentWeather: [],
    }
    this.getWeather = this.getWeather.bind(this);
  }

  setLocalStorage() {
    const current = JSON.stringify(this.state.currentWeather);
    localStorage.setItem('current', current);

    const sevenHour = JSON.stringify(this.state.sevenHourForecast);
    localStorage.setItem('sevenHour', sevenHour);

    const tenDay = JSON.stringify(this.state.tenDayForecast);
    localStorage.setItem('tenDay', tenDay);
  }

  pullFromStorage() {
    const current = JSON.parse(localStorage.getItem('current'));
    const sevenHour = JSON.parse(localStorage.getItem('sevenHour'));
    const tenDay = JSON.parse(localStorage.getItem('tenDay'));

      this.setState({
        currentWeather: current,
        sevenHourForecast: sevenHour,
        tenDayForecast: tenDay
      });
    }

    componentDidMount() {
      if(localStorage.length > 0) {
        this.pullFromStorage();
      }
    };
  
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
      .then(data => this.setLocalStorage())
      .catch(err => alert("please enter valid city and state"))
  }
  
  switchImage() {
    if(this.state.currentWeather.conditions === 'Mostly Cloudy') {
      return 'http://pluspng.com/img-png/png-sun-and-clouds-big-image-png-2282.png'
    }
    if(this.state.currentWeather.conditions === 'Partly Cloudy') {
      return 'http://pluspng.com/img-png/png-sun-and-clouds-big-image-png-2282.png'
    }
    if(this.state.currentWeather.conditions === 'Overcast') {
      return 'http://pluspng.com/img-png/png-sun-and-clouds-big-image-png-2282.png'
    }
    if(this.state.currentWeather.conditions === 'Sunny') {
      return 'http://hedwig.cz/wp-content/uploads/2014/07/slunicko.png'
    }
    if(this.state.currentWeather.conditions === 'Clear') {
      return 'http://hedwig.cz/wp-content/uploads/2014/07/slunicko.png'
    }
    if(this.state.currentWeather.conditions === 'Chance of Rain') {
      return 'https://cdn.pixabay.com/photo/2014/03/25/16/26/cloud-297112_1280.png'
    }
    if(this.state.currentWeather.conditions === 'Rain') {
      return 'http://moziru.com/images/umbrella-clipart-rainy-day-10.png'
    }
    if(this.state.currentWeather.conditions === 'Snow') {
      return 'https://www.rutherfordlibrary.org/wp/wp-content/uploads/2017/02/snowday.png'
    }
    if(this.state.currentWeather.conditions === 'Chance of a Thunderstorm') {
      return 'http://www.free-icons-download.net/images/a-thunderstorm-icon-38687.png'
    }            
  }

  switchStyling() {
    if(this.state.currentWeather.conditions === 'Sunny') {
      return 'sunny-stylez'
    } else if(this.state.currentWeather.conditions === 'Clear') {
      return 'sunny-stylez'
    } else {
      return 'other-stylez'
    }
  }

  render() {
    if(localStorage.length > 0) {
    return (
      <div className="App">
        <h1>Current Weather</h1>
        <CurrentWeather forecast={this.state.currentWeather}/>
        <div className="midSection">
          <Search cssSize="smallInput" getWeather={this.getWeather}/>
        </div>
        <div className="forecastSection">
          <div className="SevenHourForecast">
            <SevenHourForecast forecast={this.state.sevenHourForecast}/>
            <SevenHourForecast forecast={this.state.sevenHourForecast}/>
            <SevenHourForecast forecast={this.state.sevenHourForecast}/>
            <SevenHourForecast forecast={this.state.sevenHourForecast}/>
          </div>
          <div className="TenDayForecast">
            <TenDayForecast forecast={this.state.tenDayForecast}/>
            <TenDayForecast forecast={this.state.tenDayForecast}/>
          </div>
        </div>
      </div>
    );
    } else {
      return (
        <div className="Landing">
          <Welcome />
          <Search cssSize="largeInput" getWeather={this.getWeather} />
        </div>
      )
    }
  }
}

export default App;
