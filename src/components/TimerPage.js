import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TimerPage.css';
import { useTimer } from './TimerContext'; // Import the useTimer hook

function CountdownTimer() {
  const navigate = useNavigate();
  const { time, setTime } = useTimer(); // Access global timer state from the context

  // Start the 2-hour timer when the page is loaded
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [setTime]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsRemaining = seconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secondsRemaining).padStart(2, '0')}`;
  };

  return (
    <div className="timer-page">
      <div className="top-buttons">
        <button onClick={() => navigate('/map')} className="top-button1"></button>
        <button onClick={() => navigate('/leaderboard')} className="top-button2"></button>
      </div>
      <h1 className="Font">YOUR WATCH HAS NOW BEGUN</h1>
      <div className="content">
        <p className="Font">{formatTime(time)}</p>
        <button onClick={() => navigate('/Round', { state: { carriedTime: time } })} className="game">Start</button>
      </div>
    </div>
  );
}

export default CountdownTimer;
