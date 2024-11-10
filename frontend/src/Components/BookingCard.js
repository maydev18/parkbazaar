// Install styled-components by running `npm install styled-components`
// Import required libraries
import React from 'react';
import styled from 'styled-components';

// Styled component for the card
const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  font-family: Arial, sans-serif;
`;

// Title styling
const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 10px 0;
  color: #333;
`;

// Styled component for each information row
const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

// Label styling
const Label = styled.span`
  font-weight: bold;
  color: #555;
`;

// Value styling
const Value = styled.span`
  color: #333;
`;

// Helper function to format the date

// React functional component
const BookingCard = ({data}) => {
  return (
    <Card>
      <Title>Booking Info</Title>
      <InfoRow>
        <Label>Date:</Label>
        <Value>{new Date(data.date).toLocaleDateString('en-GB', {
    weekday: 'long', // "Monday"
    year: 'numeric', // "2024"
    month: 'long', // "November"
    day: 'numeric', // "11"
  })}</Value>
      </InfoRow>
      <InfoRow>
        <Label>Check-in:</Label>
        <Value>{data.checkIn}</Value>
      </InfoRow>
      <InfoRow>
        <Label>Check-out:</Label>
        <Value>{data.checkOut}</Value>
      </InfoRow>
      <InfoRow>
        <Label>Number Plate:</Label>
        <Value>{data.numberPlate}</Value>
      </InfoRow>
      <InfoRow>
        <Label>Phone:</Label>
        <Value>{data.phone}</Value>
      </InfoRow>
      <InfoRow>
        <Label>Name:</Label>
        <Value>{data.name}</Value>
      </InfoRow>
      <InfoRow>
        <Label>Park ID:</Label>
        <Value>{data.parkID}</Value>
      </InfoRow>
      <InfoRow>
        <Label>Email:</Label>
        <Value>{data.email}</Value>
      </InfoRow>
    </Card>
  );
};

export default BookingCard;
