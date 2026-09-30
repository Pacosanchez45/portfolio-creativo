'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '@/components/language-provider';
import styles from './projects-page.module.css';
import { DepthDetails } from '@/components/decorative/depth-details';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function ProjectsPageContent() {
  const ref = useRef<HTMLElement>(null);
  const { content: c } = useLanguage();
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add({ motion: '(prefers-reduced-motion: no-preference)', mobile: '(max-width: 767px)', tablet: '(min-width: 768px) and (max-width: 1023px)', desktop: '(min-width: 1024px) and (hover: hover) and (pointer: fine)' }, context => {
      if (!context.conditions?.motion) return;
      const { mobile, tablet, desktop } = context.conditions;
      const listenerCleanups: Array<() => void> = [];
      gsap.timeline({ defaults: { ease: 'power3.out' } }).from('[data-projects-eyebrow]', { opacity: 0, y: 6, duration: .55 }).from('[data-projects-title]', { yPercent: 110, duration: context.conditions?.mobile ? .7 : 1 }, .1).from('[data-projects-intro]', { opacity: 0, y: 10, duration: .7, stagger: .1 }, .5);
      gsap.utils.toArray<HTMLElement>('[data-archive-project]', ref.current).forEach(row => {
        const select = gsap.utils.selector(row);
        gsap.timeline({ defaults: { ease: 'power3.out' }, scrollTrigger: { trigger: row, start: 'top 88%', toggleActions: 'play none none none' } })
          .from(select('[data-project-line]'), { scaleX: 0, duration: .8 }, 0)
          .from(select('[data-project-number]'), { opacity: 0, y: 10, duration: .6 }, .05)
          .from(select('[data-project-image]'), { clipPath: 'inset(0 0 100% 0)', duration: context.conditions?.mobile ? .7 : 1 }, .08)
          .from(select('[data-project-image-inner]'), { scale: 1.055, duration: 1.2 }, .08)
          .from(select('[data-project-frame]'), { opacity: 0, x: -10, y: 10, duration: .75 }, .18)
          .from(select('[data-project-caption]'), { opacity: 0, y: 8, duration: .55 }, .26)
          .from(select('[data-project-name]'), { yPercent: 110, duration: .8 }, .18)
          .from(select('[data-project-copy]'), { opacity: 0, y: 8, duration: .65, stagger: .06 }, .35);
        if (!mobile) {
          const intensity = tablet ? .6 : 1;
          gsap.fromTo(select('[data-project-image-inner]'), { yPercent: -2 * intensity }, { yPercent: 2 * intensity, ease: 'none', scrollTrigger: { trigger: row, start: 'top bottom', end: 'bottom top', scrub: 1 } });
          gsap.fromTo(select('[data-project-caption]'), { y: 8 * intensity }, { y: -8 * intensity, ease: 'none', scrollTrigger: { trigger: row, start: 'top bottom', end: 'bottom top', scrub: 1.2 } });
        }
        if (desktop && navigator.maxTouchPoints === 0) {
          const stage = row.querySelector<HTMLElement>('[data-project-stage]');
          const card = row.querySelector<HTMLElement>('[data-project-tilt]');
          const frame = row.querySelector<HTMLElement>('[data-project-frame]');
          const caption = row.querySelector<HTMLElement>('[data-project-caption]');
          const title = row.querySelector<HTMLElement>('[data-project-name]');
          if (!stage || !card || !frame || !caption || !title) return;
          const options = { duration: .65, ease: 'power3.out' };
          const cardX = gsap.quickTo(card, 'x', options); const cardY = gsap.quickTo(card, 'y', options);
          const rotateX = gsap.quickTo(card, 'rotationX', options); const rotateY = gsap.quickTo(card, 'rotationY', options);
          const frameX = gsap.quickTo(frame, 'x', options); const frameY = gsap.quickTo(frame, 'y', options);
          const captionX = gsap.quickTo(caption, 'x', options); const captionY = gsap.quickTo(caption, 'y', options);
          const titleX = gsap.quickTo(title, 'x', options);
          const move = (event: PointerEvent) => {
            const bounds = stage.getBoundingClientRect();
            const nx = gsap.utils.clamp(-1, 1, ((event.clientX - bounds.left) / bounds.width) * 2 - 1);
            const ny = gsap.utils.clamp(-1, 1, ((event.clientY - bounds.top) / bounds.height) * 2 - 1);
            cardX(nx * 7); cardY(ny * 5); rotateY(nx * 3); rotateX(ny * -2);
            frameX(nx * -5); frameY(ny * -4); captionX(nx * 4); captionY(ny * 3); titleX(nx * 4);
          };
          const reset = () => { cardX(0); cardY(0); rotateX(0); rotateY(0); frameX(0); frameY(0); captionX(0); captionY(0); titleX(0); };
          stage.addEventListener('pointermove', move, { passive: true });
          stage.addEventListener('pointerleave', reset);
          listenerCleanups.push(() => { stage.removeEventListener('pointermove', move); stage.removeEventListener('pointerleave', reset); });
        }
      });
      return () => listenerCleanups.forEach(cleanup => cleanup());
    });
    return () => media.revert();
  }, { scope: ref });

  return <main ref={ref} id="main" className={styles.page}>
    <header className={styles.hero}>
      <DepthDetails variant="projectsPage" label="01 / 06" />
      <div className={styles.eyebrow} data-projects-eyebrow><span>{c.projectsPage.eyebrow}</span><span>{c.projectsPage.subtitle}</span></div>
      <h1 className={styles.title}><span className={styles.mask}><span data-projects-title>{c.projectsPage.title}<span>.</span></span></span></h1>
      <p data-projects-intro>{c.projectsPage.intro}</p>
    </header>
    <section className={styles.archive} aria-label={c.projectsPage.title}>
      {c.projects.map((project, index) => {
        const visualHref = project.caseUrl ?? project.projectUrl ?? project.githubUrl ?? '/proyectos';
        const visualContent = <><span className={styles.frame} data-project-frame aria-hidden="true" /><span className={styles.imageWindow}><span data-project-image-inner><Image src={project.image} alt={project.imageAlt} width={project.imageWidth ?? 1536} height={project.imageHeight ?? 960} sizes="(max-width: 767px) 100vw, 52vw" loading={index === 0 ? 'eager' : 'lazy'} /></span></span><span className={styles.corner} aria-hidden="true">↗</span></>;
        return <article className={styles.project} data-archive-project data-treatment={project.visualTreatment} key={project.id}>
        <span className={styles.line} data-project-line aria-hidden="true" />
        <div className={styles.top}><span data-project-number>{project.number}</span><span>{project.year}</span></div>
        <div className={`${styles.composition} ${index % 2 ? styles.reverse : ''}`}>
          <div className={styles.stage} data-project-stage>
            <span className={styles.stageLabel} aria-hidden="true">{c.projectsPage.coverLabel} / {project.number}</span>
            {visualHref.startsWith('/') ? <Link className={styles.visual} href={visualHref} data-project-image data-project-tilt aria-label={`${c.projectsPage.openLabel}: ${project.name}`}>{visualContent}</Link> : <a className={styles.visual} href={visualHref} target="_blank" rel="noopener noreferrer" data-project-image data-project-tilt aria-label={`${c.projectsPage.openLabel}: ${project.name}`}>{visualContent}</a>}
            <span className={styles.caption} data-project-caption>{project.visualCaption}</span>
          </div>
          <div className={styles.copy}>
            <h2 aria-label={project.name}><span className={styles.mask}><span data-project-name>{project.name}</span></span></h2>
            <p className={styles.category} data-project-copy>{project.category}</p>
            <p className={styles.description} data-project-copy>{project.description}</p>
            <div className={styles.technology} data-project-copy><span>{c.projectsPage.technologies}</span><p>{project.technologies}</p></div>
            <div className={styles.links} data-project-copy>
              {project.caseUrl && (project.caseUrl.startsWith('/') ? <Link href={project.caseUrl}>{c.projectsPage.viewCase} →</Link> : <a href={project.caseUrl} target="_blank" rel="noopener noreferrer">{c.projectsPage.viewCase} ↗</a>)}
              {project.projectUrl && <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">{c.projectsPage.viewProject} ↗</a>}
              {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">{c.projectsPage.github} ↗</a>}
            </div>
          </div>
        </div>
      </article>})}
    </section>
    <nav className={styles.pageNav} aria-label={c.nav.label}><Link href="/">← {c.projectsPage.back}</Link><Link href="/contacto">{c.projectsPage.contact} →</Link></nav>
  </main>;
}
