// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import AvatarSelectionPage from './components/AvatarSelectionPage';
import MapPage from './components/MapPage';
import TimerPage from './components/TimerPage';
import Round from './components/Round';
import LeaderboardPage from './components/LeaderboardPage';
import { TimerProvider } from './components/TimerContext';
import { AvatarProvider } from './components/AvatarContext';
function App() {
  return (
    <TimerProvider>
    <AvatarProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/select-avatar" element={<AvatarSelectionPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/map" element={<MapPage />} /> 
        <Route path="/timer" element={<TimerPage/>}/>
        <Route path="/Round" element={<Round/>}/>
        <Route path="/leaderboard" element={<LeaderboardPage/>}/>
      </Routes>
    </Router>
    </AvatarProvider>
    </TimerProvider>
  );
}

export default App;