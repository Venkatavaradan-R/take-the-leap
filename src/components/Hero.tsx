import { ArrowDown, Award, Languages } from 'lucide-react';
import { heroStats, portrait, whatsappLink } from '../content';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow reveal">One-on-one French tuition · Online</span>
          <h1 className="reveal" style={{ ['--delay' as string]: '80ms' }}>
            Take the{' '}
            <em>
              leap
              <svg viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true">
                <path d="M2 14 C 50 2, 120 2, 198 12" fill="none" stroke="#ef8a6f" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </em>{' '}
            into French.
          </h1>
          <p className="lede reveal" style={{ ['--delay' as string]: '160ms' }}>
            Personal IB and IGCSE French lessons with <strong>Priya Raghuraman</strong>, IB Senior Examiner and former
            Head of Languages at Greenwood High, with over 25 years of teaching French in international schools.
          </p>
          <div className="hero-ctas reveal" style={{ ['--delay' as string]: '240ms' }}>
            <a className="btn btn-wa" href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> Message on WhatsApp
            </a>
            <a className="btn btn-ghost" href="#lessons">
              Explore lessons <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>
          <dl className="hero-stats reveal" style={{ ['--delay' as string]: '320ms' }}>
            {heroStats.map((s) => (
              <div className="stat" key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-visual reveal" style={{ ['--delay' as string]: '200ms' }}>
          <div className="arch">
            {portrait ? (
              <img src={portrait.src} alt={portrait.alt} width={800} height={1000} />
            ) : (
              <div className="arch-placeholder" aria-hidden="true">
                <p>
                  Bonjour&nbsp;!
                  <small>On y va ?</small>
                </p>
              </div>
            )}
          </div>
          <div className="float-note one">
            <span className="ico">
              <Award size={20} aria-hidden="true" />
            </span>
            <div>
              <b>IB Team Leader</b>
              <span>French B · Writing</span>
            </div>
          </div>
          <div className="float-note two">
            <span className="ico">
              <Languages size={20} aria-hidden="true" />
            </span>
            <div>
              <b>IB · IGCSE · MYP</b>
              <span>Ab Initio to French B</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
