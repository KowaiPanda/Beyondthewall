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
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/select-avatar" element={<AvatarSelectionPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/timer" element={<TimerPage/>}/>
        <Route path="/Round" element={<Round/>}/>
        <Route path="/leaderboard" element={<LeaderboardPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;