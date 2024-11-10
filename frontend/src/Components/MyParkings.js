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
    <div>
      <h1>Your Parking Spots</h1>
      <div style={{display : "flex" , flexDirection : "row"}}>
        {parkings.map((park , index) =>
            <MyParkingCard item = {park} />
        )}
        </div>
    </div>
  );
}

export default MyParkings;