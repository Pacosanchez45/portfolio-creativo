'use client';
import { useLanguage } from '@/components/language-provider';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { CapabilityItem } from './capability-item';
import styles from './capabilities.module.css';
import { DepthDetails } from '@/components/decorative/depth-details';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Capabilities() {
  const { content: c } = useLanguage();
  const capabilities = c.capabilityItems;
  const ref = useRef<HTMLElement>(null);
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add({ motion: '(prefers-reduced-motion: no-preference)', mobile: '(max-width: 767px)' }, context => {
      if (!context.conditions?.motion) return;
      const mobile = context.conditions.mobile;
      gsap.timeline({ scrollTrigger: { trigger: '[data-cap-heading]', start: 'top 88%', toggleActions: 'play none none none' }, defaults: { ease: 'power3.out' } })
        .from('[data-cap-heading-title]', { yPercent: 105, duration: mobile ? 0.65 : 1 })
        .from('[data-cap-eyebrow]', { opacity: 0, y: 6, duration: 0.65 }, 0.15);
      // Individual viewport triggers keep lower rows readable on short screens.
      gsap.utils.toArray<HTMLElement>('[data-capability]', ref.current).forEach((row, index) => {
        const select = gsap.utils.selector(row);
        gsap.timeline({ scrollTrigger: { trigger: row, start: 'top 92%', toggleActions: 'play none none none' }, delay: mobile ? 0 : index * 0.06, defaults: { ease: 'power3.out' } })
          .from(select('[data-cap-rule]'), { scaleX: 0, duration: 0.85 }, 0)
          .from(select('[data-cap-number]'), { opacity: 0, y: mobile ? 5 : 10, duration: 0.65 }, 0.08)
          .from(select('[data-cap-name]'), { yPercent: 110, duration: mobile ? 0.65 : 0.9 }, 0.1)
          .from(select('[data-cap-description]'), { opacity: 0, duration: 0.8 }, 0.3);
      });
      gsap.from('[data-cap-statement] > span', { yPercent: 105, duration: mobile ? 0.7 : 1, stagger: mobile ? 0.06 : 0.12, ease: 'power3.out', scrollTrigger: { trigger: '[data-cap-statement-wrap]', start: 'top 88%', toggleActions: 'play none none none' } });
    });
    return () => media.revert();
  }, { scope: ref });

  return <section ref={ref} className={styles.section} aria-labelledby="capabilities-title" id="capabilities">
    <DepthDetails variant="capabilities" label="03 / 08" />
    <header className={styles.heading} data-cap-heading>
      <div className={styles.eyebrow} data-cap-eyebrow><span>{c.capabilities.label}</span><span>{c.capabilities.eyebrow}</span></div>
      <h2 id="capabilities-title" className={styles.title}><span className={styles.mask}><span data-cap-heading-title>{c.capabilities.title}<span className={styles.dot}>.</span></span></span></h2>
    </header>
    <ol className={styles.list}>{capabilities.map(capability => <CapabilityItem key={capability.number} capability={capability} />)}</ol>
    <p className={styles.statement} data-cap-statement-wrap aria-label={c.capabilities.statement}>
      <span className={styles.mask} data-cap-statement aria-hidden="true"><span>{c.capabilities.lines[0]}</span></span>
      <span className={`${styles.mask} ${styles.outline}`} data-cap-statement aria-hidden="true"><span>{c.capabilities.lines[1]}</span></span>
      <span className={styles.mask} data-cap-statement aria-hidden="true"><span>{c.capabilities.lines[2]}<span className={styles.dot}>{c.capabilities.lines[3]}</span></span></span>
    </p>
  </section>;
}
