import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer/footer';
import { SkipLink } from '@/components/skip-link';
import { CaseStudyPage } from '@/components/case-study/case-study-page';
import { caseStudiesEs, caseStudySlugs, type CaseStudySlug } from '@/data/case-studies';

export function generateStaticParams() {
  return caseStudySlugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!caseStudySlugs.includes(slug as CaseStudySlug)) return {};
  const study = caseStudiesEs[slug as CaseStudySlug];
  return {
    title: `${study.title} — Caso de estudio | UIverse`,
    description: study.intro,
    alternates: { canonical: `https://www.uiverse.es/casos/${study.slug}` },
    openGraph: { type: 'article', url: `https://www.uiverse.es/casos/${study.slug}`, title: `${study.title} — UIverse`, description: study.intro, images: [{ url: study.heroImage.src }] },
  };
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!caseStudySlugs.includes(slug as CaseStudySlug)) notFound();
  return <><SkipLink /><Header /><CaseStudyPage slug={slug as CaseStudySlug} /><Footer /></>;
}
