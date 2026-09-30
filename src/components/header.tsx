'use client';

import { useLanguage } from '@/components/language-provider';
import { BrandMark } from './brand-mark';
import Link from 'next/link';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Enable each destination when its section is implemented in a later phase.
const navigation = ['WORK', 'ABOUT', 'CONTACT'] as const;

export function Header() {
  const { content: c, language, setLanguage } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  useGSAP(() => {
    ScrollTrigger.create({ start: 24, end: 'max', onUpdate: self => {
      ref.current?.classList.toggle('is-scrolled', self.scroll() > 24);
    } });
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('[data-nav-reveal]', { autoAlpha: 0, y: -6, duration: 0.5, stagger: 0.06, delay: 0.7, ease: 'power2.out' });
    });
    return () => media.revert();
  }, { scope: ref });

  return <header className="site-header" ref={ref}>
    <Link href="/" className="wordmark" data-nav-reveal aria-label={c.nav.home}><BrandMark />UIverse</Link>
    <nav aria-label={c.nav.label} className="header-nav">
      {navigation.map(item => <Link key={item} className="nav-item" href={item === 'WORK' ? '/proyectos' : item === 'ABOUT' ? '/#about' : '/contacto'} data-nav-reveal>{item === 'WORK' ? c.nav.work : item === 'ABOUT' ? c.nav.about : c.nav.contact}</Link>)}
    </nav><div className="language-switch" role="group" aria-label={c.nav.language} data-nav-reveal>{(['es', 'en'] as const).map(locale => <button key={locale} type="button" lang={locale} aria-label={locale === 'es' ? 'Español' : 'English'} aria-pressed={language === locale} onClick={() => setLanguage(locale)}>{locale.toUpperCase()}</button>)}</div>
  </header>;
}
