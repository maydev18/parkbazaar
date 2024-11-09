import React, { useState } from 'react';
import img from '../images/img.jpg';
import img1 from '../images/1.png';  
import img2 from '../images/2.png';  
import img6 from '../images/img6.png';
import img4 from '../images/img4.png';
import Nearby from './Nearby';
import Form from './Form';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const handleFindParkingClick = () => {
    navigate('/nearby'); 
  };
  const [isFormVisible, setIsFormVisible] = useState(false);
  const handleCloseForm = () => {
    setIsFormVisible(false);
  };
  const handleGiveParkingClick = () => {
    setIsFormVisible(true);
  };
  
  return (
    <div>
      <div style={styles.backgroundContainer}>
      <div style={styles.overlayContainer}>
        <button style={styles.button} onClick={handleFindParkingClick}>
          Find me a parking spot.
        </button>
        <button style={styles.button} onClick={handleGiveParkingClick}>
          Give my space as a parking spot.
        </button>
        {isFormVisible && <Form onClose={handleCloseForm} />}
      </div>
      </div>
      <AboutUs />
    </div>
  );
}

function AboutUs() {
  return (
    <div id="about" style={styles.aboutUsContainer}> 
      <h3 style={styles.aboutUsTitle}>About Us</h3>
      <div style={styles.imageContainer}>
        <div style={styles.imageBox}>
          <img src={img1} alt="Image 1" style={styles.image} />
        </div>
        <div style={styles.imageBox}>
          <img src={img2} alt="Image 2" style={styles.image} />
        </div>
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
    backgroundImage: `url(${img6})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  },
  overlayContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '3rem',
    width: '400px',
    height: '400px',
    padding: '2rem',
  },
  button: {
    padding: '0.8rem 1.5rem',
    fontSize: '1.1rem',
    cursor: 'pointer',
    //backgroundColor: '#000000',
    color: 'black',
    border: 'none',
    //boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.3s ease',
    //backgroundImage: 'linear-gradient(145deg, #000000, #333333)',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: '1px',
  },
  buttonHover: {
    backgroundColor: '#333333',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.5)',
    transform: 'scale(1.05)',
  },
  aboutUsContainer: {
    textAlign: 'center',
    backgroundColor: '#ffffff',
    padding: '2rem',
    marginTop: '-10px', 
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  aboutUsTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#333',
  },
  aboutUsText: {
    fontSize: '1rem',
    color: '#555',
    marginTop: '0.5rem',
  },
  
  // Image Container Styles
  imageContainer: {
    display: 'flex',
    justifyContent: 'space-between', // Space the images evenly
    marginTop: '2rem', // Add some space between the text and images
  },
  imageBox: {
    width: '45%', // Each image takes up 45% of the container width
    borderRadius: '8px',
    overflow: 'hidden', // To ensure images don't overflow the container
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover', // Ensure the image covers the entire box
  },

  '@media (max-width: 768px)': {
    overlayContainer: {
      padding: '1rem',
      gap: '0.5rem',
    },
    button: {
      fontSize: '0.9rem',
      padding: '0.6rem 1.2rem',
    },
    aboutUsContainer: {
      marginTop: '1rem',
      padding: '0.8rem',
    },
    aboutUsTitle: {
      fontSize: '1rem',
    },
    aboutUsText: {
      fontSize: '0.9rem',
    },
    imageContainer: {
      flexDirection: 'column', // Stack images vertically on small screens
      alignItems: 'center',
    },
    imageBox: {
      width: '80%', // Make the images smaller on mobile screens
      marginBottom: '1rem',
    },
  },
};

export default Home;
