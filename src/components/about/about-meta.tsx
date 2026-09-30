'use client';
import { useLanguage } from '@/components/language-provider';

import styles from './about.module.css';

export function AboutMeta() {
  const { content: c } = useLanguage();
  const about = c.aboutContent;
  return <dl className={styles.meta}>{about.meta.map((item, index) => <div key={index} data-about-meta><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>;
}
