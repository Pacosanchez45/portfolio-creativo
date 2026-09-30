'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';
import { es, type Content } from '@/translations/es';
import { en } from '@/translations/en';
import { caseStudiesEn, caseStudiesEs, caseStudySlugs, type CaseStudySlug } from '@/data/case-studies';

type Language = 'es' | 'en';
const storageKey = 'uiverse.language.v1';
const LanguageContext = createContext<{ language: Language; content: Content; setLanguage: (language: Language) => void } | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [language, updateLanguage] = useState<Language>('es');
  useEffect(() => {
    // Read after hydration so the server and first client render both use Spanish.
    let stored: string | null = null;
    try { stored = localStorage.getItem(storageKey); } catch { /* Storage may be unavailable. */ }
    if (stored === 'en') queueMicrotask(() => updateLanguage('en'));
  }, []);
  const content = language === 'es' ? es : en;
  useEffect(() => {
    document.documentElement.lang = language;
    const caseSlug = pathname.startsWith('/casos/') ? pathname.split('/').filter(Boolean).at(-1) : undefined;
    const caseStudy = caseSlug && caseStudySlugs.includes(caseSlug as CaseStudySlug) ? (language === 'es' ? caseStudiesEs : caseStudiesEn)[caseSlug as CaseStudySlug] : null;
    const routeSeo = caseStudy ? { title: `${caseStudy.title} — UIverse`, description: caseStudy.intro } : pathname === '/contacto' ? content.routeSeo.contact : pathname === '/proyectos' ? content.routeSeo.projects : content.seo;
    const applyMetadata = () => {
      if (document.title !== routeSeo.title) document.title = routeSeo.title;
      const description = document.querySelector('meta[name="description"]');
      if (description?.getAttribute('content') !== routeSeo.description) description?.setAttribute('content', routeSeo.description);
    };
    const frame = requestAnimationFrame(() => {
      applyMetadata();
      ScrollTrigger.refresh();
    });
    const observer = new MutationObserver(applyMetadata);
    observer.observe(document.head, { childList: true, subtree: true, characterData: true, attributes: true });
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, [language, content, pathname]);
  const value = useMemo(() => ({ language, content, setLanguage: (next: Language) => {
    updateLanguage(next);
    try { localStorage.setItem(storageKey, next); } catch { /* Keep in-memory selection. */ }
  } }), [language, content]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage requires LanguageProvider');
  return context;
}
