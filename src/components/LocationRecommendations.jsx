import React from 'react';
import LocationCard from './LocationCard';

const LocationRecommendations = ({ locations }) => (
  <div>
    <h2>Recommended Locations:</h2>
    {locations.map((location, index) => (
      <LocationCard key={index} location={location} />
    ))}
  </div>
);

export default LocationRecommendations;
