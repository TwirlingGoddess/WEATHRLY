import React from 'react';
import './CurrentWeather.css';

const CurrentWeather = (props) => {
  const { name, conditions, dayOfWeek, currentTemperature, expectedHigh,expectedLow } = props; 
    return(
      <div className="CurrentWeather">
        <h1>{name}</h1>
        <h2>Current Conditions: {conditions}</h2>
        <h2>Day: {dayOfWeek}</h2>
        <h2>Current Temp: {currentTemperature}°</h2>
        <h2>High: {expectedHigh}°</h2>
        <h2>Low: {expectedLow}°</h2>
      </div>
    )
}

export default CurrentWeather;
