import React from 'react';
import { Link } from 'react-router-dom'; 
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="athenas-portfolio">Athena's React Portfolio</Link>
      <ul>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;