'use client';
import React, { useState } from 'react';
import '../styles/header.css';


export default function Navbar() {
  // State to toggle the navbar
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className='header'>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <a href="#hero" className='logo'>
          <span>Zeenat Yameen</span>
        </a>

        {/* Menu icon, will trigger toggle */}
        <i 
          className={`bx bx-menu ${isMenuOpen ? 'open' : ''}`} 
          id="menu-icon" 
          onClick={toggleMenu}
        ></i>

        {/* Navbar links */}
        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          <a href="#hero" className='active'>Home</a>
          <a href="#education">Education</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </div>
  );
}
