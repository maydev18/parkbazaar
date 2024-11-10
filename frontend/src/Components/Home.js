import React, { useState } from "react";
import img from "../images/img.jpg";
import img1 from "../images/1.png";
import img3 from "../images/3.png";
import img2 from "../images/2.png";
import img6 from "../images/img6.png";
import img4 from "../images/img4.png";
import Nearby from "./Nearby";
import Form from "./Form";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleFindParkingClick = () => {
    navigate("/nearby");
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
        <button style={{ ...styles.button, ...styles.buttonHover }} onClick={handleFindParkingClick}>
  Find me a parking spot.
</button>
          <button style={{ ...styles.button, ...styles.buttonHover }} onClick={handleGiveParkingClick}>
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
    <div>
      <div style={styles.aboutUsContainer}>
        {/* Main Heading */}
        <div
          style={{
            display: "flex",
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically
            height: "20vh", // Full viewport height
            margin: 0, // Remove default margin
          }}
        >
          <h1
            style={{
              fontSize: "36px", // Adjust the font size
              fontWeight: "bold", // Make the text bold
              color: "#2C3E50", // Set a stylish color for the text
              textAlign: "center", // Center align the text
              textTransform: "uppercase", // Make the text uppercase
              letterSpacing: "3px", // Add space between the letters
              textShadow: "3px 3px 6px rgba(0, 0, 0, 0.2)", // Add a subtle text shadow
              background: "linear-gradient(to right, #ff7e5f, #feb47b)", // Add a gradient background to the text
              backgroundClip: "text", // Apply the gradient to the text itself
              padding: "20px", // Add padding around the text
              borderRadius: "10px", // Round the corners of the background
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", // Custom font
            }}
          >
            About Us
          </h1>
        </div>

        {/* Section 1: Image on the Left, Text on the Right */}
        <div style={{ ...styles.section, ...styles.leftImage }}>
          <div style={styles.imageBox}>
            <img src={img1} alt="Our Story" style={styles.image} />
          </div>
          <h3 style={styles.sectionTitle}>Our Story</h3>
        </div>

        {/* Section 2: Text on the Left, Image on the Right */}
        <div style={{ ...styles.section, ...styles.rightImage }}>
          <h3 style={styles.sectionTitle}>What We Do</h3>
          <div style={styles.imageBox}>
            <img src={img2} alt="What We Do" style={styles.image} />
          </div>
        </div>

        {/* Section 3: Image on the Left, Text on the Right */}
        <div style={{ ...styles.section, ...styles.leftImage }}>
          <div style={styles.imageBox}>
            <img src={img3} alt="Our Mission" style={styles.image} />
          </div>
          <h3 style={styles.sectionTitle}>Our Mission</h3>
        </div>
      </div>

      <Footer />
    </div>
  );
}

const styles = {
  backgroundContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundImage: `url(${img6})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  },
  overlayContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "3rem",
    width: "400px",
    height: "400px",
    padding: "2rem",
  },
  button: {
    backgroundColor: "#FF5733", // Bright color for the button to stand out
    color: "#fff", // White text for contrast
    fontSize: "18px", // Increase font size for better readability
    fontWeight: "bold", // Bold text for emphasis
    padding: "15px 30px", // Add padding for a larger, clickable area
    border: "none", // Remove border for a cleaner look
    borderRadius: "8px", // Round the corners for a modern feel
    cursor: "pointer", // Change cursor to indicate clickable element
    textTransform: "uppercase", // Uppercase text for a more professional look
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Soft shadow to make the button pop
    transition: "all 0.3s ease", // Smooth transition for hover effects
    margin: "10px", // Space between buttons
    position: "relative", // Ensures the button is correctly positioned if needed
    zIndex: "2", // Ensures buttons appear above the image
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", // Consistent font family
    minWidth: "350px", // Ensure buttons have the same minimum width
    height: "70px", // Set a fixed height for consistency
  },

  // Hover Effect
  buttonHover: {
    backgroundColor: "#FF6F61", // Darker shade when hovering
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)", // Slightly deeper shadow on hover
    transform: "scale(1.05)", // Slight scale effect for button on hover
  },
  aboutUsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: "50px 20px",
    backgroundColor: "#f9f9f9",
    gap: "40px",
  },
  mainHeading: {
    fontSize: "42px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "40px",
    color: "#333",
  },
  section: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    gap: "20px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  },
  imageBox: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    maxWidth: "500px",
    borderRadius: "8px",
  },
  sectionTitle: {
    flex: "1",
    textAlign: "center",
    fontSize: "36px",
    fontWeight: "bold",
    color: "#2C3E50",
    letterSpacing: "2px", // adds space between letters
    textTransform: "uppercase", // makes text uppercase
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", // adds a subtle shadow
    padding: "10px 20px",
    background: "linear-gradient(to right, #ff7e5f, #feb47b)", // adds a gradient background
    borderRadius: "10px",
    boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)", // soft shadow around the title
    margin: "0 auto", // centers the title horizontally
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", // custom font
  },
  leftImage: {
    flexDirection: "row",
  },
  rightImage: {
    flexDirection: "row-reverse",
  },
};

export default Home;
