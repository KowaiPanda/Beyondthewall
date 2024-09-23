import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the Timer context
const TimerContext = createContext();

// Create a custom hook for easier access to TimerContext
export const useTimer = () => useContext(TimerContext);

// Create TimerProvider component that wraps your application and provides timer state
export const TimerProvider = ({ children }) => {
  const [time, setTime] = useState(2 * 60 * 60); // 2 hours in seconds
  const [round1Time, setRound1Time] = useState(120); // 2 minutes in seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const round1IntervalId = setInterval(() => {
      setRound1Time((prevRound1Time) => (prevRound1Time > 0 ? prevRound1Time - 1 : 0));
    }, 1000);

    return () => clearInterval(round1IntervalId);
  }, []);

  return (
    <TimerContext.Provider value={{ time, setTime, round1Time, setRound1Time }}>
      {children}
    </TimerContext.Provider>
  );
};
