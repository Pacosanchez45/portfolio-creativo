'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '@/components/language-provider';
import { caseStudiesEn, caseStudiesEs, type CaseStudySlug } from '@/data/case-studies';
import styles from './case-study-page.module.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function CaseStudyPage({ slug }: { slug: CaseStudySlug }) {
  const ref = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  const study = (language === 'es' ? caseStudiesEs : caseStudiesEn)[slug];
  const nextSlug: CaseStudySlug = slug === 'uxsignal' ? 'clinica-dental-lb' : 'uxsignal';
  const nextStudy = (language === 'es' ? caseStudiesEs : caseStudiesEn)[nextSlug];

  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add({ motion: '(prefers-reduced-motion: no-preference)', mobile: '(max-width: 767px)', desktop: '(min-width: 1024px) and (hover: hover) and (pointer: fine)' }, context => {
      if (!context.conditions?.motion) return;
      const isMobile = Boolean(context.conditions.mobile);
      const cleanups: Array<() => void> = [];

      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('[data-case-back], [data-case-index]', { opacity: 0, y: 8, duration: .55, stagger: .08 })
        .from('[data-case-title]', { yPercent: 115, rotationZ: -1.2, duration: isMobile ? .75 : 1.05 }, .08)
        .from('[data-case-subtitle], [data-case-intro]', { opacity: 0, y: 14, duration: .7, stagger: .1 }, .4)
        .from('[data-case-hero-frame]', { clipPath: 'inset(0 0 100% 0)', duration: isMobile ? .8 : 1.15 }, .26)
        .from('[data-case-hero-image]', { scale: 1.055, duration: 1.3 }, .26)
        .from('[data-case-summary]', { opacity: 0, y: 10, duration: .55, stagger: .06 }, .65);

      gsap.utils.toArray<HTMLElement>('[data-case-section]', ref.current).forEach(section => {
        const select = gsap.utils.selector(section);
        const copy = select('[data-case-copy]');
        const mediaItems = select('[data-case-media]');
        const mediaImages = select('[data-case-media] img');
        const timeline = gsap.timeline({ defaults: { ease: 'power3.out' }, scrollTrigger: { trigger: section, start: 'top 82%', toggleActions: 'play none none none' } })
          .from(select('[data-case-rule]'), { scaleX: 0, duration: .8 }, 0)
          .from(select('[data-case-section-number], [data-case-eyebrow]'), { opacity: 0, y: 8, duration: .5, stagger: .06 }, .08)
          .from(select('[data-case-heading]'), { yPercent: 110, rotationZ: -.8, duration: .8 }, .12);
        if (copy.length) timeline.from(copy, { opacity: 0, y: 12, duration: .65, stagger: .06 }, .28);
        if (mediaItems.length) timeline.from(mediaItems, { clipPath: 'inset(0 0 100% 0)', y: 12, duration: .85, stagger: .1 }, .2);
        if (mediaImages.length) timeline.from(mediaImages, { scale: 1.04, duration: 1 }, .2);
        if (!isMobile) {
          select('[data-case-media]').forEach((item, index) => {
            gsap.fromTo(item, { y: index % 2 ? 12 : -8 }, { y: index % 2 ? -10 : 12, ease: 'none', scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 1.15 } });
          });
        }
      });

      gsap.fromTo('[data-case-progress]', { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom bottom', scrub: .25 } });

      if (context.conditions.desktop && navigator.maxTouchPoints === 0) {
        const host = ref.current?.querySelector<HTMLElement>('[data-case-hero-stage]');
        const frame = ref.current?.querySelector<HTMLElement>('[data-case-hero-frame]');
        const image = ref.current?.querySelector<HTMLElement>('[data-case-hero-image]');
        const caption = ref.current?.querySelector<HTMLElement>('[data-case-hero-caption]');
        if (host && frame && image && caption) {
          const options = { duration: .75, ease: 'power3.out' };
          const frameX = gsap.quickTo(frame, 'x', options); const frameY = gsap.quickTo(frame, 'y', options);
          const rx = gsap.quickTo(frame, 'rotationX', options); const ry = gsap.quickTo(frame, 'rotationY', options);
          const imageX = gsap.quickTo(image, 'x', options); const captionX = gsap.quickTo(caption, 'x', options);
          const move = (event: PointerEvent) => {
            const bounds = host.getBoundingClientRect();
            const nx = gsap.utils.clamp(-1, 1, ((event.clientX - bounds.left) / bounds.width) * 2 - 1);
            const ny = gsap.utils.clamp(-1, 1, ((event.clientY - bounds.top) / bounds.height) * 2 - 1);
            frameX(nx * 8); frameY(ny * 6); rx(ny * -2); ry(nx * 3); imageX(nx * -4); captionX(nx * 5);
          };
          const reset = () => { frameX(0); frameY(0); rx(0); ry(0); imageX(0); captionX(0); };
          host.addEventListener('pointermove', move, { passive: true }); host.addEventListener('pointerleave', reset);
          cleanups.push(() => { host.removeEventListener('pointermove', move); host.removeEventListener('pointerleave', reset); });
        }
      }
      return () => cleanups.forEach(cleanup => cleanup());
    });
    return () => media.revert();
  }, { scope: ref, dependencies: [language, slug], revertOnUpdate: true });

  return <main ref={ref} id="main" className={styles.page}>
    <span className={styles.progress} aria-hidden="true"><span data-case-progress /></span>
    <section className={styles.hero}>
      <div className={styles.heroTop}>
        <Link href="/" data-case-back>← {study.labels.back}</Link>
        <span data-case-index>{study.index} / {study.year}</span>
      </div>
      <div className={styles.heroGrid}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow} data-case-subtitle>{study.eyebrow}</p>
          <h1 aria-label={study.title}>{study.title.split(' ').map((word, index) => <span className={styles.titleMask} key={index}><span data-case-title>{word}{index < study.title.split(' ').length - 1 ? ' ' : ''}</span></span>)}</h1>
          <p className={styles.subtitle} data-case-subtitle>{study.subtitle}</p>
          <p className={styles.intro} data-case-intro>{study.intro}</p>
        </div>
        <div className={styles.heroStage} data-case-hero-stage>
          <span className={styles.heroOutline} aria-hidden="true" />
          <figure className={styles.heroVisual} data-case-hero-frame>
            <span data-case-hero-image><Image src={study.heroImage.src} alt={study.heroImage.alt} width={study.heroImage.width} height={study.heroImage.height} priority sizes="(max-width: 767px) 100vw, 56vw" /></span>
          </figure>
          <span className={styles.heroCaption} data-case-hero-caption>{study.heroImage.caption}</span>
        </div>
      </div>
      <dl className={styles.summary}>{study.summary.map(item => <div key={item.label} data-case-summary><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>
    </section>

    <div className={styles.sections}>
      {study.sections.map(section => <section className={`${styles.section} ${styles[section.layout ?? 'wide']}`} data-case-section key={section.number}>
        <span className={styles.rule} data-case-rule aria-hidden="true" />
        <header className={styles.sectionHeading}>
          <span className={styles.sectionNumber} data-case-section-number>{section.number}</span>
          <div><p className={styles.eyebrow} data-case-eyebrow>{section.eyebrow}</p><h2><span><span data-case-heading>{section.title}</span></span></h2></div>
        </header>
        <div className={styles.sectionContent}>
          {(section.paragraphs || section.bullets) && <div className={styles.prose} data-case-copy>{section.paragraphs?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}</div>}
          {section.items && <div className={styles.decisions}>{section.items.map((item, index) => <article key={item.title} data-case-copy><span>{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>}
          {section.media && <div className={`${styles.mediaGrid} ${section.layout === 'phones' ? styles.phoneGrid : ''}`}>{section.media.map(media => <figure className={`${styles.media} ${media.portrait ? styles.portrait : ''}`} data-case-media key={media.src + media.caption}><span><Image src={media.src} alt={media.alt} width={media.width} height={media.height} sizes={media.portrait ? '(max-width: 767px) 76vw, 28vw' : '(max-width: 767px) 100vw, 68vw'} /></span><figcaption>{media.caption}</figcaption></figure>)}</div>}
        </div>
      </section>)}
    </div>

    <section className={styles.final} data-case-section>
      <span className={styles.rule} data-case-rule aria-hidden="true" />
      <p className={styles.eyebrow} data-case-eyebrow>{study.final.eyebrow}</p>
      <h2><span><span data-case-heading>{study.final.title}</span></span></h2>
      <div className={styles.finalLinks} data-case-copy><a href={study.final.primary.href} target="_blank" rel="noopener noreferrer">{study.final.primary.label}<span>↗</span></a><a href={study.final.secondary.href} target="_blank" rel="noopener noreferrer">{study.final.secondary.label}<span>↗</span></a></div>
    </section>

    <nav className={styles.caseNav} aria-label={study.labels.projects}>
      <Link href="/proyectos">← {study.labels.projects}</Link>
      <Link href={`/casos/${nextSlug}`}><span>{study.labels.next}</span>{nextStudy.title} →</Link>
      <a href="#main">{study.labels.top} ↑</a>
    </nav>
  </main>;
}
