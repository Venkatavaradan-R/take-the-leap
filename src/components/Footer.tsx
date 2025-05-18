import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Priya Raghuraman</h3>
            <p>French language educator with over 25 years of experience teaching IB, IGCSE, and other international curricula.</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Me</h3>
            <p>Email: raghuraman.priya@gmail.com</p>
            <p>Phone: +91 9945122664</p>
            <p>Location: Bengaluru, Karnataka</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Priya Raghuraman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 