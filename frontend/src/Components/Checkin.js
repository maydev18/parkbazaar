import React, { useState } from 'react';
import '../ParkingCard.css';  




function Checkin({onClose}) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    pricePerHour: 0, 
    capacity: 0, 
    address: '',
    phone: '',
    pincode: '',
    landmark: '',
    state: '',
    city: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };
  const handleClose = (e) => {
    e.preventDefault(); 
    if (Object.values(formData).some(value => value !== '' && value !== 0)) {
      if (window.confirm('Are you sure you want to close? Any unsaved changes will be lost.')) {
        onClose();
      }
    } else {
      onClose();
    }
  };
  return (
    <div style={styles.overlay}>
      <div style={styles.container}>
        
      <h2 style={styles.title}>Book a Parking Spot</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
        <button onClick={handleClose}  style={styles.closeButton}>×</button>
          <div style={styles.field}>
            <label style={styles.label}>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Space Needed</label>
            <input
              type="text"
              name="space"
              value={formData.space}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Check-in Time</label>
            <input
              type="time"
              name="checkinTime"
              value={formData.checkinTime}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Check-out Time</label>
            <input
              type="time"
              name="checkoutTime"
              value={formData.checkoutTime}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Vehicle Number</label>
            <input
              type="text"
              name="vehicleNumber"
              value={formData.vehicleNumber}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dimmed background
    backdropFilter: 'blur(8px)', // Blur effect
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start', // Align at the top of the screen
    zIndex: 1000,
  },
  container: {
    backgroundColor: '#fff',
    padding: '2rem',
    maxWidth: '600px',
    width: '90%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    overflowY: 'auto',
    marginTop: '60px', // Adjusting the form's position below the navbar
    maxHeight: '80vh', // Make sure the form is scrollable if content overflows
  },
  closeButton: {
    position: 'absolute',
    top: '60px',
    right: '370px',
    fontSize: '1.5rem',
    background: 'none',
    border: 'none',
    color: 'red',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  form: {
    width: '100%',
  },
  field: {
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#555',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box',
  },
  textarea: {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box',
    resize: 'vertical',
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1.1rem',
    color: '#fff',
    backgroundColor: '#4CAF50',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    transition: 'background-color 0.3s ease',
  },
  '@media (max-width: 768px)': {
    container: {
      padding: '1rem',
      width: '90%',
    },
    title: {
      fontSize: '1.2rem',
    },
    button: {
      fontSize: '1rem',
      padding: '0.5rem',
    },
  },
};

export default Checkin;