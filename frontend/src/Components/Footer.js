import React from 'react';

const Footer = () => {
  const styles = {
    footerContainer: {
      width: "100%",
      backgroundColor: "#000000",
      color: "#fff",
      textAlign: "center",
      padding: "20px 0",
      position: "relative",
      bottom: "0",
      left: "0",
      right: "0",
    },
    footerContent: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
      flexWrap: "wrap",
    },
    footerLink: {
      color: "#fff",
      textDecoration: "none",
      fontSize: "16px",
      padding: "5px 10px",
      transition: "color 0.3s ease",
    },
    footerLinkHover: {
      color: "#f39c12",
    },
    footerText: {
      fontSize: "14px",
      color: "#bdc3c7",
      marginTop: "10px",
    },
    // Mobile-friendly design
    "@media (max-width: 768px)": {
      footerContainer: {
        padding: "15px 0",
      },
      footerLink: {
        fontSize: "14px",
      },
    },
  };

  return (
    <div style={styles.footerContainer}>
      <div style={styles.footerContent}>
        <a href="#" style={styles.footerLink}>Home</a>
        <a href="#" style={styles.footerLink}>About</a>
        <a href="#" style={styles.footerLink}>Services</a>
        <a href="#" style={styles.footerLink}>Contact</a>
      </div>
      <div style={styles.footerText}>
        <p>&copy; 2024 Park Bazaar. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
