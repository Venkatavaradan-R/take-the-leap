import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToPrograms = () => {
    const element = document.getElementById('programs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Master French with Expert Guidance</h1>
        <p>Learn from an experienced IB examiner and curriculum designer with over 25 years of teaching expertise</p>
        <div className="hero-features">
          <div className="feature">
            <span className="feature-icon">🎓</span>
            <span>IB & IGCSE Curriculum</span>
          </div>
          <div className="feature">
            <span className="feature-icon">👨‍🏫</span>
            <span>Senior IB Examiner</span>
          </div>
          <div className="feature">
            <span className="feature-icon">📚</span>
            <span>Personalized Learning</span>
          </div>
        </div>
        <button className="cta-button" onClick={scrollToPrograms}>Start Learning Today</button>
      </div>
    </section>
  );
};

export default Hero; 