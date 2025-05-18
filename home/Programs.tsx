import React from 'react';
import './Programs.css';

interface ProgramFeature {
  title: string;
  description: string;
}

interface Program {
  type: string;
  title: string;
  description: string;
  features: ProgramFeature[];
  price: string;
  duration: string;
  recommended: boolean;
}

const programs: Program[] = [
  {
    type: "individual",
    title: "One-on-One Coaching",
    description: "Personalized attention and customized learning path for maximum progress",
    features: [
      {
        title: "Customized Curriculum",
        description: "Tailored learning plan based on your goals and current level"
      },
      {
        title: "Flexible Scheduling",
        description: "Choose your preferred time slots for maximum convenience"
      },
      {
        title: "Intensive Practice",
        description: "Focused attention on your specific areas of improvement"
      },
      {
        title: "Regular Progress Tracking",
        description: "Detailed feedback and progress reports after each session"
      }
    ],
    price: "₹2,500",
    duration: "per session",
    recommended: true
  },
  {
    type: "group",
    title: "Group Learning",
    description: "Interactive group sessions for collaborative learning and peer support",
    features: [
      {
        title: "Peer Learning",
        description: "Learn from others' questions and experiences"
      },
      {
        title: "Structured Curriculum",
        description: "Comprehensive coverage of IB and IGCSE syllabus"
      },
      {
        title: "Regular Practice",
        description: "Weekly sessions with consistent progress tracking"
      },
      {
        title: "Group Activities",
        description: "Interactive exercises and role-plays for practical learning"
      }
    ],
    price: "₹1,500",
    duration: "per session",
    recommended: false
  }
];

const Programs: React.FC = () => {
  return (
    <section id="programs" className="programs">
      <div className="programs-container">
        <h2>Our Learning Programs</h2>
        <p className="programs-subtitle">Choose the learning style that best suits your needs</p>

        <div className="programs-grid">
          {programs.map((program, index) => (
            <div key={index} className={`program-card ${program.recommended ? 'recommended' : ''}`}>
              {program.recommended && <div className="recommended-badge">Most Popular</div>}
              <div className="program-header">
                <h3>{program.title}</h3>
                <p className="program-description">{program.description}</p>
              </div>
              
              <div className="program-features">
                {program.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="program-pricing">
                <div className="price">
                  <span className="amount">{program.price}</span>
                  <span className="duration">/{program.duration}</span>
                </div>
                <button className="cta-button">Get Started</button>
              </div>
            </div>
          ))}
        </div>

        <div className="programs-note">
          <p>* All programs include access to study materials and practice resources</p>
          <p>* Custom packages available for long-term commitments</p>
        </div>
      </div>
    </section>
  );
};

export default Programs; 