import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { ProjectsPageContent } from '@/components/projects-page/projects-page';
import { SkipLink } from '@/components/skip-link';
import { Footer } from '@/components/footer/footer';

export const metadata: Metadata = { title: 'UIverse — Proyectos', description: 'Selección completa de proyectos de UX/UI, producto digital y desarrollo Front-End.' };

export default function ProyectosPage() {
  return <><SkipLink /><Header /><ProjectsPageContent /><Footer /></>;
}
