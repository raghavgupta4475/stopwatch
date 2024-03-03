import './App.css';
import React, { useState } from 'react';

let startTime;
let endTime;

function App() {

  const [time, setTime] = useState("0:00");
  const [isRunning, setIsRunning] = useState(false);

  const start = () => {
    setIsRunning(true);
    startTime = new Date();
  }


  const stop = () => {
    endTime = new Date();
    const timeDiff = endTime - startTime;
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    setTime(`${minutes}:${seconds}`);
    setIsRunning(false);
  }

  return (
    <>
      <h3>Stopwatch</h3>
      <p>{`Time: ${time}`}</p>
      {isRunning ? (
        <button onClick={stop}>Stop</button>
      ) : (
        <button onClick={start}>Start</button>
      )}
      <button onClick={() => setTime("0:00")}>Reset</button>
    </>
  );
}

export default App;
