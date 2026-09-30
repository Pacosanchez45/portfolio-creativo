'use client';
import { useLanguage } from '@/components/language-provider';

export function SkipLink() {
  const { content: c } = useLanguage();
  return <a className="skip-link" href="#main">{c.nav.skip}</a>;
}
