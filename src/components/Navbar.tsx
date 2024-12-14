import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
        <div className='logo-container'>
            <img src='src/assets/logo.png' className='logo'/>
        </div>
      <ul>
        <li><a href="#banner">Home</a></li>
        <li><a href="#about-us">About Us</a></li>
        <li><a href="#announcements">Announcements</a></li>
        <li><a href="#social-links">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar