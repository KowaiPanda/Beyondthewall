import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Round.css';
import emblem from './emblem.jpg'; // Image path based on your project structure

const Round = () => {
  const [clickCount, setClickCount] = useState(0);
  const location = useLocation();
  const carriedTime = location.state?.carriedTime || 2 * 60 * 60; // Default to 2 hours if undefined

  const [round1Time, setRound1Time] = useState(120); // 120 seconds = 2 minutes
  const [inputValue, setInputValue] = useState('');
  const [showInvisibleInput, setShowInvisibleInput] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [eventTime, setEventTime] = useState(carriedTime);

  // Timer for Round_1 page (MM:SS)
  useEffect(() => {
    if (round1Time > 0) {
      const round1Timer = setInterval(() => {
        setRound1Time(round1Time - 1);
      }, 1000);

      if (round1Time === 20) {
        setShowWarning(true); // Show the warning when timer hits 20 seconds
      }

      return () => clearInterval(round1Timer);
    }
  }, [round1Time]);

  // Timer for carriedTime from Timer.js (HH:MM:SS)
  useEffect(() => {
    if (eventTime > 0) {
      const eventTimer = setInterval(() => {
        setEventTime(eventTime - 1);
      }, 1000);

      return () => clearInterval(eventTimer);
    }
  }, [eventTime]);

  // Format function for Round_1 timer (MM:SS)
  const formatRound1Time = () => {
    const minutes = Math.floor(round1Time / 60);
    const seconds = round1Time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  // Format function for Main Event Timer (HH:MM:SS)
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
      {/* Image container moved below the submit button */}
      <div className="image-container">
  {[...Array(8)].map((_, index) => (
    <div
      key={index}
      className={`image-part part-${index + 1} ${clickCount > index ? 'visible' : ''}`}
    />
  ))}
</div>


      {/* Show download button after 8 clicks */}
      
      {clickCount === 8 && (
        <a href={emblem} download="emblem.jpg" className="download-button">
          Download Full Image
        </a>
      )}
    </div>
  );
};

export default Round;
