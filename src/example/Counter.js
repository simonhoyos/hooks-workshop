import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  state = {
    count: 0,
  };

  handleDecrement = e => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  handleIncrement = e => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleDecrement}>-</button>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    )
  }
}

export { Counter };
