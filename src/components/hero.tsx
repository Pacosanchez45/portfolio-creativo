'use client';

import { useLanguage } from '@/components/language-provider';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DepthDetails } from '@/components/decorative/depth-details';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Hero() {
  const { content: c } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add({ motion: '(prefers-reduced-motion: no-preference)', mobile: '(max-width: 767px)', desktop: '(min-width: 1024px) and (hover: hover) and (pointer: fine)' }, context => {
      if (!context.conditions?.motion) return;
      const mobile = context.conditions.mobile;
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.given-name .name-line', { yPercent: 110, rotate: mobile ? 0 : 1.6, duration: 1.05 }, 0)
        .from('.surname .name-line', { yPercent: 118, rotate: mobile ? 0 : -1.2, duration: 1.05 }, 0.15)
        .from('.hero-eyebrow > span', { autoAlpha: 0, y: 6, duration: 0.6, stagger: 0.08 }, 0.15)
        .from('.hero-role, .hero-description', { y: mobile ? 8 : 14, autoAlpha: 0, duration: 0.55, stagger: 0.1 }, 0.75)
        .from('.hero-bottom', { autoAlpha: 0, y: 6, duration: 0.4 }, 1.05)
        .from('.name-period', { scale: 0, duration: 0.35, ease: 'back.out(1.8)' }, 1.1);
      const arrow = gsap.to('.work-arrow', { y: 5, duration: 1.7, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.45 });
      ScrollTrigger.create({ trigger: ref.current, start: 'top bottom', end: 'bottom top', onToggle: self => { if (self.isActive) arrow.play(); else arrow.pause(); } });
      // Separate wrappers keep reveal, cursor and scroll transforms independent.
      gsap.timeline({ scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: 0.8 } })
        .to('.given-name', { y: mobile ? -10 : -38, ease: 'none' }, 0)
        .to('.surname', { y: mobile ? 6 : 24, ease: 'none' }, 0)
        .to('.hero-details', { opacity: 0.25, ease: 'none' }, 0);
      if (!context.conditions.desktop) return;
      if (!ref.current || navigator.maxTouchPoints > 0) return;
      const lines = gsap.utils.toArray<HTMLElement>('.name-cursor', ref.current);
      const moves = lines.map(line => ({ x: gsap.quickTo(line, 'x', { duration: 1.1, ease: 'power3.out' }), y: gsap.quickTo(line, 'y', { duration: 1.1, ease: 'power3.out' }) }));
      const move = (event: PointerEvent) => {
        if (event.pointerType !== 'mouse') return;
        moves.forEach((move, index) => {
          const direction = index === 0 ? 1 : -1;
          move.x((event.clientX / window.innerWidth - 0.5) * 16 * direction);
          move.y((event.clientY / window.innerHeight - 0.5) * 6 * direction);
        });
      };
      const reset = () => moves.forEach(move => { move.x(0); move.y(0); });
      const element = ref.current;
      element.addEventListener('pointermove', move);
      element.addEventListener('pointerleave', reset);
      return () => { element.removeEventListener('pointermove', move); element.removeEventListener('pointerleave', reset); };
    });
    return () => media.revert();
  }, { scope: ref });

  return <section ref={ref} id="home" className="hero" aria-labelledby="hero-title">
    <DepthDetails variant="hero" label="01 / 08" />
    <div className="hero-eyebrow"><span>{c.hero.portfolio}</span><span className="eyebrow-right">{c.hero.motto}</span></div>
    <div className="hero-main">
      <h1 id="hero-title" className="hero-name" aria-label="Francisco Sánchez">
        <span className="name-scroll given-name"><span className="name-cursor"><span className="name-mask"><span className="name-line">FRANCISCO</span></span></span></span>
        <span className="name-scroll surname"><span className="name-cursor"><span className="name-mask"><span className="name-line name-outline">SÁNCHEZ<span className="name-period">.</span></span></span></span></span>
      </h1>
      <div className="hero-details">
        <p className="hero-role">{c.hero.role}<br /><span>{c.hero.development}</span></p>
        <p className="hero-description">{c.hero.description}</p>
      </div>
    </div>
    <div className="hero-bottom">
      <a className="selected-work" href="#selected-work" onClick={event => {
        // Lenis handles existing anchors; avoid changing the URL before this section exists.
        if (!document.getElementById('selected-work')) event.preventDefault();
      }}>{c.hero.work} <span className="work-arrow" aria-hidden="true">↓</span></a>
      <span className="hero-note">{c.hero.note}</span>
      <span className="hero-index" aria-hidden="true">{c.hero.index}</span>
    </div>
  </section>;
}

