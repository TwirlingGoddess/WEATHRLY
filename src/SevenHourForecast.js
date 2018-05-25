import React from 'react';
import Card from './Card.js';
import './SevenHourForecast.css';

const SevenHourForecast = (props) => {
  return (
    props.forecast.map((hour, index) => {
      return <Card
        hour={hour.hour}
        temp={hour.temp}
        key={index}
      />
    })
  )
}



export default SevenHourForecast;