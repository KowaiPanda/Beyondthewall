// LoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAvatar } from './AvatarContext';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const { selectedAvatar } = useAvatar();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async () => {
    const response = await fetch('https://treasurehunt-backend-nine.vercel.app/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
      mode: 'cors',
    });

    if (!response.ok) {
      // remove later
      console.log(response);
      return;
    }
    const data = await response.json();

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
        <input type="text" placeholder="Username" className="username-input" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" className="password-input" value={password} onChange={e => setPassword(e.target.password)} />
        <div className="buttons">
          <button onClick={() => navigate('/select-avatar')} className="avatar-button">Select Avatar</button>
          <button className="login-button" onClick={handleLogin}>Begin Your Quest</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
