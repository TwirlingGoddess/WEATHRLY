import React from 'react';
// import SevenHourForecast from './SevenHourForecast.js';
// import TenDayForecast from './TenDayForecast.js';
import './Card.css';


const Card = props => {

    return (
      <section>
      <h1>{props.day}</h1>
      <h1>low: {props.low}</h1>
      <h1>High: {props.high}</h1>
      </section>
    )
}

export default Card;