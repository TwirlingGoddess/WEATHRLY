import React from 'react';
import Card from './Card.js';
import './TenDayForecast.css';

const TenDayForecast = (props) => {
   const renderedCards =  props.forecast.map((day, index) => {
      return(
        <Card 
          day={day.dayOfWeek}
          img={day.image}
          high={day.high}
          low={day.low}
          key={index}
        />)
    })

    return(
      <div className="justify-ten-day">
        { renderedCards }
      </div>
    )
}


  
  export default TenDayForecast;
  