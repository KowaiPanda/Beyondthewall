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

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('https://treasurehunt-backend-nine.vercel.app/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      // remove later
      console.log(data);
      return;
    }

    
    const token = data.token;
    localStorage.setItem('token', token);
    navigate('/timer');
  }
  
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
        <input type="text" placeholder="Username" className="username-input" value={username}
          onChange={e => setUsername(e.target.value)} />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="password-input"
            value = {password}
            onChange={e => setPassword(e.target.value)}
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
          <button className="login-button" onClick={handleLogin}>Begin Your Quest</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
