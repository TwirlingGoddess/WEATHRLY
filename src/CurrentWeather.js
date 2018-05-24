import React from 'react';
// import App from './App.js';
import './CurrentWeather.css';

const CurrentWeather = (props) => {
    return(
      <div>
        <h1>{props.name}</h1>
        <h2>{props.conditions}</h2>
        <h2>{props.dayOfWeek}</h2>
        <h2>{props.currentTemperature}</h2>
        <h2>{props.expectedHigh}</h2>
        <h2>{props.expectedLow}</h2>
      </div>
    )
}

export default CurrentWeather;
