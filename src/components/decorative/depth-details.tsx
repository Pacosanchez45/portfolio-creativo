'use client';

import { useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import styles from './depth-details.module.css';
import { ArrowRight } from '@/components/ui/arrow-right';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Variant =
  | 'hero'
  | 'work'
  | 'capabilities'
  | 'process'
  | 'about'
  | 'contact'
  | 'contactPage'
  | 'projectsPage'
  | 'form'
  | 'notes'
  | 'footer';

const artwork: Record<Variant, ReactNode> = {
  hero: <><span className={styles.heroAxis} data-detail-axis><i /><i /></span><span className={styles.heroPlane} data-detail-plane><i /><i /><i /><b /></span></>,
  work: <><span className={styles.workIndex} data-detail-axis><i /><i /><i /></span><span className={styles.workStack} data-detail-plane><i /><i /><i /></span></>,
  capabilities: <><span className={styles.capCross} data-detail-axis><i /><i /></span><span className={styles.capOrbit} data-detail-plane><i /><i /><b /></span></>,
  process: <><span className={styles.processTrack} data-detail-axis><i /><i /><i /><i /></span><span className={styles.processSteps} data-detail-plane><i /><i /><i /><i /></span></>,
  about: <><span className={styles.aboutMeasure} data-detail-axis><i /><i /><i /></span><span className={styles.aboutBrackets} data-detail-plane><i /><i /><b>03+</b></span></>,
  contact: <><span className={styles.contactDots} data-detail-axis><i /><i /><i /></span><span className={styles.contactRoute} data-detail-plane><i /><i /><b><ArrowRight /></b></span></>,
  contactPage: <><span className={styles.messageMeta} data-detail-axis><i /><i /></span><span className={styles.messageFrame} data-detail-plane><i /><i /><i /><b /></span></>,
  projectsPage: <><span className={styles.sheetMarks} data-detail-axis><i /><i /><i /><i /></span><span className={styles.contactSheet} data-detail-plane><i /><i /><i /><i /></span></>,
  form: <><span className={styles.formRail} data-detail-axis><i /><i /><i /></span><span className={styles.formFields} data-detail-plane><i /><i /><i /><b /></span></>,
  notes: <><span className={styles.noteCross} data-detail-axis><i /><i /></span><span className={styles.noteNodes} data-detail-plane><i /><i /><i /><b /></span></>,
  footer: <><span className={styles.footerTicks} data-detail-axis><i /><i /><i /><i /></span><span className={styles.footerHorizon} data-detail-plane><i /><i /><b>UI</b></span></>,
};

export function DepthDetails({ variant, label }: { variant: Variant; label: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add({ motion: '(prefers-reduced-motion: no-preference)', mobile: '(max-width: 767px)', desktop: '(min-width: 1024px) and (hover: hover) and (pointer: fine)' }, context => {
      const root = ref.current;
      if (!root || !context.conditions?.motion) return;
      const plane = root.querySelector<HTMLElement>('[data-detail-plane]');
      const axis = root.querySelector<HTMLElement>('[data-detail-axis]');
      const marker = root.querySelector<HTMLElement>('[data-detail-marker]');
      if (!plane || !axis || !marker) return;

      gsap.from(root, { opacity: 0, scale: .96, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: root.parentElement, start: 'top 88%', toggleActions: 'play none none none' } });
      if (!context.conditions.mobile) {
        gsap.timeline({ scrollTrigger: { trigger: root.parentElement, start: 'top bottom', end: 'bottom top', scrub: 1.2 }, defaults: { ease: 'none' } })
          .fromTo(plane, { y: 14, rotationZ: -2 }, { y: -18, rotationZ: 2 }, 0)
          .fromTo(axis, { y: -5 }, { y: 9 }, 0)
          .fromTo(marker, { x: -5 }, { x: 7 }, 0);
      }

      const host = root.parentElement;
      if (!context.conditions.desktop || navigator.maxTouchPoints > 0 || !host) return;
      const options = { duration: .8, ease: 'power3.out' };
      const x = gsap.quickTo(plane, 'x', options); const y = gsap.quickTo(plane, 'y', options);
      const rx = gsap.quickTo(plane, 'rotationX', options); const ry = gsap.quickTo(plane, 'rotationY', options);
      const axisX = gsap.quickTo(axis, 'x', options); const axisY = gsap.quickTo(axis, 'y', options);
      const move = (event: PointerEvent) => {
        const bounds = host.getBoundingClientRect();
        const nx = gsap.utils.clamp(-1, 1, ((event.clientX - bounds.left) / bounds.width) * 2 - 1);
        const ny = gsap.utils.clamp(-1, 1, ((event.clientY - bounds.top) / bounds.height) * 2 - 1);
        x(nx * 8); y(ny * 6); rx(ny * -2.2); ry(nx * 3.2); axisX(nx * -4); axisY(ny * -3);
      };
      const reset = () => { x(0); y(0); rx(0); ry(0); axisX(0); axisY(0); };
      host.addEventListener('pointermove', move, { passive: true });
      host.addEventListener('pointerleave', reset);
      return () => { host.removeEventListener('pointermove', move); host.removeEventListener('pointerleave', reset); };
    });
    return () => media.revert();
  }, { scope: ref });

  return <div ref={ref} className={`${styles.details} ${styles[variant]}`} aria-hidden="true">
    {artwork[variant]}
    <span className={styles.marker} data-detail-marker>{label}<i /></span>
    <span className={styles.coordinate}>{variant === 'footer' ? 'UI / 2026' : 'X 04  ·  Y 26'}</span>
  </div>;
}
