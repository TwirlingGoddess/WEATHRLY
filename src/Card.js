import React from 'react';
import './Card.css';


const Card = (props) => {
    if (props.day) {
      return (
        <section className='Card'>
        <h1>{props.day}</h1>
        <h1>Low: {props.low}°</h1>
        <h1>High: {props.high}°</h1>
        </section>
      )
    }
    if(props.hour) {
      return (
        <section className='Card'>
        <h1>Hour: {props.hour}</h1>
        <h1>Temp: {props.temp}°</h1>
        </section>
      )
    } 
}

export default Card;