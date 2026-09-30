import { LanguageProvider } from '@/components/language-provider';
import { es } from '@/translations/es';
import type { Metadata } from 'next';
import '@fontsource-variable/manrope';
import 'lenis/dist/lenis.css';
import './globals.css';
import { MotionProvider } from '@/components/motion-provider';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.uiverse.es'),
  title: es.seo.title,
  applicationName: 'UIverse',
  description: es.seo.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><LanguageProvider><MotionProvider>{children}</MotionProvider></LanguageProvider></body></html>;
}
