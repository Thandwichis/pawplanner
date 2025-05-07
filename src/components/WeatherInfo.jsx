import React from 'react';

const WeatherInfo = ({ weather, safe }) => (
    <div>
      <div className={`safe-banner ${safe ? 'safe' : 'unsafe'}`}>
        {safe ? 'Safe to go outside!' : 'Unsafe to go outside!'}
      </div>
      <h2>Current Conditions:</h2>
      <ul>
        <li>🌡️ Temperature: {weather.temperature ?? 'N/A'} °C</li>
        <li>🔥 Surface Temp: {weather.surfaceTemperature ?? 'N/A'} °C</li>
        <li>☀️ UV Index: {weather.uvIndex ?? 'N/A'}</li>
        <li>🌬️ Air Quality: {weather.airQuality ?? 'N/A'}</li>
      </ul>
    </div>
  );
  
export default WeatherInfo;
