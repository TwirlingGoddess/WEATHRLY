import React from 'react';
import './CurrentWeather.css';

const CurrentWeather = (props) => {
      return (
        <section className="CurrentWeather">
          <h1 className='city'>{props.forecast.name}</h1>
          <h2 className='conditions'>{props.forecast.conditions}</h2>
          <h3 className='day'>{props.forecast.dayOfWeek}</h3>
          <p className='current'>{props.forecast.currentTemperature}°</p>
          <p className='high'>High {props.forecast.expectedHigh}°</p>
          <p className='low'>Low {props.forecast.expectedLow}°</p>
        </section>
      )
}

export default CurrentWeather;
