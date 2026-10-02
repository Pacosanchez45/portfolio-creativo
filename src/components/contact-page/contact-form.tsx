'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/components/language-provider';
import { ProjectTypeSelect } from './project-type-select';
import styles from './contact-page.module.css';
import { ArrowRight } from '@/components/ui/arrow-right';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
type Errors = Partial<Record<'name' | 'email' | 'projectType' | 'message', string>>;

export function ContactForm() {
  const { content: c } = useLanguage();
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Errors>({});
  const [projectType, setProjectType] = useState('');
  const startedAt = useRef(0);
  useEffect(() => { startedAt.current = Date.now(); }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = {
      name: String(data.get('name') ?? '').trim(), email: String(data.get('email') ?? '').trim(),
      projectType, message: String(data.get('message') ?? '').trim(),
      website: String(data.get('website') ?? ''), startedAt: startedAt.current,
    };
    const nextErrors: Errors = {};
    if (values.name.length < 2) nextErrors.name = c.contactPage.validation.name;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) nextErrors.email = c.contactPage.validation.email;
    if (!values.projectType) nextErrors.projectType = c.contactPage.validation.type;
    if (values.message.length < 10) nextErrors.message = c.contactPage.validation.message;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus('submitting');
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) });
      if (!response.ok) throw new Error('send-failed');
      form.reset(); setProjectType(''); startedAt.current = Date.now(); setStatus('success');
    } catch { setStatus('error'); }
  }

  const errorId = (name: keyof Errors) => errors[name] ? `${name}-error` : undefined;
  return <form className={styles.form} onSubmit={submit} noValidate>
    <div className={styles.honeypot} aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
    <div className={styles.field}>
      <label htmlFor="name">{c.contactPage.fields.name}</label><input id="name" name="name" type="text" autoComplete="name" placeholder={c.contactPage.fields.namePlaceholder} required aria-invalid={Boolean(errors.name)} aria-describedby={errorId('name')} />
      {errors.name && <span id="name-error" className={styles.fieldError}>{errors.name}</span>}
    </div>
    <div className={styles.field}>
      <label htmlFor="email">{c.contactPage.fields.email}</label><input id="email" name="email" type="email" inputMode="email" autoComplete="email" placeholder={c.contactPage.fields.emailPlaceholder} required aria-invalid={Boolean(errors.email)} aria-describedby={errorId('email')} />
      {errors.email && <span id="email-error" className={styles.fieldError}>{errors.email}</span>}
    </div>
    <div className={styles.field}>
      <label id="project-type-label">{c.contactPage.fields.type}</label>
      <ProjectTypeSelect labelId="project-type-label" options={c.contactPage.projectTypes} placeholder={c.contactPage.fields.typePlaceholder} value={projectType} invalid={Boolean(errors.projectType)} describedBy={errorId('projectType')} onChange={value => { setProjectType(value); setErrors(current => ({ ...current, projectType: undefined })); }} />
      {errors.projectType && <span id="projectType-error" className={styles.fieldError}>{errors.projectType}</span>}
    </div>
    <div className={styles.field}>
      <label htmlFor="message">{c.contactPage.fields.message}</label><textarea id="message" name="message" rows={7} required aria-invalid={Boolean(errors.message)} aria-describedby={errorId('message')} />
      {errors.message && <span id="message-error" className={styles.fieldError}>{errors.message}</span>}
    </div>
    <button className={styles.submit} type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? c.contactPage.sending : c.contactPage.submit}<span aria-hidden="true"><ArrowRight /></span></button>
    <p className={styles.legal}>{c.contactPage.legal}</p>
    <p className={`${styles.formStatus} ${status === 'success' ? styles.success : ''}`} aria-live="polite">{status === 'success' ? c.contactPage.success : status === 'error' ? c.contactPage.error : ''}</p>
  </form>;
}
