// Install styled-components by running `npm install styled-components`
// Import required libraries
import React, { useEffect, useState } from "react";
import BookingCard from "./BookingCard";
import { useAuth0 } from "@auth0/auth0-react";
// React functional component
const MyBookings = () => {
<<<<<<< HEAD
    const [bookings, setBookings] = useState([]);
    const {user , isLoading} = useAuth0();
    useEffect(() => {
        const fetchBooking = async () => {
            const data = await fetch("http://localhost:8080/get-bookings/" + user.email);
            const res = await data.json();
            console.log(res);
            setBookings(res);
        }
        if(user){
            fetchBooking();
        }
        
    }, [isLoading])
    return (
        <>
        <h1>My Bookings</h1>
        <div style={{display : "flex" , flexDirection : "row"}}>
            {bookings.map((booking , index) => (
                <BookingCard data={booking}/>
            ))}
        </div>
        </>
    );
=======
  const [bookings, setBookings] = useState([]);
  const { user, isLoading } = useAuth0();
  useEffect(() => {
    const fetchBooking = async () => {
      const data = await fetch(
        "http://localhost:8080/get-bookings/" + user.email
      );
      const res = await data.json();
      console.log(res);
      setBookings(res);
    };
    if (user) {
      fetchBooking();
    }
  }, [isLoading]);
  return (
    <>
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
    My Bookings
  </h1>
</div>


      {bookings.map((booking, index) => (
        <BookingCard data={booking} />
      ))}
    </>
  );
>>>>>>> f449fe34e04aa8f04adc7461aaec6094f3cdf40f
};

export default MyBookings;
