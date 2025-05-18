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
    title: "One-on-One French Coaching",
    description: "Personalized attention and customized learning path for maximum progress in French language acquisition",
    features: [
      {
        title: "Customized Curriculum",
        description: "Tailored learning plan based on your goals and current French proficiency level"
      },
      {
        title: "IB/IGCSE Preparation",
        description: "Expert guidance for success in IB French B or IGCSE French examinations"
      },
      {
        title: "Authentic Materials",
        description: "Learn with real-world French content for practical language acquisition"
      },
      {
        title: "Regular Progress Tracking",
        description: "Detailed feedback and assessment using official IB/IGCSE criteria"
      }
    ],
    price: "₹2,500",
    duration: "per session",
    recommended: true
  },
  {
    type: "group",
    title: "Small Group French Classes",
    description: "Interactive group sessions for collaborative learning with 3-5 students at similar proficiency levels",
    features: [
      {
        title: "Peer Learning",
        description: "Practice conversational French with peers and learn from others' questions"
      },
      {
        title: "Structured Curriculum",
        description: "Comprehensive coverage of IB and IGCSE French syllabus"
      },
      {
        title: "Cultural Immersion",
        description: "Engage with French culture, history, and current events"
      },
      {
        title: "Regular Practice",
        description: "Weekly sessions with consistent progress assessments"
      }
    ],
    price: "₹1,500",
    duration: "per session",
    recommended: false
  },
  {
    type: "test-prep",
    title: "IB/IGCSE Exam Preparation",
    description: "Intensive preparation specifically designed for excelling in French examinations",
    features: [
      {
        title: "Examiner Insights",
        description: "Benefit from exclusive insights as an experienced IB examiner"
      },
      {
        title: "Past Paper Practice",
        description: "Work through previous examination papers with expert guidance"
      },
      {
        title: "Assessment Techniques",
        description: "Learn key strategies for each section of the French examination"
      },
      {
        title: "Mock Examinations",
        description: "Regular full-length practice tests with detailed feedback"
      }
    ],
    price: "₹2,000",
    duration: "per session",
    recommended: false
  }
];

const Programs: React.FC = () => {
  return (
    <section id="programs" className="programs">
      <div className="programs-container">
        <h2>French Learning Programs</h2>
        <p className="programs-subtitle">Choose the learning style that best suits your needs and goals</p>

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
                <button className="cta-button">Enroll Now</button>
              </div>
            </div>
          ))}
        </div>

        <div className="programs-note">
          <p>* All programs include access to specially curated French learning materials and resources</p>
          <p>* Custom packages available for long-term commitments</p>
        </div>
      </div>
    </section>
  );
};

export default Programs; 