import React, { createContext, useState, useContext } from 'react';

// Create the Timer context
const TimerContext = createContext();

// Create a custom hook for easier access to TimerContext
export const useTimer = () => useContext(TimerContext);

// Create TimerProvider component that wraps your application and provides timer state
export const TimerProvider = ({ children }) => {
  const [time, setTime] = useState(2 * 60 * 60); // 2 hours in seconds
  const [round1Time, setRound1Time] = useState(120); // 2 minutes in seconds

  return (
    <TimerContext.Provider value={{ time, setTime, round1Time, setRound1Time }}>
      {children}
    </TimerContext.Provider>
  );
};
