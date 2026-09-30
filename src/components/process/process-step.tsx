'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import type { ProcessStage } from '@/data/process';
import styles from './process.module.css';
import { typographicDepth } from './typographic-depth';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function ProcessStep({ step }: { step: ProcessStage }) {
  const ref = useRef<HTMLLIElement>(null);
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add({ motion: '(prefers-reduced-motion: no-preference)', mobile: '(max-width: 767px)', desktop: '(min-width: 1024px)', pointer: '(hover: hover) and (pointer: fine)' }, context => {
      if (!context.conditions?.motion) return;
      const { mobile, desktop } = context.conditions;
      gsap.timeline({ scrollTrigger: { trigger: ref.current, start: 'top 85%', toggleActions: 'play none none none' }, defaults: { ease: 'power3.out' } })
        .from('[data-process-title]', { yPercent: 110, rotation: mobile ? 0 : Number(step.number) % 2 ? -1.2 : 1.2, duration: mobile ? 0.65 : 1 }, 0)
        .from('[data-number-reveal]', { opacity: 0, y: mobile ? 8 : 18, scale: mobile ? 1 : 0.96, duration: 1.1 }, 0)
        .from('[data-process-copy]', { opacity: 0, y: mobile ? 6 : 12, duration: 0.8 }, 0.25)
        .from('[data-process-note]', { opacity: 0, duration: 0.7 }, 0.15)
        .from('[data-process-line]', { scaleX: 0, duration: 0.85 }, 0.15);
      const intensity = mobile ? 0.2 : desktop ? 1 : 0.4;
      gsap.timeline({ scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: 0.9 }, defaults: { ease: 'none' } })
        .fromTo('[data-process-number]', { y: 28 * intensity, opacity: 0.85 }, { y: -28 * intensity, opacity: mobile ? 0.85 : 0.55, duration: 1 }, 0)
        .fromTo('[data-title-scroll]', { y: 14 * intensity }, { y: -14 * intensity, duration: 1 }, 0)
        .fromTo('[data-note-scroll]', { y: 9 * intensity }, { y: -9 * intensity, duration: 1 }, 0)
        .fromTo('[data-copy-scroll]', { y: 5 * intensity }, { y: -5 * intensity, duration: 1 }, 0)
        .fromTo('[data-process-content]', { scale: mobile ? 1 : 0.98, rotationY: desktop ? -0.5 : 0 }, { scale: 1, rotationY: 0, duration: 0.35 }, 0)
        .to('[data-process-content]', { opacity: mobile ? 1 : 0.4, duration: 0.25 }, 0.75);
      if (!mobile && context.conditions.pointer && ref.current) return typographicDepth(ref.current, intensity, Boolean(desktop));
    });
    return () => media.revert();
  }, { scope: ref });
  return <li ref={ref} className={styles.step} data-process-step={step.number} aria-labelledby={`process-${step.number}`}>
    <span className={styles.number} data-process-number aria-hidden="true"><span data-depth="1" data-depth-role="number"><span data-number-reveal>{step.number}</span></span></span>
    <div className={styles.content} data-process-content>
      <div data-note-scroll><div data-depth="0.25"><p className={styles.note} data-process-note><span className={styles.tick} data-process-line aria-hidden="true" />{step.number} / {step.note}</p></div></div>
      <div data-title-scroll><div data-depth="0.6" data-depth-role="title"><h3 id={`process-${step.number}`} className={styles.verb}><span className={styles.mask}><span data-process-title>{step.title}</span></span></h3></div></div>
      <div className={styles.copyPosition} data-copy-scroll><div data-depth="0.15" data-depth-role="description"><p className={styles.description} data-process-copy>{step.description}</p></div></div>
    </div>
  </li>;
}
