import React, { useReducer, useRef, useDebugValue } from 'react';
import './Timer.css';

function formatTime(time) {
  return time / 10 >= 1 ? time : `0${time}`;
}

function init(initialState) {
  return initialState;
}

function tick({ hours, minutes, seconds }) {
  if (hours > 0 && (minutes <= 0 && seconds <= 0)) {
    return { hours: hours - 1, minutes: 59, seconds: 59};
  }

  if (minutes > 0 && seconds <= 0) {
    return { minutes: minutes - 1, seconds: 59 };
  }

  return { seconds: seconds - 1 };
}

function useTimer(dispatch) {
  let timer = useRef(null);

  function handleStart() {
    dispatch({ type: 'start' });
    timer = setInterval(() => dispatch({ type: 'tick' }), 1000);
  }

  function handleStop() {
    dispatch({ type: 'stop' });
    clearInterval(timer);
  }

  useDebugValue(timer ? 'Running' : 'Stopped');
  return { handleStart, handleStop };
}

function reducer(state, action) {
  switch (action.type) {
    case 'decrement':
      return {
        ...state,
        [action.payload.name]: state[action.payload.name] - 1,
      };
    case 'increment':
      return {
        ...state,
        [action.payload.name]: state[action.payload.name] + 1,
      };
    case 'start':
      return {
        ...state,
        isRunning: true,
      };
    case 'stop':
      return {
        ...state,
        isRunning: false,
      };
    case 'tick':
      const payload = tick(state);
      return {
        ...state,
        ...payload,
      };
    case 'reset':
      return init(action.payload);
    default:
      return state;
  }
}

const initialState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  isRunning: false,
};

function Timer() {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  const { handleStart, handleStop } = useTimer(dispatch);

  function handleDecrement(e) {
    dispatch({ type: 'decrement', payload: { name: e.target.name } });
  }

  function handleIncrement(e) {
    dispatch({ type: 'increment', payload: { name: e.target.name } });
  }

  function handleReset() {
    dispatch({ type: 'reset', payload: initialState });
  }

  if (state.isRunning && state.hours <= 0 && state.minutes <= 0 && state.seconds <= 0) {
    handleStop();
  }

  const { hours, minutes, seconds, isRunning } = state;
  return (
    <div className="container">
      <TimeBox
        name="hours"
        time={hours}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        isRunning={isRunning}
      />
      <TimeBox
        name="minutes"
        time={minutes}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        isRunning={isRunning}
      />
      <TimeBox
        name="seconds"
        time={seconds}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        isRunning={isRunning}
      />
      <button
        onClick={handleStart}
        className="start"
        disabled={(hours <= 0 && minutes <= 0 && seconds <= 0) || isRunning}
      >
        Start
      </button>
      <button
        onClick={handleStop}
        className="stop"
        disabled={!isRunning}
      >
        Stop
      </button>
      <button
        onClick={handleReset}
        className="reset"
        disabled={isRunning}
      >
        Reset
      </button>
    </div>
  )
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

export { Timer };
