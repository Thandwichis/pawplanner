import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>Keeping Pets Safe,<br />One Walk at a Time</h1>
        <img src="/walk-illustration.png" alt="Dog Walk" className="illustration" />
        <button onClick={() => navigate('/home')} className="get-started-btn">
          Let’s Get Started! <span>➔</span>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
