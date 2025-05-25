import React from 'react';
import './Testimonials.css';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Student",
    role: "Class of 2021",
    content: "I want to thank you for all your help throughout IB. I loved our small class of French B SL and thank you for making all our classes so interesting and engaging. ",
    rating: 5
  },
  {
    name: "Student",
    role: "Class of 2021",
    content: "Thank you for guiding me throughout and for all your help, especially with the French orals.",
    rating: 5
  },  
  {
    name: "Student",
    role: "Class of 2021",
    content: "Our classes will truly stay with me and, since French is widely spoken in Canada, I hope to remain in touch with the language. ",
    rating: 5
  },
  {
    name: "Student",
    role: "Class of 2023",
    content: "You’re really a teacher who has been involved in our lives and KNOWS how to teach. I love your method and it is so effective and your classroom is such a safe space ☹️😊☺️ I hope you keep it up for wherever you teach and stay happy and healthy",
    rating: 5
  },
  {
    name: "Student",
    role: "Class of 2023",
    content: "Scored 62.5/62 on my college French test! Huge thanks to Priya ma'am – her skills and teaching are why I'm doing so well.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <h2>What Our Students Say</h2>
        <p className="testimonials-subtitle">Success stories from our French learners</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 