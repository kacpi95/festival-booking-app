import { Link } from 'react-router-dom';
import styles from './PromoCarousel.module.scss';
import bgc from '../../../assets/bgc.jpg';

export default function PromoCarousel() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img src={bgc} alt='Crowd enjoying New Wave Festival concert' />
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.textBlock}>
          <span className={styles.badge}>New Wave Festival 2026</span>

          <h1 className={styles.title}>
            Feel the
            <br />
            electric
            <br />
            rhythm
          </h1>

          <p className={styles.description}>
            Dive into three unforgettable days of live music, immersive visuals,
            and high-energy performances from the hottest artists on the scene.
          </p>

          <div className={styles.actions}>
            <Link to='/order-a-ticket' className={styles.primaryButton}>
              Get Tickets
            </Link>
            <Link to='/prices' className={styles.secondaryButton}>
              View Prices
            </Link>
          </div>
        </div>

        <div className={styles.bottomInfo}>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Location</span>
            <span className={styles.infoValue}>Warsaw, Poland</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Dates</span>
            <span className={styles.infoValue}>Aug 21–23, 2026</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Experience</span>
            <span className={styles.infoValue}>Music • Lights • Energy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
