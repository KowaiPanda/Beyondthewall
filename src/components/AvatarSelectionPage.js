// components/AvatarSelectionPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AvatarSelectionPage.css';

const AvatarSelectionPage = () => {
  const navigate = useNavigate();
  
  const avatars = [
    { name: 'Jon Snow', img: 'JonSnow.png' },
    { name: 'Targaryen', img: 'DaenerysTargaryen.png' },
    { name: 'Alvar Spyre', img: 'alvarspyre.png' },
    { name: 'Brynden Rivers', img: 'BryndenRivers.png' }
  ];

  return (
    <div className="avatar-selection-page">
      <h2>Select Your Avatar</h2>
      <div className="avatar-cards">
        {avatars.map((avatar, index) => (
          <div key={index} className="avatar-card">
            <img src={avatar.img} alt={avatar.name} />
            <p>{avatar.name}</p>
          </div>
        ))}
      </div>
      <button onClick={() => navigate('/login')} className="back-button">Back</button>
    </div>
  );
};

export default AvatarSelectionPage;
