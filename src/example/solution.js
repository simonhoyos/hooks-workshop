import React, { useState, useEffect } from 'react';
import './Clock.css';

export function Clock() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setCount(prevCount => prevCount + 1);
    let clock;
    clock = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    });
    return () => {
      clearInterval(clock);
    }
  }, [time]);

  return (
    <div>
      <p>{count}</p>
      <p>{time}</p>
    </div>
  )
}
