import React, { useEffect, useState } from 'react';
import { fetchWeather } from '../services/weatherService';
import { fetchPetFriendlyLocations } from '../services/petfinderService';
import './Home.css';

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [safe, setSafe] = useState(true);
  const [devOverride, setDevOverride] = useState(null); // null = no override

  const [locations, setLocations] = useState([]);
  const [error, setError] = useState(null);
  const cToF = (celsius) => (celsius * 9) / 5 + 32;
  const fToC = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
  const isSafe = (temp) => temp <= 104; // 40°C
  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherData = await fetchWeather(41.09077, -81.211757);
        const values = weatherData?.data?.values;

        if (values) {
          setWeather(values);
          setSafe(values.surfaceTemperature > 40);
        } else {
          setError('Weather data unavailable.');
        }
      } catch (err) {
        console.error(err);
        setError('Too many requests – try again soon.');
      }

      try {
        const petData = await fetchPetFriendlyLocations("Kent, OH");
        if (petData && petData.locations) {
          setLocations(petData.locations);
        } else {
          setError("Could not load pet-friendly locations.");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load location data.");
      }
    };

    fetchData();
  }, []);

  return (
  <div className={`home-container ${(devOverride ?? safe) ? 'safe' : 'unsafe'}`}>
   <div className="top-bar">
        <div className="menu-icon">☰</div>
        <div className="status-text">{safe ? 'Safe' : 'Unsafe'}</div>
        <div className="icons">🔔 ⚙️</div>
      </div>
      <div className="dev-toggle">
        <button
          onClick={() => {
            setDevOverride((prev) =>
              prev === null ? !safe : prev === true ? false : null
            );
          }}
        >
          Dev: {devOverride === null ? "Live" : devOverride ? "Safe" : "Unsafe"}
        </button>
      </div>

      {error && (
        <div className="error-banner">
          {error}
        </div>
      )}

      <div className="banner">
        <h2>{(devOverride ?? safe) ? 'Great Day for a walk!' : 'Hot surfaces'}</h2>
        <p>
          {(devOverride ?? safe)
            ? 'Keep you and your pup hydrated! Here is a good route to see new things and stay shaded.'
            : 'We have rerouted your walk to stay under trees. Look after your pup’s paws and give them water to stay cool!'}
        </p>

        {weather && (
          <div className="temp-details">
            <p>
              🌡️ Air Temp: {weather.temperature.toFixed(1)}°C / {cToF(weather.temperature).toFixed(1)}°F
            </p>
            <p>
              🔥 Surface Temp: {weather.surfaceTemperature?.toFixed(1)}°C /{' '}
              {cToF(weather.surfaceTemperature).toFixed(1)}°F
            </p>
            {weather.surfaceTemperature > 40 && (
              <p className="warning-text">⚠️ Pavement too hot for paws! Use shaded routes.</p>
            )}
          </div>
        )}

      </div>

      <div className="content-wrapper">
        <div className="map-column">
          <img
            className="map-image"
            src={(devOverride ?? safe)
              ? '/map-safe.png' : '/map-unsafe.png'}
            alt="Map route"
          />
        </div>

        <div className="location-column">
          <h3>{(devOverride ?? safe) ? 'Recommended locations' : 'Rerouted locations'}</h3>
          {locations.map((loc, idx) => (
            <div key={idx} className="location-card">
              <span className="location-icon">📍</span>
              <div className="location-details">
                <strong>{loc.name}</strong>
                <p>{loc.features.join(' • ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;
