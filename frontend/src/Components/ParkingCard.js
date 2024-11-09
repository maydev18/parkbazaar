import React, { useState } from 'react';
import '../ParkingCard.css';  
import Checkin from './Checkin';


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

export default ParkingCard;
