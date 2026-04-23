import { Link } from 'react-router-dom';

import styles from './PromoCarousel.module.scss';
import homeHeroImage from '../../../assets/home-hero-image.jpg';

export default function PromoCarousel() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img src={homeHeroImage} alt='Crowd enjoying New Wave Festival concert' />
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.textBlock}>
          <span className={styles.badge}>New Wave Festival 2026</span>

          <h1 className={styles.title}>
            FEEL THE
            <br />
            <span className={styles.logoAccent}>ELECTRIC</span>
            <br />
            RHYTHM
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
      </div>
    </section>
  );
}
