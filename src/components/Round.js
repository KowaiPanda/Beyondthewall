import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTimer } from './TimerContext'; // Import the useTimer hook
import './Round.css';
import emblem from './emblem.jpg'; // Image path based on your project structure

const Round = () => {
  const [clickCount, setClickCount] = useState(0);
  const location = useLocation();
  const { round1Time, setRound1Time } = useTimer(); // Use global round1Time
  const carriedTime = location.state?.carriedTime || 2 * 60 * 60; // Default to 2 hours if undefined
  const [inputValue, setInputValue] = useState('');
  const showInvisibleInput = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [eventTime, setEventTime] = useState(carriedTime);

  // Start the 2-minute timer when the Round page is loaded
  useEffect(() => {
    const round1IntervalId = setInterval(() => {
      setRound1Time((prevRound1Time) => (prevRound1Time > 0 ? prevRound1Time - 1 : 0));
    }, 1000);

    return () => clearInterval(round1IntervalId);
  }, [setRound1Time]);

  useEffect(() => {
    if (round1Time === 20) {
      setShowWarning(true); // Show the warning when timer hits 20 seconds
    }
  }, [round1Time]);

  useEffect(() => {
    if (eventTime > 0) {
      const eventTimer = setInterval(() => {
        setEventTime(eventTime - 1);
      }, 1000);

      return () => clearInterval(eventTimer);
    }
  }, [eventTime]);

  const formatRound1Time = () => {
    const minutes = Math.floor(round1Time / 60);
    const seconds = round1Time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const formatCarriedTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsRemaining = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secondsRemaining).padStart(2, '0')}`;
  };

  const handleSubmit = () => {
    if (clickCount < 8) {
      setClickCount(clickCount + 1);
    }
  };

  return (
    <div className="round-1-page">
      <div className="carried-timer">
        Main Event Timer: {formatCarriedTime(eventTime)}
      </div>
      <div className="round1-timer">
        {formatRound1Time()}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter your text"
        className="visible-input"
      />
      {showInvisibleInput && (
        <input
          type="text"
          value="You found the clue!"
          readOnly
          className="invisible-input"
        />
      )}
      <button onClick={handleSubmit} className="submit-button">Submit</button>

      {showWarning && (
        <div className="warning-message">Hurry up! Only 20 seconds left!</div>
      )}
      <div className="image-container">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className={`image-part part-${index + 1} ${clickCount > index ? 'visible' : ''}`}
          />
        ))}
      </div>

      {clickCount === 8 && (
        <a href={emblem} download="emblem.jpg" className="download-button">
          Download Full Image
        </a>
      )}
    </div>
  );
};

export default Round;
