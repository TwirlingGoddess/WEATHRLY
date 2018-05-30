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
      tenDayForecast: [] || null,
      sevenHourForecast: [] || null,
      currentWeather: [] || null,
    }
    this.getWeather = this.getWeather.bind(this);
    this.showSevenHour = this.showSevenHour.bind(this);
    this.showTenDay = this.showTenDay.bind(this);
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
      this.pullFromStorage();
    };
  
  getWeather(city, state) {
    fetch(`http://api.wunderground.com/api/${key}/conditions/hourly/forecast10day/q/${state}/${city}.json`)
      .then(data => 
        data.json()

      )
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

  showSevenHour() {
    const hideTen = document.querySelector('.TenDayForecast');
    if(hideTen){
      hideTen.remove();
      const sevenHour = JSON.parse(localStorage.getItem('sevenHour'));
      this.setState({sevenHourForecast: sevenHour});
      const mainPage = document.querySelector('.forecastSection');
      let newDiv = document.createElement('div')
      newDiv.innerHTML = '<div className="TenDayForecast"><div>';
      mainPage.append(newDiv)

    }
  }

  showTenDay() {
    const hideSeven = document.querySelector('.SevenHourForecast');
    if(hideSeven){
      hideSeven.remove();
      const tenDay = JSON.parse(localStorage.getItem('tenDay'));
      this.setState({tenDayForecast: tenDay})
    }
  }

  render() {
    if(localStorage.length > 0) {
      console.log('asdfasdf');
    return (
      <div className="App">
        <h1>Current Weather</h1>
        <img className="App-logo" src="https://img.clipart.guru/sun-clipart-transparent-background-weather-clipart-transparent-300_300.png"/>
        <CurrentWeather
          forecast={this.state.currentWeather}/>
        <div className="midSection">
          <div className="selectorButtons">
            <button className="mainbutton" onClick={this.showSevenHour}>7 Hour Forecast</button>
            <button className="mainbutton" onClick={this.showTenDay}>10 Day Forecast</button>
          </div>
          <Search cssSize="smallInput"
                  getWeather={this.getWeather}/>
        </div>
        <div className="forecastSection">
          <div className="TenDayForecast">
            <TenDayForecast 
            forecast={this.state.tenDayForecast}/>
          </div>
          <div className="SevenHourForecast">
            <SevenHourForecast
            forecast={this.state.sevenHourForecast}/>
          </div>
        </div>
      </div>
    );
    } else {
      console.log('landing');
      return (
        <div className="Landing">
          <Welcome/>
          <Search cssSize="largeInput"
                  getWeather={this.getWeather} />
        </div>
      )
    }
  }
}

export default App;
