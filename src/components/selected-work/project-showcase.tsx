'use client';
import { useLanguage } from '@/components/language-provider';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/data/projects';
import { useWorkMotion } from './use-work-motion';
import styles from './selected-work.module.css';

export function ProjectShowcase({ project }: { project: Project }) {
  const { content: c } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useWorkMotion(ref, true);
  const label = `${c.work.cta} — ${project.name}`;
  const destination = project.caseUrl ?? project.projectUrl;
  return <article ref={ref} className={`${styles.project} ${styles[project.layout]}`} data-project-number={project.number} aria-labelledby={`${project.id}-title`}>
    <div className={styles.projectTop}><span data-work-number className={styles.number}><span data-number-reveal>{project.number}</span></span><span className={styles.year}>{project.year}</span></div>
    <div className={styles.composition}>
      <div className={styles.copy}>
        <h3 id={`${project.id}-title`} className={styles.projectTitle} data-title-parallax aria-label={project.name}><span className={styles.titleHover} aria-hidden="true">{project.name.split(' ').map((word, index) => <span className={styles.wordMask} key={index}><span data-work-title>{word}</span>{' '}</span>)}</span></h3>
        <div data-work-copy><p className={styles.category} data-meta-parallax>{project.category}</p><p className={styles.description}>{project.description}</p></div>
        <div data-cta-parallax className={styles.ctaWrap}><div data-work-cta>
          {destination ? destination.startsWith('/') ? <Link className={styles.cta} href={destination} aria-label={label}>{c.work.cta} <span aria-hidden="true">→</span></Link> : <a className={styles.cta} href={destination} target="_blank" rel="noopener noreferrer" aria-label={label}>{c.work.cta} <span aria-hidden="true">↗</span></a> : <button className={styles.cta} onClick={() => dialog.current?.showModal()} aria-haspopup="dialog" aria-label={label}>{c.work.cta} <span aria-hidden="true">↗</span></button>}
        </div></div>
      </div>
      <div data-image-parallax className={`${styles.visual} ${project.imageFit === 'contain' ? styles.contained : ''}`} data-work-image>
        <div className={styles.imageScale} data-work-scale><Image className={styles.image} style={{ objectFit: project.imageFit ?? 'cover' }} src={project.image} alt={project.imageAlt} width={project.imageWidth ?? 1440} height={project.imageHeight ?? 1100} sizes="(max-width: 767px) 100vw, 62vw" loading={project.number === '01' ? 'eager' : 'lazy'} /></div>
        <span className={styles.imageLabel} aria-hidden="true">{project.number} — {c.work.exploration}</span>
      </div>
    </div>
    {!destination && <dialog ref={dialog} className={styles.dialog} aria-labelledby={`${project.id}-case-title`} data-lenis-prevent onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className={styles.dialogContent}>
        <button className={styles.close} onClick={() => dialog.current?.close()} aria-label={c.work.closeLabel} autoFocus>{c.work.close} <span aria-hidden="true">×</span></button>
        <p className={styles.sampleNote}>{c.work.sampleCase} · {project.year}</p>
        <h2 id={`${project.id}-case-title`}>{project.name}</h2><p className={styles.category}>{project.category}</p>
        <Image src={project.image} alt={project.imageAlt} width={project.imageWidth ?? 1440} height={project.imageHeight ?? 1100} sizes="(max-width: 767px) 90vw, 800px" />
        <p>{project.concept}</p>
      </div>
    </dialog>}
  </article>;
}
