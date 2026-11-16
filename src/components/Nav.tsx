import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { nav, whatsappLink } from '../content';
import { Wordmark } from './Logo';
import WhatsAppIcon from './WhatsAppIcon';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <div className="container">
        <Wordmark />
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
        <nav aria-label="Main">
          <ul id="nav-links" className={`nav-links ${open ? 'open' : ''}`}>
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a className="btn btn-wa nav-cta" href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={18} /> WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
