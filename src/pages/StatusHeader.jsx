import React from 'react';
import './StatusHeader.css';

const StatusHeader = ({ status }) => {
  const isSafe = status === 'safe';
  return (
    <div className={`status-header ${isSafe ? 'safe' : 'unsafe'}`}>
      <div className="menu-icon">☰</div>
      <div className="status-label">{isSafe ? 'Safe' : 'Unsafe'}</div>
      <div className="icons">
        <span>🔔</span>
        <span>⚙️</span>
      </div>
    </div>
  );
};

export default StatusHeader;
