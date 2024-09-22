// components/MapPage.js
import React from 'react';
import './MapPage.css';

const MapPage = () => {
  return (
    <div className="map-page">
      <h2>Game of Thrones Map</h2>
      <div className="map-container">
        <img src="/map.jpg" alt="Game of Thrones Map" className="got-map" />
      </div>
    </div>
  );
};

export default MapPage;
