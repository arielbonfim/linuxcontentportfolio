import styles from './Footer.module.css';
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
} from 'react-icons/fa';

const socials = [
  {
    id: 'footer-whatsapp',
    icon: FaWhatsapp,
    label: 'WhatsApp',
    href: 'https://wa.me/5521992963658',
  },
  {
    id: 'footer-instagram',
    icon: FaInstagram,
    label: 'Instagram',
    href: 'https://instagram.com/arielsbonfim',
  },
  {
    id: 'footer-linkedin',
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ariel-leon-socio-bonfim/',
  },
  {
    id: 'footer-email',
    icon: FaEnvelope,
    label: 'Email',
    href: 'mailto:arielbonfim@gmail.com',
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.brand}>
            <span className={styles.prompt}>ariel@portfolio:~$</span>
            <span className={styles.cursor}>_</span>
          </p>

          <div className={styles.socials}>
            {socials.map(({ id, icon: Icon, label, href }) => (
              <a
                key={id}
                id={id}
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className={styles.socialIcon}
                title={label}
              >
                <Icon />
              </a>
            ))}
          </div>

          <p className={styles.copy}>
            <span className={styles.commentSlash}>// </span>
            {new Date().getFullYear()} Ariel Bonfim.
          </p>
        </div>
      </div>
    </footer>
  );
}
