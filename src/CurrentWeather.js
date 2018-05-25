import React from 'react';
// import App from './App.js';
import './CurrentWeather.css';

const CurrentWeather = (props) => {
  const { name, conditions, dayOfWeek, currentTemperature, expectedHigh,expectedLow } = props; 
    return(
      <div>
        <h1>{name}</h1>
        <h2>{conditions}</h2>
        <h2>{dayOfWeek}</h2>
        <h2>{currentTemperature}</h2>
        <h2>High: {expectedHigh}</h2>
        <h2>Low: {expectedLow}</h2>
      </div>
    )
}

export default CurrentWeather;
