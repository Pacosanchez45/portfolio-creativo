'use client';
import type { RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP, ScrollTrigger);

export function useWorkMotion(ref: RefObject<HTMLElement | null>, project = false) {
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add({ motion: '(prefers-reduced-motion: no-preference)', mobile: '(max-width: 767px)', desktop: '(min-width: 1024px)' }, context => {
      if (!context.conditions?.motion) return;
      const { mobile, desktop } = context.conditions;
      const timeline = gsap.timeline({ scrollTrigger: { trigger: ref.current, start: 'top 94%', toggleActions: 'play none none none' }, defaults: { ease: 'power3.out' } });
      timeline.from('[data-work-title]', { yPercent: 110, stagger: mobile ? 0 : 0.065, duration: mobile ? 0.65 : 1 });
      if (!project) return;
      timeline.fromTo(ref.current, { '--tone-opacity': 0 }, { '--tone-opacity': 1, duration: 1.2 }, 0);
      timeline.from('[data-work-image]', mobile ? { opacity: 0, duration: 0.65 } : { clipPath: 'inset(0 0 100% 0)', duration: 1.2 }, 0.08)
        .from('[data-work-scale]', { scale: mobile ? 1.025 : 1.06, duration: 1.3 }, 0.08)
        .from('[data-number-reveal]', { opacity: 0, y: 10, duration: 0.8 }, 0)
        .from('[data-work-copy]', { opacity: 0, duration: 0.85 }, 0.35)
        .from('[data-work-cta]', { opacity: 0, y: 8, duration: 0.6 }, 0.65);
      if (mobile) return;
      const intensity = desktop ? 1 : 0.6;
      gsap.timeline({ scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: 0.9 }, defaults: { ease: 'none', duration: 1 } })
        .fromTo('[data-work-number]', { y: 18 * intensity, opacity: 0.7 }, { y: -22 * intensity, opacity: 1 }, 0)
        .fromTo('[data-image-parallax]', { y: 5 * intensity }, { y: -5 * intensity }, 0)
        .fromTo('[data-title-parallax]', { y: 12 * intensity }, { y: -14 * intensity }, 0)
        .fromTo('[data-meta-parallax]', { y: 7 * intensity }, { y: -7 * intensity }, 0)
        .fromTo('[data-cta-parallax]', { y: 4 * intensity }, { y: -4 * intensity }, 0);
    });
    return () => media.revert();
  }, { scope: ref });
}
