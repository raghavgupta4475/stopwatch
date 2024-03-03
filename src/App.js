import './App.css';
import React, { useState } from 'react';

let startTime;
let endTime;
let intervalId;
function App() {

  const [time, setTime] = useState("0:00");
  const [isRunning, setIsRunning] = useState(false);

  const start = () => {
    setIsRunning(true);
    startTime = new Date();
    intervalId = setInterval(updateTime, 1000);
  };

  const stop = () => {
    setIsRunning(false);
    clearInterval(intervalId);
  };

  const updateTime = () => {

    endTime = new Date();
    const timeDiff = endTime - startTime;
    const seconds = Math.floor((timeDiff / 1000) % 60);
    const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
    setTime(`${minutes}:${seconds.toString().padStart(2, '0')}`);

  };

  return (
    <>
      <h3>Stopwatch</h3>
      <p>Time: {time} </p>
      <button onClick={stop}>Stop</button>
      <button onClick={start}>Start</button>
      <button onClick={() => {
        setTime("0:00");
        clearInterval(intervalId);
      }}>Reset</button>
    </>
  );
}

export default App;
