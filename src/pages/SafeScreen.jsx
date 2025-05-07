import React from 'react';
import StatusHeader from '../components/StatusHeader';
import RouteMap from '../components/RouteMap';
import MessageBanner from '../components/MessageBanner';
import LocationCard from '../components/LocationCard';
import './ScreenStyles.css';

const SafeScreen = () => {
  return (
    <div className="screen">
      <StatusHeader status="safe" />
      <MessageBanner
        title="Great Day for a walk!"
        subtitle="Keep you and your pup hydrated! Here is a good route to see new things and stay shaded."
      />
      <RouteMap variant="safe" />
      <div className="locations">
        <LocationCard name="Shady Trail" />
        <LocationCard name="Water Stop Park" />
      </div>
    </div>
  );
};

export default SafeScreen;
