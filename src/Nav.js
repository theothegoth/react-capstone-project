import React from 'react';
import logo from './assets/Logo.svg'; // Import the logo image
import './Nav.css';

function Nav() {
  return (
<div className="header">
<div className="logo">
<img src={logo} alt="Little Lemon Logo" />
</div>
<nav className="navbar">
  <ul className="nav-list">
    <li className="nav-item"><a href="#home">Home</a></li>
    <li className="nav-item"><a href="#about">About</a></li>
    <li className="nav-item"><a href="#menu">Menu</a></li>
    <li className="nav-item"><a href="/booking">Reservations</a></li>
    <li className="nav-item"><a href="#orderonline">Order Online</a></li>
    <li className="nav-item"><a href="#login">Login</a></li>
  </ul>
</nav>
</div>
  );
}

export default Nav;
