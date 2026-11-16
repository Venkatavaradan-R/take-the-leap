import { about } from '../content';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-copy">
            <span className="eyebrow reveal">Meet your teacher</span>
            <h2 className="reveal">
              Twenty-five years of French, <em>one student</em> at a time.
            </h2>
            {about.intro.map((p, i) => (
              <p className="reveal" key={i}>
                {p}
              </p>
            ))}
            <p className="signature reveal">— Priya Raghuraman</p>
          </div>

          <aside className="examiner-card reveal" style={{ ['--delay' as string]: '120ms' }}>
            <span className="eyebrow">Inside the exam room</span>
            <h3>An examiner on your side</h3>
            <p>
              Priya marks the same IB papers her students sit. Her lessons are based on what examiners actually
              look for.
            </p>
            <ul className="roles">
              {about.examinerRoles.map((r) => (
                <li key={r.role + r.detail}>
                  <b>{r.role}</b>
                  <span>{r.detail}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="timeline-wrap">
          <div className="reveal">
            <h3>Teaching</h3>
            <ol className="timeline">
              {about.experience.map((e) => (
                <li key={e.place}>
                  <span className="when">{e.period}</span>
                  <span className="what">{e.title}</span>
                  <span className="where">{e.place}</span>
                  <p className="detail">{e.detail}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="reveal" style={{ ['--delay' as string]: '120ms' }}>
            <h3>Training</h3>
            <ol className="timeline">
              {about.education.map((e) => (
                <li key={e.title}>
                  <span className="when">{e.year}</span>
                  <span className="what">{e.title}</span>
                  <span className="where">{e.place}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
