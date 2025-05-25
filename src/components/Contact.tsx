import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <p className="contact-subtitle">Start your French learning journey today</p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>Contact Information</h3>
              <div className="info-item">
                <span className="icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>raghuraman.priya@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">📱</span>
                <div>
                  <h4>Phone</h4>
                  <p>+91 9945122664</p>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Bengaluru, Karnataka</p>
                </div>
              </div>
            </div>

            <div className="availability-card">
              <h3>Availability</h3>
              <ul>
                <li>Weekday evenings</li>
                <li>Weekend sessions</li>
                <li>Online and in-person classes</li>
              </ul>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="coming-soon-card">
              <div className="coming-soon-icon">🚀</div>
              <h3>Online Contact Form</h3>
              <p className="coming-soon-title">Coming Soon!</p>
              <p className="coming-soon-description">
                We're working on an enhanced contact form to make it even easier for you to get in touch. 
                In the meantime, please feel free to reach out directly using the contact information provided.
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <span className="method-icon">📧</span>
                  <span>Email for quick responses</span>
                </div>
                <div className="contact-method">
                  <span className="method-icon">📱</span>
                  <span>Call for immediate assistance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 