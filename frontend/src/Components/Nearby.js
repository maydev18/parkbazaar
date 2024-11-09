import React, { useEffect, useState } from 'react';
import Checkin from './Checkin';

const Nearby = () => {
    const ParkingCard = ({ image, name, twoWheelers, fourWheelers }) => {
        const [isFormVisible, setIsFormVisible] = useState(false);
        const handleCloseForm = () => {
          setIsFormVisible(false);
        };
        const handleOpenForm = () => {
          setIsFormVisible(true);
        };
      return (
        <div className="parking-card">
          <div className="parking-card-image">
            <img src={image} alt="Parking Place" />
          </div>
          <div className="parking-card-details">
            <h3 className="parking-card-title">{name}</h3>
            <div className="parking-card-availability">
              <p><strong>Two-wheelers available:</strong> {twoWheelers}</p>
              <p><strong>Four-wheelers available:</strong> {fourWheelers}</p>
            </div>
            <button onClick = {handleOpenForm} className="view-parking-btn">View Parking</button>
            {isFormVisible && <Checkin onClose={handleCloseForm} />}
          </div>
        </div>
      );
    }
  const [locationAllowed, setLocationAllowed] = useState(false);

  useEffect(() => {
    const requestLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
              setLocationAllowed(true);
              const { latitude, longitude } = position.coords;
              localStorage.setItem('userLocation', JSON.stringify({ latitude, longitude }));
    
              console.log('Location saved:', { latitude, longitude });
            },
        (error) => {
          alert("Location permission is required to display nearby parking places. Please allow location access.");
          requestLocation();
        }
      );
    };
    requestLocation();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Available Parking Places</h1>
      {locationAllowed ? (
        <>
          <ParkingCard
            image="https://example.com/parking1.jpg"
            name="City Center Parking"
            twoWheelers="10"
            fourWheelers="5"
          />
          <ParkingCard
            image="https://example.com/parking2.jpg"
            name="Downtown Parking"
            twoWheelers="15"
            fourWheelers="8"
          />
        </>
      ) : (
        <p>Please enable location access to view nearby parking spots.</p>
      )}
    </div>
  );
}

export default Nearby;
