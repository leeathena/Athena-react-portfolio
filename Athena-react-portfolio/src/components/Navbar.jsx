import React from 'react';
import { Link } from 'react-router-dom'; 
import "../styles/Navbar.css";
import athenaIcon from "/Athena-icon.png"; 

function Navbar() {
  return (
    <nav className="navbar">
      {/* <Link to="/" className="athenas-portfolio">Athena's React Portfolio</Link> */}

      <a href="/">
          <img className="Athena-icon" src={athenaIcon} alt="Athena-icon" /> 
        </a>
      <img href="./public/Athena-icon.png" />
      <ul>
        <li><Link to="/resume">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;