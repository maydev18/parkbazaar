import React, { useEffect, useState } from 'react';
import ParkingCard from './ParkingCard';
import img7 from "../images/img7.png";

const Nearby = () => {
  const [parking , setParking] = useState([]);
  const [locationAllowed, setLocationAllowed] = useState(true);

  useEffect(() => {
    const requestLocation = () => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
              setLocationAllowed(true);
              const { latitude, longitude } = position.coords;
              const res = await fetch('http://localhost:8080/get-parkings' , {
                method : "post",
                body : JSON.stringify({
                  "latitude" : latitude,
                  "longitude" : longitude
                }),
                headers : {
                  "Content-type" : "application/json"
                }
              });
              const data = await res.json();
              setParking(data);
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
    <div style={styles.bg}>
      <h1 style={{ textAlign: 'center' }}>Available Parking Places</h1>
      {locationAllowed ? (
        <>
          {
            parking.map((park , index) => (
              <ParkingCard
                key={index}
                image="https://example.com/parking1.jpg"
                title= {park.title}
                description={park.description}
                price={park.price}
                capacity={park.capacity}
                address={park.fullAddress + ", " + park.city + ", " + park.state + ", " + park.landmark + ", " + park.pincode}
                owner = {park.phone}
                id={park._id}
              />
            ))
          }
        </>
      ) : (
        <p>Please enable location access to view nearby parking spots.</p>
      )}
    </div>
  );
}
const styles = {
  bg:{
  backgroundImage: `url(${img7})`, 
  backgroundSize: 'cover', 
  backgroundPosition: 'center', 
  padding: '20px',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
  },
};
export default Nearby;
