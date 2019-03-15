import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
  state = {
    time: '',
  };

  componentDidMount() {
    this.clock = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  render() {
    return (
      <div>
        <p>{this.state.time}</p>
      </div>
    )
  }
}

export { Timer };
