'use client';
import { useLanguage } from '@/components/language-provider';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { SelectedWork } from '@/components/selected-work/selected-work';
import { Capabilities } from '@/components/capabilities/capabilities';
import { Process } from '@/components/process/process';
import { About } from '@/components/about/about';
import { Contact } from '@/components/contact/contact';
import { Footer } from '@/components/footer/footer';

export default function Home() {
  const { content: c } = useLanguage();
  return <><a className="skip-link" href="#main">{c.nav.skip}</a><Header /><main id="main"><Hero /><SelectedWork /><Capabilities /><Process /><About /><Contact /></main><Footer /></>;
}
