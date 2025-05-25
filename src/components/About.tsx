import React from 'react';
import './About.css';

interface Experience {
  role: string;
  institution: string;
  period: string;
  location: string;
  highlights: string[];
}

interface Qualification {
  degree: string;
  institution: string;
  year: string;
}

const experiences: Experience[] = [
  {
    role: "Head of Department, Language Acquisition | Subject Lead, French | TOK Teacher",
    institution: "Greenwood High International School",
    period: "Jul '19 – Present",
    location: "Bengaluru, KA",
    highlights: [
      "K-12 International Education Leadership",
      "Taught French (IGCSE, IBDP - Ab Initio & B SL) and Theory of Knowledge",
      "Led French curriculum planning and assessment across school levels",
      "Integrated technology tools such as Edmodo, Kahoot, and Padlet into the classroom"
    ]
  },
  {
    role: "French and TOK Teacher | TOK Coordinator",
    institution: "Indus International School",
    period: "Nov '12 – Jun '19",
    location: "Bengaluru, KA",
    highlights: [
      "IBDP, MYP & Cambridge Curriculum Instruction",
      "Delivered French curriculum for IBDP (B SL and Ab Initio), IGCSE & MYP",
      "Coordinated TOK curriculum and assessments for Grade 11 IBDP",
      "Mentored students in MUN and culinary clubs"
    ]
  }
];

const qualifications: Qualification[] = [
  {
    degree: "MA in French Studies (Translation & Interpretation)",
    institution: "Jawaharlal Nehru University",
    year: "1992-1994"
  },
  {
    degree: "Teacher Training in French",
    institution: "Alliance Française de Delhi",
    year: "1997"
  },
  {
    degree: "Diplôme supérieur",
    institution: "Alliance Française de Delhi",
    year: "1992-1993"
  },
  {
    degree: "B.A. (Hons.) Economics",
    institution: "University of Delhi",
    year: "1990"
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>
        <p className="about-subtitle">Dedicated French educator with over 25 years of experience in international education</p>

        <div className="about-content">
          <div className="about-main">
            <div className="experience-section">
              <h3>Professional Experience</h3>
              {experiences.map((exp, index) => (
                <div key={index} className="experience-card">
                  <div className="experience-header">
                    <h4>{exp.role}</h4>
                  </div>
                  <ul className="experience-highlights">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="qualifications-section">
              <h3>Education & Qualifications</h3>
              <div className="qualifications-grid">
                {qualifications.map((qual, index) => (
                  <div key={index} className="qualification-card">
                    <h4>{qual.degree}</h4>
                    <p className="institution">{qual.institution}</p>
                    <p className="year">{qual.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-sidebar">
            <div className="expertise-card">
              <h3>Areas of Expertise</h3>
              <ul>
                <li>IB & IGCSE Curriculum Design</li>
                <li>French Language Instruction</li>
                <li>Theory of Knowledge (TOK)</li>
                <li>Exam Preparation & Assessment</li>
                <li>Technology Integration in Education</li>
              </ul>
            </div>

            <div className="ib-roles-card">
              <h3>IB Examiner Roles</h3>
              <ul>
                <li>Assistant Examiner, TOK essay and presentation moderator</li>
                <li>Team Leader / Senior Examiner, French B SL Writing</li>
                <li>IA Moderator, French B SL Individual Oral</li>
                <li>Assistant Examiner, French B SL Listening</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 