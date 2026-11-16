import { Check } from 'lucide-react';
import { lessons } from '../content';

export default function Lessons() {
  return (
    <section className="section lessons" id="lessons">
      <div className="container">
        <div className="lessons-head">
          <div>
            <span className="eyebrow reveal">Lessons</span>
            <h2 className="reveal">
              One student. One teacher. <em>Full attention.</em>
            </h2>
            <p className="lede reveal">
              Every lesson is one-on-one and planned around one student's level, goals and exam timeline.
            </p>
          </div>
          <div className="one-on-one reveal">
            <strong>1:1</strong>
            <span>
              No groups and no shared pace. Each lesson is spent on the questions and mistakes of the student in
              front of her.
            </span>
          </div>
        </div>

        <div className="tracks">
          {lessons.tracks.map((t, i) => (
            <article className="track reveal" key={t.title} style={{ ['--delay' as string]: `${i * 100}ms` }}>
              <span className="num">0{i + 1}</span>
              <span className="tag">{t.tag}</span>
              <h3>{t.title}</h3>
              <p>{t.body}</p>
              <ul>
                {t.points.map((p) => (
                  <li key={p}>
                    <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="included reveal">
          <h3>Included in every lesson plan</h3>
          <ul>
            {lessons.included.map((item) => (
              <li key={item}>
                <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
