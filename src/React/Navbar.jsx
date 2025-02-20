import React, { useState } from 'react';
import './Navbar.css'; // Optional: For styling
import { Link, } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/"><span>L</span>DRAGO GYM</a>
      </div>
      <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <Link to="/">HOME</Link>
        <Link to="/Services">SERVICES</Link>
        <Link to="/About">ABOUT </Link>
        <Link to="/Review">REVIEWS</Link>
        <Link to="/Contact">JOIN US</Link>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
