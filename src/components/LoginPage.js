import React, { useState } from 'react';  // Make sure useState is imported
import { useNavigate } from 'react-router-dom';
import { useAvatar } from './AvatarContext';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const { selectedAvatar } = useAvatar();

  // Define state for password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Define the toggle function inside the component
  const toggleShowPassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <div className="login-page">
      <video autoPlay loop muted className="background-video">
        <source src={`${process.env.PUBLIC_URL}/Login_Vid.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container">
        {/* Display the selected avatar at the top center */}
        {selectedAvatar && (
          <div className="selected-avatar-top">
            <img src={selectedAvatar.smallImg} alt={selectedAvatar.name} className="avatar-small-top" />
          </div>
        )}
        <h1>Enter the Realm</h1>
        <input type="text" placeholder="Username" className="username-input" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="password-input"
          />
          <button onClick={toggleShowPassword} className="show-password-button" >
            {showPassword ? "Hide" : "Show Password"}
          </button>
        <div className="buttons">
          <button onClick={() => navigate('/select-avatar')} className="avatar-button">Select Avatar</button>
          <button onClick={() => navigate('/timer')} className="login-button">Begin Your Quest</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
