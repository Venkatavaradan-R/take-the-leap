import React, { useState } from 'react';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  program: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      program: '',
      message: ''
    });
  };

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
                  <p>priya@example.com</p>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">📱</span>
                <div>
                  <h4>Phone</h4>
                  <p>+91 XXXXXXXXXX</p>
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
                <li>Flexible scheduling</li>
              </ul>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="program">Program Interest</label>
              <select
                id="program"
                name="program"
                value={formData.program}
                onChange={handleChange}
                required
              >
                <option value="">Select a program</option>
                <option value="one-on-one">One-on-One Coaching</option>
                <option value="group">Group Learning</option>
                <option value="both">Both Programs</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your learning goals"
                rows={4}
              />
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 