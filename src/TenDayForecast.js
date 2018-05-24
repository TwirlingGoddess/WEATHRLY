import React from 'react';
import App from './App.js';
import Card from './Card.js';
import './TenDayForecast.css';
// import { mockData } from './mockData.js';

const TenDayForecast = (props) => {

  return (
  <div>
      {props.props.forecast.simpleforecast.forecastday.map((date, index) => {
        return <Card day={date} id={index} />
      })}
  </div>
  )
}


  
  export default TenDayForecast;
  