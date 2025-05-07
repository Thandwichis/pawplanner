import React from 'react';

const LocationCard = ({ location }) => (
  <div className="card">
    <h3>{location.name}</h3>
    <p>📍 Type: {location.type}</p>
    <p>✅ Features: {location.features.join(', ')}</p>
    <p>⭐ Rating: {location.rating}</p>
  </div>
);

export default LocationCard;
