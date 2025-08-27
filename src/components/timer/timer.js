import { useState, useRef } from "react";
import "./timer.css";

export function Timer() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const interval = useRef(null);

  // Convert inputs to total seconds
  const getTotalSeconds = () => hour * 3600 + minute * 60 + second;

  const handleStart = () => {
    // Prevent multiple intervals
    if (interval.current) return;

    let totalSeconds = getTotalSeconds();

    interval.current = setInterval(() => {
      if (totalSeconds <= 0) {
        clearInterval(interval.current);
        interval.current = null;
        return;
      }

      totalSeconds -= 1;

      const h = Math.floor(totalSeconds / 3600);
      const m = Math.floor((totalSeconds % 3600) / 60);
      const s = totalSeconds % 60;

      setHour(h);
      setMinute(m);
      setSecond(s);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(interval.current);
    interval.current = null;
  };

  return (
    <div>
      <section className="timer">
        <input
          type="number"
          value={hour}
          onChange={(e) => setHour(Number(e.target.value))}
          name="hour"
          min="0"
        />
        <div>:</div>
        <input
          type="number"
          value={minute}
          onChange={(e) => setMinute(Number(e.target.value))}
          name="minute"
          min="0"
        />
        <div>:</div>
        <input
          type="number"
          value={second}
          onChange={(e) => setSecond(Number(e.target.value))}
          name="second"
          min="0"
        />
      </section>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
