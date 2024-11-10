// Install styled-components by running `npm install styled-components`
// Import required libraries
import React, { useEffect, useState } from 'react';
import BookingCard from './BookingCard';
import { useAuth0 } from '@auth0/auth0-react';
// React functional component
const MyBookings = () => {
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
        {bookings.map((booking , index) => (
            <BookingCard data={booking}/>
        ))}
        </>
    );
};

export default MyBookings;
