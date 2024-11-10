import React from 'react';
import { Link } from 'react-scroll';  
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink } from 'react-router-dom';

function NavB() {
  const { loginWithPopup, user, isAuthenticated, logout } = useAuth0();

  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">ParkBazaar</Navbar.Brand>
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
            {isAuthenticated && <Nav.Link as={NavLink} to="/my-bookings">My Bookings</Nav.Link>}
            {isAuthenticated && <Nav.Link as={NavLink} to="/my-parkings">My Parkings</Nav.Link>}
            
            {/* Display user's name if authenticated */}
            {isAuthenticated && (
              <p style={{ color: "white", margin: 0 }}>Welcome {user.name}</p>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavB;
