import React, { Component } from 'react';
import './Search.css';
class Search extends Component {
  constructor(props) {
    super();
    this.state = {
      inputValue: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const splitCityState = this.state.inputValue.split(',');
    const city = splitCityState[0];
    const state = splitCityState[1]
    this.props.getWeather(city, state);
  }

  updateState(event) {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    return(
      <div className={this.props.cssSize}>
        <input type="text" placeholder="Enter city & state (York, PA), or Zipcode" 
          value={this.state.inputValue} onChange={event => this.updateState(event)}/>
        <button onClick={this.onSubmit}>Enter</button>
      </div>
    )
  }
}

export default Search;

