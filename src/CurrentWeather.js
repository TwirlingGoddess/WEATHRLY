import React from 'react';
import './CurrentWeather.css';

const CurrentWeather = (props) => {
      return (
        <section className="CurrentWeather">
          <h1>{props.forecast.name}</h1>
          <h2>Current Conditions: {props.forecast.conditions}</h2>
          <h2>Day: {props.forecast.dayOfWeek}</h2>
          <h2>Current Temp: {props.forecast.currentTemperature}°</h2>
          <h2>High: {props.forecast.expectedHigh}°</h2>
          <h2>Low: {props.forecast.expectedLow}°</h2>
        </section>
      )
}

export default CurrentWeather;
