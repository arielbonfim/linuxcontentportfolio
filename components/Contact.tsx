import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.content}>
            <p className={styles.preTitle}>
              <span className={styles.prompt}>ariel@portfolio:~$</span>
              <span className={styles.cmd}> ./contact.sh</span>
            </p>

            <h2 className={styles.title}>Let&apos;s work together</h2>

            <p className={styles.body}>
              If you&apos;re publishing Linux or open source content and want an editor who gets it
              from day one — no lengthy briefings, no explaining what a terminal emulator is —
              I&apos;d love to hear from you.
            </p>

            <div className={styles.contacts}>
              <a id="contact-cta" href="mailto:arielbonfim@gmail.com" className={styles.emailLink}>
                <span className={styles.emailIcon}>✉</span>
                arielbonfim@gmail.com
              </a>
              <a
                href="https://instagram.com/arielsbonfim"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.igLink}
              >
                <span>@</span>arielsbonfim
              </a>
            </div>

            <div className={styles.ctas}>
              <a
                href="mailto:arielbonfim@gmail.com"
                className="btn-terminal"
              >
                <span>$</span> ./send_email.sh
              </a>
              <a
                href="https://wa.me/5521992963658"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-terminal btn-outline"
              >
                <span>$</span> ./whatsapp.sh
              </a>
            </div>
          </div>

          <div className={styles.terminal}>
            <div className="terminal-card-bar" style={{ padding: '20px 24px 0 24px', marginBottom: 0 }}>
              <span className="terminal-dot dot-red" />
              <span className="terminal-dot dot-yellow" />
              <span className="terminal-dot dot-green" />
              <span className={styles.termTitle}>bash</span>
            </div>
            <div className={styles.termBody}>
              <p><span className={styles.c1}>$</span> <span className={styles.c2}>./contact.sh</span></p>
              <p className={styles.comment}># Checking availability...</p>
              <p className={styles.output}>✔ Available for new projects</p>
              <p className={styles.comment}># Preferred contact method:</p>
              <p className={styles.output}>✔ Email or WhatsApp</p>
              <p className={styles.comment}># Response time:</p>
              <p className={styles.output}>✔ Within 24 hours</p>
              <p className={styles.comment}># Specialty:</p>
              <p className={styles.output}>✔ Linux & open source content</p>
              <p className={styles.comment}># Location:</p>
              <p className={styles.output}>✔ Brazil (UTC-3) — remote-first</p>
              <p>&nbsp;</p>
              <p><span className={styles.c1}>$</span> <span className={styles.cur}>▌</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
