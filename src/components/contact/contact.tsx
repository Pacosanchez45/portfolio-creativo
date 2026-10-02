'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/components/language-provider';
import styles from './contact.module.css';
import { DepthDetails } from '@/components/decorative/depth-details';
import { ArrowRight } from '@/components/ui/arrow-right';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { content: c } = useLanguage();
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add({ motion: '(prefers-reduced-motion: no-preference)', mobile: '(max-width: 767px)', desktop: '(min-width: 1024px) and (hover: hover) and (pointer: fine)' }, context => {
      if (!context.conditions?.motion) return;
      const { mobile, desktop } = context.conditions;
      gsap.timeline({ defaults: { ease: 'power3.out' }, scrollTrigger: { trigger: ref.current, start: 'top 85%', toggleActions: 'play none none none' } })
        .from('[data-contact-rule]', { scaleX: 0, duration: 1 }, 0)
        .from('[data-contact-eyebrow]', { opacity: 0, y: 6, duration: 0.6 }, 0.1)
        .from('[data-contact-title]', { yPercent: 110, duration: mobile ? 0.75 : 1.1 }, 0.2);
      gsap.timeline({ defaults: { ease: 'power3.out' }, scrollTrigger: { trigger: '[data-contact-details]', start: 'top 92%', toggleActions: 'play none none none' } })
        .from('[data-contact-copy]', { opacity: 0, y: 10, duration: 0.7 }, 0)
        .from('[data-contact-actions]', { opacity: 0, y: 10, duration: 0.7 }, 0.15);
      if (!mobile) gsap.fromTo('[data-contact-scroll]', { y: 10 }, { y: -14, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: 1 } });
      const zone = ref.current;
      const title = zone?.querySelector<HTMLElement>('[data-contact-cursor]');
      if (!desktop || navigator.maxTouchPoints > 0 || !zone || !title) return;
      const options = { duration: 0.75, ease: 'power3.out' };
      const x = gsap.quickTo(title, 'x', options);
      const y = gsap.quickTo(title, 'y', options);
      const rotate = gsap.quickTo(title, 'rotationY', options);
      const move = (event: PointerEvent) => {
        if (event.pointerType !== 'mouse') return;
        const bounds = zone.getBoundingClientRect();
        const nx = gsap.utils.clamp(-1, 1, (event.clientX - bounds.left) / bounds.width * 2 - 1);
        const ny = gsap.utils.clamp(-1, 1, (event.clientY - bounds.top) / bounds.height * 2 - 1);
        x(nx * 6); y(ny * 6); rotate(nx * 2);
      };
      const reset = () => { x(0); y(0); rotate(0); };
      zone.addEventListener('pointermove', move, { passive: true });
      zone.addEventListener('pointerleave', reset);
      zone.addEventListener('pointercancel', reset);
      return () => { zone.removeEventListener('pointermove', move); zone.removeEventListener('pointerleave', reset); zone.removeEventListener('pointercancel', reset); };
    });
    return () => media.revert();
  }, { scope: ref });

  return <section ref={ref} id="contact" className={styles.section} aria-labelledby="contact-title">
    <DepthDetails variant="contact" label="06 / 08" />
    <span className={styles.rule} data-contact-rule aria-hidden="true" />
    <p className={styles.eyebrow} data-contact-eyebrow>{c.contact.eyebrow}</p>
    <div data-contact-scroll className={styles.titlePosition}><div data-contact-cursor>
      <h2 id="contact-title" className={styles.title}><span className={styles.mask}><span data-contact-title>{c.contact.title}<span className={styles.accent}>.</span></span></span></h2>
    </div></div>
    <div className={styles.details} data-contact-details>
      <p className={styles.copy} data-contact-copy>{c.contact.description}</p>
      <div className={styles.actions} data-contact-actions>
        <Link className={styles.primary} href="/contacto">{c.contact.cta}<span aria-hidden="true"><ArrowRight /></span></Link>
        <Link className={styles.secondary} href="/proyectos">{c.contact.projectsCta}<span aria-hidden="true"><ArrowRight /></span></Link>
      </div>
    </div>
  </section>;
}
