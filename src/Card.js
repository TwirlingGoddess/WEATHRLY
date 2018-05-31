import * as FontAwesome from 'react-icons/lib/fa'
import React from 'react';
import './Card.css';


const Card = (props) => {
  
    if (props.day) {
      return (
        <section className='Card'>
        <h1>{props.day}</h1>
        <FontAwesome.FaBeer />
        <h2>High: {props.high}°</h2>
        <h3>Low: {props.low}°</h3>
        </section>
      )
    }
    if(props.hour) {
      return (
        <section className='Card'>
        <h1>{props.hour}</h1>
        <FontAwesome.FaBeer />
        <h2>{props.temp}°</h2>
        </section>
      )
    } 
}

export default Card;