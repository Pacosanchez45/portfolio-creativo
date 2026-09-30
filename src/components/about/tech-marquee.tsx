'use client';
import { useLanguage } from '@/components/language-provider';
import { useState } from 'react';

import styles from './about.module.css';

export function TechMarquee() {
  const { content: c } = useLanguage();
  const about = c.aboutContent;
  const [paused, setPaused] = useState(false);
  return <div className={styles.tools}>
    <div className={styles.toolsHeading}><span>{c.about.tools}</span><button className={styles.pause} aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? c.about.resume : c.about.pause}</button></div>
    <div className={styles.marquee} data-paused={paused}>
      <div className={styles.track}>{[0, 1].map(copy => <ul key={copy} className={styles.toolList} aria-hidden={copy === 1 ? true : undefined} aria-label={copy === 0 ? c.about.toolsLabel : undefined}>{about.tools.map(tool => <li key={tool}>{tool}<span aria-hidden="true">·</span></li>)}</ul>)}</div>
    </div>
  </div>;
}
