import React from 'react';
import logo from './assets/Logo.svg'; // Import the logo image
import Nav from './Nav'; // Import the Nav component

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" /> {/* Use the imported logo */}
      <h1>Little Lemon</h1>
      <Nav /> {/* Include the Nav component */}
    </header>
  );
}

export default Header;