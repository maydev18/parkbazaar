import React, { useState } from 'react';
import '../ParkingCard.css';  
import Checkin from './Checkin';
import Car from '../images/car.jpg';

const ParkingCard = ({ title, price, capacity , address , description , owner , id}) => {
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
        <img src={Car} alt="Parking Place" />
      </div>
      <div className="parking-card-details">
        <h3 className="parking-card-title">{title}</h3>
        <div className="parking-card-availability">
          <p><strong>Description</strong> {description}</p>
          <p><strong>Price</strong> {price}</p>
          <p><strong>capacity</strong> {capacity}</p>
          <p><strong>Complete address</strong> {address}</p>
          <p><strong>Contact Owner :</strong> +91  {owner}</p>
        </div>
        <button onClick = {handleOpenForm} className="view-parking-btn">Book Parking</button>
        {isFormVisible && <Checkin onClose={handleCloseForm} parkID={id}/>}
      </div>
    </div>
  );
}

export default ParkingCard;
