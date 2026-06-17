import Image from 'next/image';
import styles from './About.module.css';

const timeline = [
  { year: '2008', event: 'Started using Linux — Ubuntu, Debian, Mandrake, Kurumin' },
  { year: '2022', event: 'Joined Diolinux as staff writer' },
  { year: '2024', event: 'Built editing machine, started learning DaVinci Resolve' },
  { year: '2025', event: 'Editing for Diolinux Labs — 3 videos/week, 4 formats' },
];

const tools = [
  'DaVinci Resolve', 'GIMP', 'Affinity', 'OBS Studio',
  'GNOME Boxes', 'VirtualBox', 'WordPress', 'Lightworks',
  'KDEnlive', 'Premiere', 'After Effects',
];

export default function About() {
  return (
    <section id="about" className={`section ${styles.section}`}>
      <div className="container">
        <h2 className="section-title">A bit about me</h2>
        <div className="section-divider" />

        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.imgSlot}>
              <div className="terminal-card" style={{ padding: 0 }}>
                <div className="terminal-card-bar" style={{ padding: '14px 20px' }}>
                  <span className="terminal-dot dot-red" />
                  <span className="terminal-dot dot-yellow" />
                  <span className="terminal-dot dot-green" />
                  <span style={{ marginLeft: 8, fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>about-photo.jpg</span>
                </div>
                <div style={{ position: 'relative', width: '100%', display: 'flex' }}>
                  <Image
                    src="/about-photo.jpg"
                    alt="Ariel in a forest looking up at tall trees"
                    width={750}
                    height={1000}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '0 0 8px 8px',
                    }}
                  />
                </div>
              </div>
            </div>

            <div className={styles.tools}>
              <p className={styles.toolsLabel}>
                <span style={{ color: 'var(--text-dim)' }}>{'// '}</span>tools
              </p>
              <div className={styles.toolsList}>
                {tools.map((t) => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.prose}>
              <p>
                My relationship with Linux started in <span className="highlight">2008</span>, when I was 14. A local social program gave me a stack of CDs — Ubuntu, Debian, Mandrake, Kurumin — and a book explaining how to install and use them. I taught myself everything on an old AMD Sempron with 1 GB of RAM.
              </p>
              <p>
                Even then, I wanted to work in media. I did early video edits and designs, and that interest never went away.
              </p>
              <p>
                In <span className="highlight">2022</span>, I joined Diolinux as a staff writer. I had no professional writing experience at the time, and my first articles took nearly a week each. Over time my pace improved dramatically. Today, between research, editing, thumbnail creation in GIMP, and publishing on WordPress, each article takes about an hour — and I have more than <span className="highlight">2,500 published pieces</span> and <span className="highlight">4 Wikipedia citations</span> behind me.
              </p>
              <p>
                While building that writing track record, I also wanted to work on video. In <span className="highlight">2024</span> I built a machine capable of editing and started learning DaVinci Resolve. By early <span className="highlight">2025</span> I was editing for Diolinux Labs, the channel&apos;s secondary outlet, producing three videos per week across four different content formats. Nearly <span className="highlight">200 edited videos</span> later, I know this workflow inside and out.
              </p>
              <p>
                My daily driver is <span className="highlight">Linux Mint</span>. I appreciate its stability, Cinnamon&apos;s classic feel, and its Ubuntu base, which I&apos;ve used since I was a teenager. I&apos;m also deeply familiar with GNOME and KDE Plasma, use Flatpaks regularly, and stay current with the broader open source ecosystem.
              </p>
            </div>

            {/* Timeline */}
            <div className={styles.timeline}>
              <p className={styles.timelineLabel}>
                <span style={{ color: 'var(--text-dim)' }}>{'// '}</span>timeline
              </p>
              {timeline.map((item, i) => (
                <div key={i} className={styles.timelineItem}>
                  <span className={styles.timelineYear}>{item.year}</span>
                  <div className={styles.timelineDot} />
                  <p className={styles.timelineEvent}>{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
