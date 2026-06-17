import Image from 'next/image';
import styles from './WhyItMatters.module.css';

const differentials = [
  {
    icon: '⚡',
    title: 'No briefing on the basics',
    body: 'You make Linux content. I understand Linux content. We skip the part where you explain what a terminal is.',
  },
  {
    icon: '🧠',
    title: 'Editing for substance, not dopamine',
    body: "My goal isn't to make videos that feel flashy. It's to make videos that genuinely educate and respect your audience's intelligence.",
  },
  {
    icon: '🔁',
    title: 'A workflow you can rely on',
    body: "Deadlines are deadlines. You'll always know where things stand — I communicate proactively about timelines and roadblocks, always.",
  },
];

export default function WhyItMatters() {
  return (
    <section id="why" className={`section ${styles.section}`}>
      <div className="container">
        <h2 className="section-title">Why it matters</h2>
        <div className="section-divider" />

        <p className={styles.intro}>
          Most editors will ask you to explain what a package manager is.{' '}
          <span className="highlight">I won&apos;t.</span>
        </p>

        <div className={styles.body}>
          <div className={styles.prose}>
            <p>
              I&apos;ve been using Linux since 2008. I know the difference between Wayland and X11.
              I understand why your audience cares about Flatpaks, rolling releases, or which
              desktop environment is actually worth recommending in 2025. I follow software
              development as a hobby, virtualize distros to capture b-rolls, and have
              opinions about KDE vs GNOME.
            </p>
            <p>
              This isn&apos;t just background knowledge.{' '}
              <strong style={{ color: 'var(--text-primary)' }}>It changes how I edit.</strong> I
              know what deserves emphasis, what can be cut, and what b-roll actually illustrates
              the point — without you having to explain any of it. Less back-and-forth. Fewer
              revisions. A final cut that reflects what you were actually trying to say.
            </p>
          </div>
        </div>

        <div className={styles.imgSlot}>
          <Image
            src="/davinci-workspace.png"
            alt="DaVinci Resolve Workspace"
            width={1200}
            height={675}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              border: '1px solid var(--green-border)',
            }}
          />
        </div>

        <div className={styles.cards}>
          {differentials.map((d, i) => (
            <div key={i} className={`terminal-card ${styles.card}`}>
              <div className={styles.cardIcon}>{d.icon}</div>
              <h3 className={styles.cardTitle}>{d.title}</h3>
              <p className={styles.cardBody}>{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
