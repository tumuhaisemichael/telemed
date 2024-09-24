import React from 'react';
import styled from 'styled-components';
import backgroundImage from './back.jfif'; // Add your background image here

const Container = styled.div`
  text-align: center;
  padding: 20px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh; /* Set height to fill the entire viewport */
  margin: 0; /* Remove default margin */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff; /* Text color */
`;

const Home = () => {
  return (
    <Container>
      <h2>Welcome to Telemedicine App!</h2>
      <p>Connect with doctors remotely.</p>
      <p>Book an appointment with our experienced doctors and get remote consultations.</p>
    </Container>
  );
};

export default Home;
