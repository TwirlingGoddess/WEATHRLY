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
    this.props.getWeather(this.state.inputValue);
  }

  updateState(event) {
    this.setState({
      inputValue: event.target.value
    })
  }

  render(){
    return(
      <div>
        <input type="text" placeholder="enter city or zip-code here" value={this.state.inputValue} onChange={event => this.updateState(event)}/>
      <button onClick={this.onSubmit}>Enter</button>
      </div>
    )
  }
}

export default Search;

