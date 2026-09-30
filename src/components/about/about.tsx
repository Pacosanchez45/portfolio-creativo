'use client';
import { useLanguage } from '@/components/language-provider';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { AboutMeta } from './about-meta';
import { TechMarquee } from './tech-marquee';
import styles from './about.module.css';
import { DepthDetails } from '@/components/decorative/depth-details';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function About() {
  const { content: c } = useLanguage();
  const about = c.aboutContent;
  const ref = useRef<HTMLElement>(null);
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add({ motion: '(prefers-reduced-motion: no-preference)', mobile: '(max-width: 767px)', desktop: '(min-width: 1024px) and (hover: hover) and (pointer: fine)' }, context => {
      if (!context.conditions?.motion) return;
      const { mobile, desktop } = context.conditions;
      gsap.timeline({ scrollTrigger: { trigger: ref.current, start: 'top 82%', toggleActions: 'play none none none' }, defaults: { ease: 'power3.out' } })
        .from('[data-about-label]', { opacity: 0, duration: 0.55 }, 0)
        .from('[data-about-line]', { yPercent: 110, stagger: 0.1, duration: mobile ? 0.7 : 1 }, 0.12);
      gsap.timeline({ scrollTrigger: { trigger: '[data-experience]', start: 'top 88%', toggleActions: 'play none none none' }, defaults: { ease: 'power3.out' } })
        .from('[data-experience-rule]', { scaleX: 0, duration: 0.85 }, 0)
        .from('[data-experience-reveal]', { yPercent: 110, scale: mobile ? 1 : 0.94, duration: mobile ? 0.7 : 1.1 }, 0.08)
        .from('[data-experience-copy]', { opacity: 0, y: 8, duration: 0.7 }, 0.35)
        .from('[data-experience-accent]', { scale: 0, opacity: 0, duration: 0.45 }, 0.85);
      gsap.from('[data-about-text]', { opacity: 0, y: 10, duration: 0.85, stagger: 0.14, ease: 'power3.out', scrollTrigger: { trigger: '[data-about-copy]', start: 'top 88%', toggleActions: 'play none none none' } });
      gsap.from('[data-about-meta]', { opacity: 0, y: 8, duration: 0.65, stagger: 0.1, scrollTrigger: { trigger: '[data-about-meta]', start: 'top 88%', toggleActions: 'play none none none' } });
      gsap.from('[data-about-statement-line]', { yPercent: 110, duration: 0.9, stagger: 0.13, ease: 'power3.out', scrollTrigger: { trigger: '[data-about-statement]', start: 'top 88%', toggleActions: 'play none none none' } });
      if (mobile) return;
      const amount = desktop ? 1 : 0.6;
      gsap.timeline({ scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: 1 }, defaults: { ease: 'none' } })
        .fromTo('[data-about-title]', { y: 12 * amount }, { y: -16 * amount }, 0)
        .fromTo('[data-experience-number]', { y: 12 * amount }, { y: -16 * amount }, 0)
        .fromTo('[data-experience-text]', { y: -4 * amount }, { y: 6 * amount }, 0);
      gsap.fromTo('[data-about-statement]', { x: -8 * amount }, { x: 8 * amount, ease: 'none', scrollTrigger: { trigger: '[data-about-statement]', start: 'top bottom', end: 'bottom top', scrub: 1 } });
      const zone = ref.current?.querySelector<HTMLElement>('[data-experience]');
      const target = ref.current?.querySelector<HTMLElement>('[data-experience-tilt]');
      if (!desktop || navigator.maxTouchPoints > 0 || !zone || !target) return;
      const options = { duration: 0.7, ease: 'power3.out' };
      const x = gsap.quickTo(target, 'x', options), y = gsap.quickTo(target, 'y', options);
      const rx = gsap.quickTo(target, 'rotationX', options), ry = gsap.quickTo(target, 'rotationY', options);
      const move = (event: PointerEvent) => {
        if (event.pointerType !== 'mouse') return;
        const rect = zone.getBoundingClientRect();
        const nx = gsap.utils.clamp(-1, 1, (event.clientX - rect.left) / rect.width * 2 - 1);
        const ny = gsap.utils.clamp(-1, 1, (event.clientY - rect.top) / rect.height * 2 - 1);
        x(nx * 6); y(ny * 6); rx(-ny * 2); ry(nx * 3);
      };
      const reset = () => { x(0); y(0); rx(0); ry(0); };
      zone.addEventListener('pointermove', move, { passive: true });
      zone.addEventListener('pointerleave', reset);
      zone.addEventListener('pointercancel', reset);
      return () => { zone.removeEventListener('pointermove', move); zone.removeEventListener('pointerleave', reset); zone.removeEventListener('pointercancel', reset); };
    });
    return () => media.revert();
  }, { scope: ref });

  return <section ref={ref} id="about" className={styles.section} aria-labelledby="about-title">
    <DepthDetails variant="about" label="05 / 08" />
    <p className={styles.label} data-about-label>{c.about.label}</p>
    <div className={styles.layout}>
      <h2 id="about-title" className={styles.title} data-about-title>
        {c.about.lines.map((line, index) => <span className={styles.mask} key={index}><span data-about-line className={index === 2 ? styles.outline : undefined}>{index === 3 ? <>{line.slice(0, -1)}<span className={styles.accent}>.</span></> : line}</span></span>)}
      </h2>
      <div className={styles.experience} data-experience>
        <div className={styles.tilt} data-experience-tilt>
          <span className={styles.experienceRule} data-experience-rule aria-hidden="true" />
          <p className={styles.experienceNumber} data-experience-number aria-label={c.about.experienceLabel}>
            <span className={styles.mask} aria-hidden="true"><span data-experience-reveal>{c.about.experienceNumber}<span className={styles.experiencePlus} data-experience-accent>{c.about.experienceSign}</span></span></span>
          </p>
          <div className={styles.experienceText} data-experience-text>
            <span className={styles.experienceMarker} data-experience-accent aria-hidden="true" />
            <p data-experience-copy>{c.about.experienceLines.map((line, index) => <span key={index}>{line}</span>)}</p>
          </div>
          <span className={styles.experienceRule} data-experience-rule aria-hidden="true" />
        </div>
      </div>
      <div className={styles.copy} data-about-copy>{about.paragraphs.map((paragraph, index) => <p key={index} className={index === 0 ? styles.lead : styles.body} data-about-text>{paragraph}</p>)}<AboutMeta /></div>
    </div>
    <p className={styles.statement} data-about-statement aria-label={c.about.statement}><span className={styles.mask} aria-hidden="true"><span data-about-statement-line>{c.about.statementLines[0]}</span></span><span className={styles.mask} aria-hidden="true"><span data-about-statement-line>{c.about.statementLines[1]}<span className={styles.outline}>{c.about.statementLines[2]}</span> <span className={styles.accent}>{c.about.statementLines[3]}</span></span></span></p>
    <TechMarquee />
  </section>;
}
