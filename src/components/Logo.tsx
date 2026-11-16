/** The "leap": an arc landing on a dot. */
export function LogoMark() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="11" fill="#1d2550" />
      <path d="M9 29c5-12 15-16 22-12" fill="none" stroke="#9bb0ff" strokeWidth="3" strokeLinecap="round" />
      <circle cx="31" cy="16.5" r="3.2" fill="#ef8a6f" />
    </svg>
  );
}

export function Wordmark() {
  return (
    <a href="#top" className="wordmark" aria-label="Leap of French, back to top">
      <LogoMark />
      <span>
        Leap <em>of</em> French
      </span>
    </a>
  );
}
