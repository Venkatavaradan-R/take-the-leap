import { Plus } from 'lucide-react';
import { faqs, whatsappLink } from '../content';

export default function Faq() {
  return (
    <section className="section" id="faq">
      <div className="container faq-grid">
        <div>
          <span className="eyebrow reveal">Questions</span>
          <h2 className="reveal">
            Good to <em>know</em>
          </h2>
          <p className="lede reveal">
            Anything else? <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Ask on WhatsApp</a>. Priya
            replies personally.
          </p>
        </div>
        <div className="faq-list reveal">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>
                {f.q}
                <Plus size={20} aria-hidden="true" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
