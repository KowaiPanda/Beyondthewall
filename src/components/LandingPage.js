// components/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Assuming CSS file for styling

const LandingPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="landing-page">
      <div className="background-image">
        <div className="description">
          <p>
            Embark on a thrilling adventure, navigating a series of enigmatic puzzles and physical challenges. 
            Outwit rivals, decipher ancient ciphers, and uncover hidden clues to claim victory. 
            With cunning strategies and teamwork, conquer the mystical world and emerge triumphant in this immersive treasure hunt, 
            where wit and skill reign supreme
          </p>
          <button onClick={() => navigate('/login')}>Swear Your Oath</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
