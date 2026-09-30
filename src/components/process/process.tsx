'use client';
import { useLanguage } from '@/components/language-provider';
import { Fragment, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { ProcessStep } from './process-step';
import styles from './process.module.css';
import { typographicDepth } from './typographic-depth';
import { DepthDetails } from '@/components/decorative/depth-details';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Process() {
  const { content: c } = useLanguage();
  const processSteps = c.processSteps;
  const ref = useRef<HTMLElement>(null);
  const count = useRef<HTMLSpanElement>(null);
  const fill = useRef<HTMLSpanElement>(null);
  useGSAP(() => {
    const steps = Array.from(ref.current?.querySelectorAll<HTMLElement>('[data-process-step]') ?? []);
    let previous = -1;
    ScrollTrigger.create({ trigger: '[data-process-narrative]', start: 'top 55%', end: 'bottom 60%', onUpdate: self => {
      let active = 0;
      steps.forEach((step, index) => { if (step.getBoundingClientRect().top < innerHeight * 0.5) active = index; });
      if (previous !== active && count.current) { count.current.textContent = processSteps[active].number; previous = active; }
      if (fill.current) fill.current.style.transform = `scaleX(${self.progress})`;
    } });
    const media = gsap.matchMedia();
    media.add({ motion: '(prefers-reduced-motion: no-preference)', desktop: '(min-width: 1024px) and (hover: hover) and (pointer: fine)', mobile: '(max-width: 767px)' }, context => {
      if (!context.conditions?.motion) return;
      gsap.timeline({ scrollTrigger: { trigger: '[data-process-heading]', start: 'top 88%', toggleActions: 'play none none none' }, defaults: { ease: 'power3.out' } })
        .from('[data-process-heading-title]', { yPercent: 110, duration: 1 })
        .from('[data-process-eyebrow]', { opacity: 0, duration: 0.7 }, 0.2);
      gsap.from('[data-process-word]', { yPercent: 110, rotation: context.conditions.mobile ? 0 : 1, duration: 1, stagger: 0.09, ease: 'power3.out', scrollTrigger: { trigger: '[data-process-statement]', start: 'top 88%', toggleActions: 'play none none none' } });
      if (!context.conditions.mobile) gsap.fromTo('[data-statement-scroll]', { y: 14, scale: 0.985 }, { y: -14, scale: 1, ease: 'none', scrollTrigger: { trigger: '[data-process-statement]', start: 'top bottom', end: 'bottom top', scrub: 1 } });
      const statement = ref.current?.querySelector<HTMLElement>('[data-process-statement]');
      if (context.conditions.desktop && navigator.maxTouchPoints === 0 && statement) return typographicDepth(statement);
    });
    return () => media.revert();
  }, { scope: ref });

  return <section ref={ref} id="process" className={styles.section} aria-labelledby="process-heading">
    <DepthDetails variant="process" label="04 / 08" />
    <header className={styles.heading} data-process-heading>
      <div className={styles.eyebrow} data-process-eyebrow><span>{c.process.label}</span><span>{c.process.eyebrow}</span></div>
      <h2 id="process-heading" className={styles.title}><span className={styles.mask}><span data-process-heading-title>{c.process.title}<span className={styles.accent}>.</span></span></span></h2>
    </header>
    <div className={styles.progress} aria-label={c.process.progress}><span ref={count}>01</span><span className={styles.track} aria-hidden="true"><span ref={fill} /></span><span>/ 04</span></div>
    <ol className={styles.narrative} data-process-narrative>{processSteps.map(step => <Fragment key={step.number}>
      {step.number === '04' && <li className={styles.statement} data-process-statement>
        <p data-statement-scroll aria-label={c.process.statement}><span className={styles.statementLine} data-depth="0.8" aria-hidden="true"><span className={styles.wordMask}><span data-process-word>{c.process.words[0]}</span></span>{' '}<span className={styles.wordMask}><span className={styles.accent} data-process-word>{c.process.words[1]}</span></span></span><span className={styles.statementLine} data-depth="-1" aria-hidden="true"><span className={styles.wordMask}><span data-process-word>{c.process.words[2]}</span></span>{' '}<span className={styles.wordMask}><span className={styles.outline} data-process-word>{c.process.words[3]}</span></span></span></p>
      </li>}
      <ProcessStep step={step} />
    </Fragment>)}</ol>
  </section>;
}
