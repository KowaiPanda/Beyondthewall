import React, { useState } from 'react';
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

  // Navigate back function
  const handleBackClick = (e) => {
    e.preventDefault();  // Prevent default behavior of the anchor tag
    navigate(-1);  // Navigate to the previous page
  };

  return (
    <div className="login-page">
      <video autoPlay loop muted className="background-video">
        <source src={`${process.env.PUBLIC_URL}/Login_Vid.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Back Button as Image */}
      <a href="#" className="back-link" onClick={handleBackClick}>
        <img src={`${process.env.PUBLIC_URL}/arrow-back-vector-icon-direction-260nw-1638337234-removebg-preview.png`} alt="Back" className="back-image" />
      </a>

      <div className="container">
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
          <div className="show-password-checkbox">
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={toggleShowPassword}
          />
          <label htmlFor="showPassword">Show Password</label>
        </div>
        <div className="buttons">
          <button onClick={() => navigate('/select-avatar')} className="avatar-button">Select Avatar</button>
          <button onClick={() => navigate('/timer')} className="login-button">Begin Your Quest</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
