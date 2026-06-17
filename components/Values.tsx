import styles from './Values.module.css';

const values = [
  'I will never frame content in a way that misleads your audience — not even if it would boost views',
  'Sources are always credited and copyright rules are followed without shortcuts',
  "You'll always know where things stand — I communicate proactively about deadlines and roadblocks",
  "I write and edit for the audience's intelligence, not against it",
  "Feedback is always welcome — I don't take revisions personally, I take them seriously",
];

export default function Values() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <h2 className="section-title">How I work</h2>
            <div className="section-divider" />
            <p className={styles.sub}>
              These aren&apos;t talking points. They&apos;re constraints I actually operate within.
            </p>
          </div>

          <ul className={styles.list}>
            {values.map((v, i) => (
              <li key={i} className={styles.item}>
                <span className={styles.lineNum}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.comment}>// </span>
                <span className={styles.text}>{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
