import React from 'react';
import img from '../img.jpg';

function BackgroundContainer() {
  return (
    <div style={styles.backgroundContainer}>
      <div style={styles.overlayContainer}>
        <button style={styles.button}>Find me a parking spot.</button>
        <button style={styles.button}>Give my space as a parking spot.</button>
      </div>
    </div>
  );
}

const styles = {
  backgroundContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${img})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black overlay with 50% opacity
    zIndex: 1,
  },
  overlayContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5rem',
    width: '400px',       
    height: '400px',      // Set a fixed height to make it square
    backgroundColor: '#bdefd1', // Semi-transparent background for overlay
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  button: {
  padding: '0.8rem 1.5rem',
  fontSize: '1.1rem',
  cursor: 'pointer',
  backgroundColor: '#000000', // Black background color
  color: 'white',
  border: 'none',
  borderRadius: '25px', // Rounded edges for a sleek look
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Soft shadow
  transition: 'all 0.3s ease',
  backgroundImage: 'linear-gradient(145deg, #000000, #333333)', // Gradient for depth (dark shades of black)
  textTransform: 'uppercase', // Uppercase for a professional look
  fontWeight: 'bold',
  letterSpacing: '1px',
},
buttonHover: {
  backgroundColor: '#333333', // Slightly lighter black on hover
  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.5)',
  transform: 'scale(1.05)',
}

,
  '@media (max-width: 768px)': {
    overlayContainer: {
      padding: '1rem',
      gap: '0.5rem',
    },
    button: {
      fontSize: '0.9rem',
      padding: '0.6rem 1.2rem',
    },
  },
};

export default BackgroundContainer;
