import React from 'react';
import logo from './assets/Logo.svg'; // Import the logo image

function Footer() {
    return (
        <footer style={{ backgroundColor: "#333", color: "#fff", padding: "20px" }}>
            <div className="footer-content">
                <div className="logo">
                    <img src={logo} alt="Little Lemon Logo" />
                </div>
                <div className="doormat-navigation">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#reservations">Reservations</a></li>
                        <li><a href="#orderonline">Order Online</a></li>
                        <li><a href="#login">Login</a></li>
                    </ul>
                </div>
                <div className="contact-details">
                    <p>123 Main Street, City, State, ZIP</p>
                    <p>Email: info@littlelemon.com</p>
                    <p>Phone: 123-456-7890</p>
                </div>
                <div className="social-media">
                    <a href="https://www.facebook.com/littlelemon" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com/littlelemon" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://www.instagram.com/littlelemon/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
