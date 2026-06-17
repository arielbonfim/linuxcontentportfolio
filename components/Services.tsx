import styles from './Services.module.css';

const includes = [
  'Full edit from raw footage — cuts, pacing, structure',
  'B-roll sourcing and capture (screen recordings, websites, distro virtualizations when needed)',
  'Motion graphics and animated lower thirds',
  'Sponsor segment editing',
  'Turnaround that respects your publish schedule',
  'Proactive communication throughout',
];

export default function Services() {
  return (
    <section id="services" className={`section ${styles.section}`}>
      <div className="container">
        <h2 className="section-title">What I offer</h2>
        <div className="section-divider" />

        <div className={styles.intro}>
          <p>
            I work with Linux and open source content creators on a monthly basis, handling the full
            editing workflow so you can stay focused on making the content.
          </p>
          <p>
            Every cut, every scene selection, every b-roll choice is made with one question in mind: does this help the viewer understand? I don&apos;t edit for spectacle. I edit for clarity and storytelling — making sure the structure of the video serves the ideas in it, not the other way around.
          </p>
        </div>

        <div className={styles.center}>
          <div className={`terminal-card ${styles.card}`}>
            <div className="terminal-card-bar">
              <span className="terminal-dot dot-red" />
              <span className="terminal-dot dot-yellow" />
              <span className="terminal-dot dot-green" />
              <span className={styles.barTitle}>package.json</span>
            </div>

            <div className={styles.cardInner}>


              <p className={styles.includesLabel}>
                <span style={{ color: 'var(--text-dim)' }}>{'// '}</span>includes:
              </p>
              <ul className={styles.list}>
                {includes.map((item, i) => (
                  <li key={i} className={styles.listItem}>
                    <span className={styles.listArrow}>▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.note}>
                <span className={styles.noteIcon}>ℹ</span>
                <p>
                  Every channel is different. Let&apos;s talk about what yours needs.
                </p>
              </div>

              <div className={styles.cta}>
                <a
                  id="services-cta"
                  href="mailto:arielbonfim@gmail.com"
                  className="btn-terminal"
                >
                  <span>$</span> send_email.sh
                </a>
                <span className={styles.ctaEmail}>arielbonfim@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
