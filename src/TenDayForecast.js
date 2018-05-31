import React from 'react';
import Card from './Card.js';
import './TenDayForecast.css';

const TenDayForecast = (props) => {
  return (
    props.forecast.map((day, index) => {
      return(
        <section className={props.switch}>
          <Card 
            day={day.dayOfWeek}
            high={day.high}
            low={day.low}
            key={index}/>
        </section>)
    })
  )
}


  
  export default TenDayForecast;
  