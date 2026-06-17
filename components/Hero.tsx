'use client';

import Image from 'next/image';

import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';

const HEADLINE = "Your Linux content, edited by someone who actually runs Linux.";

export default function Hero() {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        if (indexRef.current < HEADLINE.length) {
          setDisplayed(HEADLINE.slice(0, indexRef.current + 1));
          indexRef.current++;
        } else {
          setDone(true);
          clearInterval(interval);
        }
      }, 38);
      return () => clearInterval(interval);
    }, 600);
    return () => clearTimeout(delay);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <p className={styles.preTitle}>
            <span className={styles.promptGreen}>ariel@portfolio:~$</span>
            <span className={styles.promptCmd}> ./introduce.sh</span>
          </p>

          <h1 className={styles.headline}>
            {displayed}
            {!done && <span className="cursor">▌</span>}
          </h1>

          <p className={styles.sub}>
            I&apos;m <span className="highlight">Ariel</span> — video editor and writer with{' '}
            <span className="highlight">3+ years</span> producing content for{' '}
            <span className="highlight">Diolinux</span>, the largest Linux and open source media
            outlet in Brazil. Nearly <span className="highlight">200 edited videos</span>.{' '}
            <span className="highlight">2,500+</span> published articles. Yes, I daily drive{' '}
            <span className="highlight">Linux Mint</span>.
          </p>

          <div className={styles.ctas}>
            <a
              id="hero-cta"
              href="mailto:arielbonfim@gmail.com"
              className="btn-terminal"
            >
              <span>$</span> ./lets_talk.sh
            </a>
            <a
              href="#portfolio"
              className="btn-terminal btn-outline"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>&gt;</span> view_portfolio
            </a>
          </div>

          <div className={styles.stats}>
            {[
              {
                value: '200+',
                label: 'Edited Videos',
                href: 'https://www.youtube.com/@Diolinuxlabs'
              },
              {
                value: '2,500+',
                label: 'Published Articles',
                href: 'https://diolinux.com.br/autor/arielbonfim'
              },
              {
                value: '3+',
                label: 'Years at Diolinux',
                href: 'https://diolinux.com.br/autor/arielbonfim'
              },
              {
                value: '4',
                label: 'Wikipedia Citations',
                href: 'https://www.linkedin.com/posts/ariel-leon-socio-bonfim_linux-opensource-contentcreation-ugcPost-7473105842091962368-Sp14/'
              },
            ]
              .map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                >
                  <div className={styles.stat}>
                    <span className={styles.statValue}>{s.value}</span>
                    <span className={styles.statLabel}>{s.label}</span>
                  </div>
                </a>
              ))}
          </div>
        </div>

        <div className={styles.imageSlot}>
          <div className="terminal-card" style={{ height: '100%', minHeight: 360 }}>
            <div className="terminal-card-bar">
              <span className="terminal-dot dot-red" />
              <span className="terminal-dot dot-yellow" />
              <span className="terminal-dot dot-green" />
              <span style={{ marginLeft: 8, fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>ariel.jpg</span>
            </div>
            <div style={{ position: 'relative', width: '100%', display: 'flex' }}>
              <Image
                src="/hero-portrait.jpg"
                alt="Ariel Bonfim"
                width={667}
                height={1000}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '4px',
                  border: '1px solid var(--green-border)',
                }}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span>scroll</span>
        <span className={styles.scrollArrow}>↓</span>
      </div>
    </section>
  );
}
