import styles from './TicketsHero.module.scss';
import pricePageHeroImage from '../../../assets/price-page-hero-image.png';

export default function TicketsHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <img src={pricePageHeroImage} alt='Festival crowd and stage' />
      </div>

      <div className={`container ${styles.heroContent}`}>
        <h1 className={styles.heroTitle}>Choose Your Vibe</h1>
        <p className={styles.heroText}>
          Limited access passes for one, two, or all three days of the Neon
          Pulse festival experience.
        </p>
      </div>
    </section>
  );
}
