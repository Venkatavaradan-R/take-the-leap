import { steps } from '../content';

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow reveal">How it works</span>
          <h2 className="reveal">
            Getting started is <em>simple</em>
          </h2>
        </div>
        <ol className="steps">
          {steps.map((s, i) => (
            <li className="step reveal" key={s.title} style={{ ['--delay' as string]: `${i * 100}ms` }}>
              <span className="n" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
