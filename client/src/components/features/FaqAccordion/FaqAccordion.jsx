import { useState } from 'react';
import styles from './FaqAccordion.module.scss';

export default function FaqAccordion({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.item}>
      <button
        type='button'
        className={styles.question}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className={styles.icon}>{open ? '−' : '+'}</span>
      </button>

      {open && (
        <div className={styles.answer}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
