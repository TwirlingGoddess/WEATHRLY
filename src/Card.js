import React from 'react';
// import SevenHourForecast from './SevenHourForecast.js';
// import TenDayForecast from './TenDayForecast.js';
import './Card.css';


const Card = props => {

    return (
      <div>
      <h1>{props.date}</h1>
      <h2>{props.id}</h2>
      </div>
    )
}

export default Card;