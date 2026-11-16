import { Mail, MapPin, Phone } from 'lucide-react';
import { contact, whatsappLink } from '../content';
import WhatsAppIcon from './WhatsAppIcon';

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="cta-band reveal">
          <div className="cta-band-grid">
            <div>
              <span className="eyebrow">Get in touch</span>
              <h2>
                Prêt à <em>sauter le pas&nbsp;?</em>
              </h2>
              <p className="lede">
                “Sauter le pas” is French for taking the leap. Send a message with the student's grade and board,
                and Priya will get back to you about a trial lesson.
              </p>
              <div className="hero-ctas">
                <a className="btn btn-wa" href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon /> Message on WhatsApp
                </a>
                <a className="btn btn-outline-light" href={`tel:${contact.phoneE164}`}>
                  <Phone size={18} aria-hidden="true" /> Call
                </a>
              </div>
            </div>

            <div>
              <ul className="contact-list">
                <li>
                  <a href={`tel:${contact.phoneE164}`}>
                    <span className="ico">
                      <Phone size={20} aria-hidden="true" />
                    </span>
                    <span>
                      <small>Phone & WhatsApp</small>
                      <b>{contact.phoneDisplay}</b>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contact.email}`}>
                    <span className="ico">
                      <Mail size={20} aria-hidden="true" />
                    </span>
                    <span>
                      <small>Email</small>
                      <b>{contact.email}</b>
                    </span>
                  </a>
                </li>
                <li>
                  <div>
                    <span className="ico">
                      <MapPin size={20} aria-hidden="true" />
                    </span>
                    <span>
                      <small>Based in</small>
                      <b>{contact.location}</b>
                    </span>
                  </div>
                </li>
              </ul>
              <div className="chips" aria-label="Availability">
                {contact.availability.map((a) => (
                  <span key={a}>{a}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
