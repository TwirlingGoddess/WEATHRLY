import React from 'react';
import './Card.css';


const Card = props => {
    if (props.day) {
      return (
        <section>
        <h1>{props.day}</h1>
        <h1>low: {props.low}</h1>
        <h1>High: {props.high}</h1>
        </section>
      )
    } else {

      return (
        <section>
        <h1>hour: {props.hour}</h1>
        <h1>temp: {props.temp}</h1>
        </section>
      )
    }
}

export default Card;