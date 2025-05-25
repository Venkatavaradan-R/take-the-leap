import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              <li><button onClick={() => scrollToSection('home')} className="footer-link-button">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="footer-link-button">About</button></li>
              <li><button onClick={() => scrollToSection('programs')} className="footer-link-button">Programs</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="footer-link-button">Testimonials</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="footer-link-button">Contact</button></li>
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