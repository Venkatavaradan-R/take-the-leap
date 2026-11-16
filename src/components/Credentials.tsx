import { credentials } from '../content';

export default function Credentials() {
  return (
    <section className="creds" aria-label="Where Priya has taught and trained">
      <div className="container">
        <span className="creds-label">Taught & trained at</span>
        <ul>
          {credentials.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
