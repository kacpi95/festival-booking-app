import { Link } from 'react-router-dom';

import styles from './FaqCtaSection.module.scss';

export default function FaqCtaSection() {
  return (
    <section className={styles.ctaSection}>
      <div className='container'>
        <div className={styles.ctaCard}>
          <h2>
            Still have <span>questions?</span>
          </h2>
          <p>
            Our team is available before and during the event to help with
            tickets, venue access, and booking issues.
          </p>

          <div className={styles.ctaActions}>
            <Link to='/order-a-ticket' className={styles.primaryButton}>
              Book Tickets
            </Link>
            <a
              href='mailto:support@newwavefest.pl'
              className={styles.secondaryButton}
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
