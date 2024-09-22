import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const TimerContext = createContext();

// Timer Provider component
export const TimerProvider = ({ children }) => {
  const [time, setTime] = useState(2 * 60 * 60); // 2 hours in seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000); // decrement time every 1 second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <TimerContext.Provider value={{ time, setTime }}>
      {children}
    </TimerContext.Provider>
  );
};

// Custom hook to use the TimerContext
export const useTimer = () => useContext(TimerContext);
