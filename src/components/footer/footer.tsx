'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '@/components/language-provider';
import { BrandMark } from '@/components/brand-mark';
import { contact } from '@/data/contact';
import styles from './footer.module.css';
import { DepthDetails } from '@/components/decorative/depth-details';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { content: c } = useLanguage();

  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.timeline({ defaults: { ease: 'power3.out' }, scrollTrigger: { trigger: ref.current, start: 'top 88%', toggleActions: 'play none none none' } })
        .from('[data-footer-rule]', { scaleX: 0, duration: .9 }, 0)
        .from('[data-footer-brand]', { opacity: 0, y: 12, duration: .7 }, .12)
        .from('[data-footer-column]', { opacity: 0, y: 10, duration: .65, stagger: .08 }, .2)
        .from('[data-footer-bottom]', { opacity: 0, y: 6, duration: .55 }, .45);
    });
    return () => media.revert();
  }, { scope: ref });

  const navigation = [
    { label: c.footer.home, href: '/' },
    { label: c.footer.projects, href: '/proyectos' },
    { label: c.footer.about, href: '/#about' },
    { label: c.footer.contactLink, href: '/contacto' },
  ];

  return <footer ref={ref} className={styles.footer}>
    <DepthDetails variant="footer" label="08 / 08" />
    <span className={styles.rule} data-footer-rule aria-hidden="true" />
    <div className={styles.grid}>
      <div className={styles.brand} data-footer-brand>
        <Link href="/" className={styles.wordmark} aria-label={c.nav.home}><BrandMark /><span>UIverse</span></Link>
        <p>{c.footer.description}</p>
      </div>
      <nav className={styles.column} data-footer-column aria-label={c.footer.navigation}>
        <h2>{c.footer.navigation}</h2>
        {navigation.map(item => <Link key={item.href} href={item.href}>{item.label}<span aria-hidden="true">↗</span></Link>)}
      </nav>
      <nav className={styles.column} data-footer-column aria-label={c.footer.featured}>
        <h2>{c.footer.featured}</h2>
        {c.projects.map(project => {
          const href = project.caseUrl ?? project.projectUrl ?? project.githubUrl ?? '/proyectos';
          return href.startsWith('/') ? <Link key={project.id} href={href}>{project.name}<span aria-hidden="true">→</span></Link> : <a key={project.id} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} (${c.footer.external})`}>{project.name}<span aria-hidden="true">↗</span></a>;
        })}
      </nav>
      <address className={styles.column} data-footer-column>
        <h2>{c.footer.contact}</h2>
        <a href={`mailto:${contact.email}`}>{contact.email}<span aria-hidden="true">↗</span></a>
        <p>{c.footer.location}</p>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<span aria-hidden="true">↗</span></a>
        <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub<span aria-hidden="true">↗</span></a>
      </address>
    </div>
    <div className={styles.bottom} data-footer-bottom><span>{c.footer.copyright}</span><span>{c.footer.credit}</span></div>
  </footer>;
}
