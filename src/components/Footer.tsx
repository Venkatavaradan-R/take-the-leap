import { nav } from '../content';
import { Wordmark } from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Wordmark />
        <nav aria-label="Footer">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`}>
              {n.label}
            </a>
          ))}
        </nav>
        <p>© {new Date().getFullYear()} Priya Raghuraman · Leap of French</p>
      </div>
    </footer>
  );
}
