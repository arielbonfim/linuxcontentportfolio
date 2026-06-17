'use client';

import { useState, useEffect, useRef } from 'react';
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
} from 'react-icons/fa';
import styles from './FloatingContact.module.css';

const socials = [
  {
    id: 'fab-whatsapp',
    icon: FaWhatsapp,
    label: 'WhatsApp',
    href: 'https://wa.me/5521992963658',
    color: '#25d366',
  },
  {
    id: 'fab-instagram',
    icon: FaInstagram,
    label: 'Instagram',
    href: 'https://instagram.com/arielsbonfim',
    color: '#e1306c',
  },
  {
    id: 'fab-linkedin',
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ariel-leon-socio-bonfim/',
    color: '#0077b5',
  },
  {
    id: 'fab-email',
    icon: FaEnvelope,
    label: 'Email',
    href: 'mailto:arielbonfim@gmail.com',
    color: '#00ff41',
  },
];

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div ref={containerRef} className={styles.container}>
      {/* Social buttons */}
      <div className={`${styles.socials} ${open ? styles.socialsOpen : ''}`}>
        {socials.map(({ id, icon: Icon, label, href, color }, i) => (
          <a
            key={id}
            id={id}
            href={href}
            target={href.startsWith('mailto') ? '_self' : '_blank'}
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className={styles.socialBtn}
            style={{
              '--social-color': color,
              '--delay': `${i * 0.05}s`,
            } as React.CSSProperties}
            onClick={() => setOpen(false)}
          >
            <Icon />
          </a>
        ))}
      </div>

      {/* Main FAB */}
      <button
        id="fab-main"
        className={`${styles.fab} ${open ? styles.fabOpen : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close contact menu' : 'Open contact menu'}
        aria-expanded={open}
      >
        <span className={`${styles.fabIcon} ${open ? styles.fabIconOpen : ''}`}>
          {open ? '✕' : '>_'}
        </span>
      </button>
    </div>
  );
}
