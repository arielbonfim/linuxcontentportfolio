'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Portfolio.module.css';

interface PortfolioCard {
  number: string;
  badge: string;
  title: string;
  description: string;
  detail: string;
  youtubeId: string | null;
  link: string | null;
}

const cards: PortfolioCard[] = [
  {
    number: '01',
    badge: 'Weekly News',
    title: 'Diolinux News',
    description:
      'A same-day news roundup published every Wednesday. The presenter records A-roll to teleprompter and sends it in the late morning. I deliver a finished, reviewed edit by 4 PM for a 5 PM publish.',
    detail:
      'Jump cuts, animated intros with hook illustrations, and custom lower thirds designed to display each headline. Heavy b-roll use with highlight animations, vignette effects, and source credits.',
    youtubeId: '9uvzlzWC3og',
    link: 'https://youtu.be/9uvzlzWC3og',
  },
  {
    number: '02',
    badge: 'App Showcase',
    title: 'Vish — Shell Scripting Visually',
    description:
      'Distro and software reviews — many from community members or sponsors. Intro and outro are scripted; the middle section is freestyle, often producing dozens of minutes of raw footage.',
    detail:
      'Three separate files merged: intro/outro, presenter recording, and screen capture. Cuts, zoom effects, camera overlay repositioning, and additional b-rolls captured from websites or virtual machines.',
    youtubeId: 'CfVcczV3Xdo',
    link: 'https://youtu.be/CfVcczV3Xdo',
  },
  {
    number: '03',
    badge: 'Hardware Review',
    title: 'Zima Cube 2',
    description:
      'Multi-day footage from unboxing through extended use, shaped into a single narrative. Recordings from various situations — I select what best illustrates the narration.',
    detail:
      'Lettering for specs mentioned without visual reference, b-rolls from manufacturer sites and older channel videos for comparisons. Zima Cube 2 is a homelab server / compact home AI server.',
    youtubeId: 'h3c_ybfnhL4',
    link: 'https://youtu.be/h3c_ybfnhL4',
  },
  {
    number: '04',
    badge: 'Tech Vlog',
    title: 'Two Years with KDE Plasma',
    description:
      'An intimate format showing personal workflow and setup. Relaxed pacing, multiple takes, personal storytelling — Eddie reflects on two years with KDE Plasma.',
    detail:
      "A desktop environment he initially dismissed as cluttered, only to discover it was one of the most capable productivity setups he'd ever used. Warm pacing to match the personal tone.",
    youtubeId: 'b1ajxw-EvfY',
    link: 'https://www.youtube.com/watch?v=b1ajxw-EvfY&t=292s',
  },
];

function YouTubeThumbnail({ id, title }: { id: string; title: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className={styles.thumb}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ border: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
      </div>
    );
  }

  return (
    <div className={styles.thumb} onClick={() => setIsPlaying(true)} style={{ cursor: 'pointer' }}>
      <Image
        src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={`${title} thumbnail`}
        fill
        style={{ objectFit: 'cover' }}
        unoptimized
      />
      <div className={styles.thumbOverlay}>
        <span className={styles.playBtn}>▶</span>
      </div>
    </div>
  );
}

function PlaceholderThumb() {
  return (
    <div className={styles.thumb}>
      <div className="img-placeholder" style={{ height: '100%', border: 'none', borderRadius: 0 }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
        <span>[ THUMBNAIL COMING SOON ]</span>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className={`section ${styles.section}`}>
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        <div className="section-divider" />

        <p className={styles.subtitle}>
          Four videos. Four formats. All edited for{' '}
          <a href="https://www.youtube.com/@DiolinuxLabs" target="_blank" rel="noopener noreferrer">
            Diolinux Labs
          </a>
          , the secondary outlet of Brazil&apos;s largest Linux channel.
        </p>

        <div className={styles.grid}>
          {cards.map((card) => (
            <div key={card.number} className={`terminal-card ${styles.card}`}>
              <div className={styles.cardTop}>
                {card.youtubeId ? (
                  <YouTubeThumbnail id={card.youtubeId} title={card.title} />
                ) : (
                  <PlaceholderThumb />
                )}
                <div className={styles.cardNum}>{card.number}</div>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span className="badge">{card.badge}</span>
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.description}</p>
                <p className={styles.cardDetail}>{card.detail}</p>

                {card.link ? (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn-terminal btn-outline ${styles.watchBtn}`}
                  >
                    <span>▶</span> Watch on YouTube
                  </a>
                ) : (
                  <span className={styles.comingSoon}>
                    <span>⏳</span> Link coming soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
