import React from 'react';
import Card from './Card.js';
import './SevenHourForecast.css';

const SevenHourForecast = (props) => {
    const renderedCards = props.forecast.map((hour, index) => {
      return(
        <Card
        hour={hour.hour}
        img={hour.image}
        temp={hour.temp}
        key={index}
      />)
    })

    return (
      <div className="justify-seven-day">
        { renderedCards }
      </div>
    )
}



export default SevenHourForecast;