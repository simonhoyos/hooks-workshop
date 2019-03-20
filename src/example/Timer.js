import React, { Component } from 'react';
import './Timer.css';

function formatTime(time) {
  return time / 10 >= 1 ? time : `0${time}`;
}

function TimeBox({ time, name, isRunning, handleDecrement, handleIncrement }) {
  const maxTime = name === 'hours' ? 23 : 59;
  return (
    <div>
      <h2>{name}</h2>
      <p>{formatTime(time)}</p>
      <button
        name={name}
        onClick={handleDecrement}
        disabled={time <= 0 || isRunning}
      >
        -
      </button>
      <button
        name={name}
        onClick={handleIncrement}
        disabled={time >= maxTime || isRunning}
      >
        +
      </button>
    </div>
  )
}

class Timer extends Component {
  state = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    isRunning: false,
  };

  handleDecrement = e => {
    const name = e.target.name;

    this.setState(prevState => ({
      [name]: prevState[name] - 1,
    }));
  }

  handleIncrement = e => {
    const name = e.target.name;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  }

  handleStart = () => {
    this.setState({ isRunning: true });

    this.timer = setInterval(() => {
      const { hours, minutes, seconds } = this.state;

      if (hours > 0 && (minutes <= 0 && seconds <= 0)) {
        this.setState(({ hours }) => ({
          hours: hours - 1,
          minutes: 59,
          seconds: 59,
        }));
        return;
      }

      if (minutes > 0 && seconds <= 0) {
        this.setState(({ minutes }) => ({
          minutes: minutes - 1,
          seconds: 59,
        }));
        return;
      }

      this.setState(({ seconds }) => ({
        seconds: seconds - 1,
      }), () => {
        if (hours <= 0 && minutes <= 0 && seconds - 1 <= 0) {
          this.handleStop();
          return;
        }
      });
      return;
    }, 1000);
  }

  handleStop = () => {
    this.setState({ isRunning: false });
    clearInterval(this.timer);
  }

  handleReset = () => {
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0,
      isRunnig: false,
    });
  }

  render() {
    const { hours, minutes, seconds, isRunning } = this.state;
    return (
      <div className="container">
        <TimeBox
          name="hours"
          time={hours}
          handleDecrement={this.handleDecrement}
          handleIncrement={this.handleIncrement}
          isRunning={isRunning}
        />
        <TimeBox
          name="minutes"
          time={minutes}
          handleDecrement={this.handleDecrement}
          handleIncrement={this.handleIncrement}
          isRunning={isRunning}
        />
        <TimeBox
          name="seconds"
          time={seconds}
          handleDecrement={this.handleDecrement}
          handleIncrement={this.handleIncrement}
          isRunning={isRunning}
        />
        <button
          onClick={this.handleStart}
          className="start"
          disabled={(hours <= 0 && minutes <= 0 && seconds <= 0) || isRunning}
        >
          Start
        </button>
        <button
          onClick={this.handleStop}
          className="stop"
          disabled={!isRunning}
        >
          Stop
        </button>
        <button
          onClick={this.handleReset}
          className="reset"
          disabled={isRunning}
        >
          Reset
        </button>
      </div>
    )
  }
}

export { Timer };
