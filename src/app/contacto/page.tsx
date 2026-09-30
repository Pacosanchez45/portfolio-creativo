import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { ContactPageContent } from '@/components/contact-page/contact-page';
import { SkipLink } from '@/components/skip-link';
import { Footer } from '@/components/footer/footer';

export const metadata: Metadata = { title: 'UIverse — Contacto', description: 'Cuéntame tu proyecto digital y recibe una primera orientación sobre diseño UX/UI y desarrollo Front-End.' };

export default function ContactoPage() {
  return <><SkipLink /><Header /><ContactPageContent /><Footer /></>;
}
