import { useEffect, useState } from 'react';
import { whatsappLink } from '../content';
import WhatsAppIcon from './WhatsAppIcon';

/** Floating WhatsApp button: appears once the hero's own button has scrolled away. */
export default function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      className={`wa-fab ${visible ? '' : 'hidden'}`}
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Priya on WhatsApp"
      tabIndex={visible ? 0 : -1}
    >
      <WhatsAppIcon size={26} />
      <span className="label">Chat on WhatsApp</span>
    </a>
  );
}
