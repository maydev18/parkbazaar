import React, { useEffect, useState } from 'react';
import MyParkingCard from './MyParkingCard';
import { useAuth0 } from '@auth0/auth0-react';


function MyParkings() {
    const [parkings , setParkings] = useState([]);
    const {user , isLoading} = useAuth0();
    useEffect(() => {
        const fetchparking = async () => {
            const res = await fetch("http://localhost:8080/get-my-parkings/" + user.email);
            const data = await res.json();
            console.log(data);
            setParkings(data);
        }
        if(user)fetchparking();
    } ,  [isLoading]) 
  return (
       <div style={{
  display: "flex",
  justifyContent: "center",  // Center horizontally
  alignItems: "center",      // Center vertically
  height: "20vh",           // Full viewport height
  margin: 0,                 // Remove default margin
}}>
  <h1 style={{
    fontSize: "36px",          // Adjust the font size
    fontWeight: "bold",        // Make the text bold
    color: "#2C3E50",          // Set a stylish color for the text
    textAlign: "center",       // Center align the text
    textTransform: "uppercase",// Make the text uppercase
    letterSpacing: "3px",      // Add space between the letters
    textShadow: "3px 3px 6px rgba(0, 0, 0, 0.2)", // Add a subtle text shadow
    background: "linear-gradient(to right, #ff7e5f, #feb47b)", // Add a gradient background to the text
    backgroundClip: "text",    // Apply the gradient to the text itself
    padding: "20px",           // Add padding around the text
    borderRadius: "10px",      // Round the corners of the background
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", // Custom font
  }}>
    Your Parking Spots
  </h1>
        {parkings.map((park , index) =>
            <MyParkingCard item = {park} />
        )}
    </div>
  );
}

export default MyParkings;