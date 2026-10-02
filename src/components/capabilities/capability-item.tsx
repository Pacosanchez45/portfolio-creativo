import type { Capability } from '@/data/capabilities';
import { ArrowRight } from '@/components/ui/arrow-right';
import styles from './capabilities.module.css';

export function CapabilityItem({ capability }: { capability: Capability }) {
  return <li className={styles.row} data-capability>
    <span className={styles.rule} data-cap-rule aria-hidden="true" />
    <span className={styles.number} data-cap-number>{capability.number}</span>
    <h3 className={styles.name}><span className={styles.mask}><span data-cap-name><span className={styles.hoverName}>{capability.name}</span></span></span></h3>
    <p className={styles.description} data-cap-description>{capability.description}</p>
    <span className={styles.arrow} aria-hidden="true"><ArrowRight /></span>
  </li>;
}
