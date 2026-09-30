'use client';
import { useLanguage } from '@/components/language-provider';
import { useRef } from 'react';

import { ProjectShowcase } from './project-showcase';
import { useWorkMotion } from './use-work-motion';
import styles from './selected-work.module.css';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DepthDetails } from '@/components/decorative/depth-details';

export function SelectedWork() {
  const { content: c } = useLanguage();
  const projects = c.projects.slice(0, 3);
  const heading = useRef<HTMLDivElement>(null);
  const section = useRef<HTMLElement>(null);
  const counter = useRef<HTMLSpanElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  useWorkMotion(heading);
  useGSAP(() => {
    const articles = Array.from(section.current?.querySelectorAll<HTMLElement>('article') ?? []);
    const update = () => {
      let active = 0;
      articles.forEach((article, index) => { if (article.getBoundingClientRect().top <= window.innerHeight * 0.4) active = index; });
      if (counter.current) counter.current.textContent = projects[active].number;
      progress.current?.style.setProperty('--work-progress', String((active + 1) / projects.length));
    };
    ScrollTrigger.create({ trigger: section.current, start: 'top bottom', end: 'bottom top', onUpdate: update, onRefresh: update });
    update();
  }, { scope: section });
  return <section ref={section} id="selected-work" className={styles.section} aria-labelledby="work-heading">
    <DepthDetails variant="work" label="02 / 08" />
    <div ref={heading} className={styles.intro}>
      <div className={styles.eyebrow}><span>{c.work.label}</span><span>{c.work.selection}</span></div>
      <div className={styles.introGrid}>
        <h2 id="work-heading" className={styles.sectionTitle}><span className={styles.mask}><span data-work-title>{c.work.title}<span className={styles.dot}>.</span></span></span></h2>
        <p>{c.work.intro[0]}<br />{c.work.intro[1]}</p>
      </div>
      <p className={styles.sampleNote}>{c.work.sample}</p>
    </div>
    <div ref={progress} className={styles.progress} aria-label={c.work.progress}><span ref={counter}>01</span><span className={styles.progressTrack} aria-hidden="true"><span /></span><span>/ 03</span></div>
    <div>{projects.map(project => <ProjectShowcase key={project.id} project={project} />)}</div>
  </section>;
}
