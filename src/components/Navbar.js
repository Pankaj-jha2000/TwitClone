import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { FaTwitter } from 'react-icons/fa';

const NavbarComponent = () => (
  <Navbar className="navbar" fixed="top">
    <Container>
      <Navbar.Brand href="#" className="navbar-brand">
        <FaTwitter className="twitter-icon" /> Twittify
      </Navbar.Brand>
    </Container>
  </Navbar>
);

export default NavbarComponent;
