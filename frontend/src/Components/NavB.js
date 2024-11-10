<<<<<<< HEAD
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink } from 'react-router-dom';
=======
import React from "react";
import { Link } from "react-scroll";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
>>>>>>> f449fe34e04aa8f04adc7461aaec6094f3cdf40f

function NavB() {
  const { loginWithPopup, user, isAuthenticated, logout } = useAuth0();
  
  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Park Bazaar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* Use NavLink from react-router-dom for route-based links */}
            {!isAuthenticated && (
              <Nav.Link onClick={() => loginWithPopup()}>Login</Nav.Link>
            )}
            {isAuthenticated && (
              <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
            )}
            {isAuthenticated && (
              <Nav.Link as={NavLink} to="/my-bookings">
                My Bookings
              </Nav.Link>
            )}
            {isAuthenticated && (
              <Nav.Link as={NavLink} to="/my-parkings">
                My Parkings
              </Nav.Link>
            )}

            {/* Display user's name if authenticated */}
            {isAuthenticated && (
              <p
                style={{
                  color: "white",
                  margin: -1,
                  fontSize: "24px", // Make the text bigger
                  fontWeight: "bold", // Optionally, make the text bold
                  position: "absolute", // Position it at the extreme right
                  right: "20px", // Adjust the distance from the right edge
                  top: "10px", // Adjust the vertical position from the top
                }}
              >
                Welcome, {user.name}.
              </p>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavB;
