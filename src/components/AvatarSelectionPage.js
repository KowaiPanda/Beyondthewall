// AvatarSelectionPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAvatar } from './AvatarContext';
import './AvatarSelectionPage.css';

const AvatarSelectionPage = () => {
  const navigate = useNavigate();
  const { setSelectedAvatar } = useAvatar();

  const avatars = [
    { name: 'Jon Snow', img: 'JonSnow.png',smallImg:'JonSnowTOP.png' },
    { name: 'Targaryen', img: 'DaenerysTargaryen.png',smallImg:'DaenerysTargaryenTOP.png' },
    { name: 'Alvar Spyre', img: 'alvarspyre.png',smallImg:'alvarspyreTop.png' },
    { name: 'Brynden Rivers', img: 'BryndenRivers.png',smallImg:'BryndenRiversTop.png' },
    { name: 'Jaime Lannister', img: 'Jaime.jpg',smallImg:'jaimeTOP.jpg' },
    { name: 'Wilding Tormund', img: 'tormund.jpg',smallImg:'tormundTOP.jpg' }

  ];

  const selectAvatar = (avatar) => {
    setSelectedAvatar(avatar);
  };

  return (
    <div className="avatar-selection-page">
      <h2>Select Your Avatar</h2>
      <div className="avatar-cards">
        {avatars.map((avatar, index) => (
          <div key={index} className="avatar-card" onClick={() => selectAvatar(avatar)}>
            <img src={avatar.img} alt={avatar.name} />
            <p>{avatar.name}</p>
          </div>
        ))}
      </div>
      <button onClick={() => navigate('/login')} className="back-button">select</button>
    </div>
  );
};

export default AvatarSelectionPage;