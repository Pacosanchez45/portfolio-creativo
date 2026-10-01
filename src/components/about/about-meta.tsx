'use client';
import { useLanguage } from '@/components/language-provider';
import { contact } from '@/data/contact';

import styles from './about.module.css';

export function AboutMeta() {
  const { content: c } = useLanguage();
  const about = c.aboutContent;
  return <dl className={styles.meta}>
    {about.meta.map((item, index) => <div key={index} data-about-meta><dt>{item.label}</dt><dd>{item.value}</dd></div>)}
    <div data-about-meta>
      <dt>{about.company.label}</dt>
      <dd>
        <a className={styles.companyLink} href={contact.nami} target="_blank" rel="noopener noreferrer" aria-label={`${about.company.ariaLabel} (${c.footer.external})`}>
          <span><strong>{about.company.name}</strong><small>{about.company.description}</small></span>
          <span className={styles.companyArrow} aria-hidden="true">↗</span>
        </a>
      </dd>
    </div>
  </dl>;
}
