// Install styled-components if you haven't already: npm install styled-components
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  color: #333;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 10px 0;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
`;

const Label = styled.span`
  font-weight: bold;
  color: #333;
`;

const Value = styled.span`
  color: #555;
`;

const Phone = styled.div`
  margin-top: 10px;
  font-size: 0.9rem;
  color: #555;
`;

const MyParkingCard = ({ item }) => {
  return (
    <CardContainer>
        <Card key={item._id}>
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
          <InfoRow>
            <Label>Price:</Label>
            <Value>₹{item.price}</Value>
          </InfoRow>
          <InfoRow>
            <Label>Capacity:</Label>
            <Value>{item.capacity} vehicles</Value>
          </InfoRow>
          <InfoRow>
            <Label>Location:</Label>
            <Value>{item.city}, {item.state}</Value>
          </InfoRow>
          <InfoRow>
            <Label>Address:</Label>
            <Value>{item.fullAddress}</Value>
          </InfoRow>
          <InfoRow>
            <Label>Landmark:</Label>
            <Value>{item.landmark}</Value>
          </InfoRow>
          <Phone>📞 {item.phone}</Phone>
        </Card>
    </CardContainer>
  );
};

export default MyParkingCard;
