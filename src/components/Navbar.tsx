import React from 'react';
import logo from '/src/assets/logo.png'
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
        <div className='logo-container'>
            <img src={logo} className='logo'/>
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