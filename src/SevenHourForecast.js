import React from 'react';
import Card from './Card.js';
import './SevenHourForecast.css';

const SevenHourForecast = (props) => {
    const renderedCards = props.forecast.map((hour, index) => {
      return(
        <Card
        hour={hour.hour}
        temp={hour.temp}
        key={index}
      />)
    })

    return (
      <div>
        { renderedCards }
      </div>
    )
}



export default SevenHourForecast;