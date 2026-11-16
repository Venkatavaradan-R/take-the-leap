import { testimonials } from '../content';

function Featured() {
  const { quote, who, when } = testimonials.featured;
  // Emphasise the student's own capitalised "KNOWS how to teach".
  const [before, after] = quote.split('KNOWS how to teach');
  return (
    <figure className="featured-quote reveal">
      <div className="mark" aria-hidden="true">
        “
      </div>
      <blockquote>
        {before}
        <strong>knows how to teach</strong>
        {after}
      </blockquote>
      <figcaption className="cite">
        <b>{who}</b> · {when}
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow reveal">From her students</span>
        </div>
        <Featured />
        <div className="quotes">
          {testimonials.more.map((t, i) => (
            <figure className="quote-card reveal" key={i} style={{ ['--delay' as string]: `${(i % 2) * 100}ms` }}>
              <p>“{t.quote}”</p>
              <figcaption className="cite">
                <b>{t.who}</b> · {t.when}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
