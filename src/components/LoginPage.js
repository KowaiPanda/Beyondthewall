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

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async () => {
    e.preventDefault();

    const response = await fetch('https://treasurehunt-backend-nine.vercel.app/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
      mode: 'no-cors',
    });

    let data;
    try {
      data = await response.json();
    } catch (error) {
      console.error('Failed to parse response JSON:', error);
      return;
    }
    if (!response.ok) {
      // remove later
      console.log(data);
      return;
    }

    const token = data.token;
    localStorage.setItem('token', token);
    console.log('authentication successful - token:', token);
  }
  
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
        <input type="text" placeholder="Username" className="username-input" value = {username} onChange={e => setUsername(e.target.value)}/>
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="password-input"
            value = {password}
            onChange={e => setPassword(e.target.value)}
          />
          <button onClick={toggleShowPassword} className="show-password-button">
            {showPassword ? "Hide" : "Show Password"}
          </button>
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
