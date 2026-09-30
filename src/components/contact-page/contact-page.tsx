'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '@/components/language-provider';
import { contact } from '@/data/contact';
import { ContactForm } from './contact-form';
import styles from './contact-page.module.css';
import { DepthDetails } from '@/components/decorative/depth-details';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function ContactPageContent() {
  const ref = useRef<HTMLElement>(null);
  const { content: c } = useLanguage();
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add({ motion: '(prefers-reduced-motion: no-preference)', mobile: '(max-width: 767px)' }, context => {
      if (!context.conditions?.motion) return;
      gsap.timeline({ defaults: { ease: 'power3.out' } }).from('[data-page-eyebrow]', { opacity: 0, y: 6, duration: .55 }).from('[data-page-title]', { yPercent: 110, stagger: .08, duration: context.conditions?.mobile ? .7 : 1 }, .1).from('[data-page-intro]', { opacity: 0, y: 12, duration: .7 }, .55).from('[data-page-signal]', { opacity: 0, y: 8, stagger: .08, duration: .6 }, .65);
      gsap.utils.toArray<HTMLElement>('[data-contact-reveal]', ref.current).forEach(block => gsap.from(block, { opacity: 0, y: 18, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: block, start: 'top 90%', toggleActions: 'play none none none' } }));
    });
    return () => media.revert();
  }, { scope: ref });

  return <main ref={ref} id="main" className={styles.page}>
    <section className={styles.hero}>
      <DepthDetails variant="contactPage" label="01 / 03" />
      <p className={styles.eyebrow} data-page-eyebrow>{c.contactPage.eyebrow}</p>
      <h1 className={styles.pageTitle} aria-label={c.contactPage.title}>{c.contactPage.title.split(' ').map((word, index) => <span className={styles.wordMask} key={index}><span data-page-title>{word}</span></span>)}</h1>
      <p className={styles.intro} data-page-intro>{c.contactPage.description}</p>
      <dl className={styles.signals}>{c.contactPage.signals.map((signal, index) => <div key={index} data-page-signal><dt>{signal.value}</dt><dd>{signal.label}</dd></div>)}</dl>
    </section>
    <section className={styles.formSection} aria-labelledby="contact-form-title" data-contact-reveal>
      <DepthDetails variant="form" label="02 / 03" />
      <div className={styles.formHeading}><p>{c.contactPage.formEyebrow}</p><h2 id="contact-form-title">{c.contactPage.formTitle}<span>.</span></h2><p>{c.contactPage.formIntro}</p></div>
      <ContactForm />
    </section>
    <section className={styles.notes} aria-label={c.contactPage.notes[0].title}><DepthDetails variant="notes" label="03 / 03" />{c.contactPage.notes.map(note => <article key={note.number} data-contact-reveal><span>{note.number}</span><h2>{note.title}</h2><p>{note.text}</p>{note.number === '03' && <div className={styles.channels}><a href={`mailto:${contact.email}`} aria-label={c.contactPage.emailLabel}>EMAIL ↗</a><a href={contact.linkedin ?? '#'} target="_blank" rel="noopener noreferrer" aria-label={c.contactPage.linkedinLabel}>LINKEDIN ↗</a></div>}</article>)}</section>
    <nav className={styles.pageNav} aria-label={c.nav.label}><Link href="/">← {c.contactPage.back}</Link><Link href="/proyectos">{c.contactPage.projects} →</Link></nav>
  </main>;
}
