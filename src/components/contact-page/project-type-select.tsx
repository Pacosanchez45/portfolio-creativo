'use client';

import { KeyboardEvent, useEffect, useId, useRef, useState } from 'react';
import styles from './contact-page.module.css';

type Option = { value: string; label: string };

interface ProjectTypeSelectProps {
  labelId: string;
  options: Option[];
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  invalid: boolean;
  describedBy?: string;
}

export function ProjectTypeSelect({ labelId, options, placeholder, value, onChange, invalid, describedBy }: ProjectTypeSelectProps) {
  const [open, setOpen] = useState(false);
  const selectedIndex = Math.max(0, options.findIndex(option => option.value === value));
  const [activeIndex, setActiveIndex] = useState(selectedIndex);
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const listboxId = useId();
  const selected = options.find(option => option.value === value);

  useEffect(() => {
    const close = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, []);

  const select = (index: number) => {
    onChange(options[index].value);
    setActiveIndex(index);
    setOpen(false);
    button.current?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (!open) setOpen(true);
      else setActiveIndex(current => (current + (event.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length);
    } else if (event.key === 'Home' && open) {
      event.preventDefault(); setActiveIndex(0);
    } else if (event.key === 'End' && open) {
      event.preventDefault(); setActiveIndex(options.length - 1);
    } else if ((event.key === 'Enter' || event.key === ' ') && open) {
      event.preventDefault(); select(activeIndex);
    } else if (event.key === 'Escape' && open) {
      event.preventDefault(); setOpen(false);
    }
  };

  return <div ref={root} className={`${styles.customSelect} ${open ? styles.selectOpen : ''}`}>
    <input type="hidden" name="projectType" value={value} />
    <button
      ref={button}
      type="button"
      className={styles.selectTrigger}
      role="combobox"
      aria-haspopup="listbox"
      aria-expanded={open}
      aria-required="true"
      aria-controls={listboxId}
      aria-labelledby={labelId}
      aria-activedescendant={open ? `${listboxId}-${activeIndex}` : undefined}
      aria-invalid={invalid}
      aria-describedby={describedBy}
      onClick={() => { if (!open) setActiveIndex(value ? selectedIndex : 0); setOpen(current => !current); }}
      onKeyDown={onKeyDown}
    >
      <span className={selected ? '' : styles.selectPlaceholder}>{selected?.label ?? placeholder}</span>
      <span className={styles.selectArrow} aria-hidden="true">↓</span>
    </button>
    {open && <ul id={listboxId} className={styles.selectList} role="listbox" aria-labelledby={labelId}>
      {options.map((option, index) => <li
        id={`${listboxId}-${index}`}
        key={option.value}
        role="option"
        aria-selected={value === option.value}
        className={`${styles.selectOption} ${activeIndex === index ? styles.selectOptionActive : ''}`}
        onPointerMove={() => setActiveIndex(index)}
        onClick={() => select(index)}
      >
        <span>{String(index + 1).padStart(2, '0')}</span>{option.label}<i aria-hidden="true" />
      </li>)}
    </ul>}
  </div>;
}
