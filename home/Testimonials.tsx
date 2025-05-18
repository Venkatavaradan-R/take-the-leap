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
    name: "Sarah Johnson",
    role: "IB Student",
    content: "Ms. Priya's teaching methods transformed my approach to French. Her expertise as an IB examiner gave me unique insights into exam preparation. I scored a 7 in French B SL!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "IGCSE Student",
    content: "The personalized attention and structured curriculum helped me build confidence in French. Ms. Priya's experience with international curricula is evident in her teaching.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Parent",
    content: "My daughter's French skills improved dramatically under Ms. Priya's guidance. Her ability to make complex concepts accessible is remarkable.",
    rating: 5
  },
  {
    name: "David Kumar",
    role: "IB Graduate",
    content: "Ms. Priya's deep understanding of the IB curriculum and her role as an examiner gave me a significant advantage. Her teaching goes beyond just language skills.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <h2>What Our Students Say</h2>
        <p className="testimonials-subtitle">Success stories from our learners</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-content">{testimonial.content}</p>
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