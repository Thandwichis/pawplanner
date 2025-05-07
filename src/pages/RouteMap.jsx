import React from 'react';
import './RouteMap.css';

const RouteMap = ({ variant }) => (
  <div className="route-map">
    <img
      src={variant === 'safe' ? '/map-safe.png' : '/map-unsafe.png'}
      alt="Route Map"
      className="map-image"
    />
  </div>
);

export default RouteMap;
