import PromoCarousel from '../../components/features/PromoCarousel/PromoCarousel';
import Lineup from '../../components/features/Lineup/Lineup';
import styles from './HomePage.module.scss';
import ExperienceSection from '../../components/features/ExperienceSection/ExperienceSection';
import JoinPulseSection from '../../components/features/JoinPulseSection/JoinPulseSection';

export default function HomePage() {
  return (
    <div className={styles.homepage}>
      <PromoCarousel />
      <ExperienceSection />

      <section className={styles.lineupSection}>
        <div className='container'>
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>The Soundscape</span>
            <h2 className={styles.title}>Lineup</h2>
          </div>

          <Lineup />
        </div>
      </section>
      <JoinPulseSection />
    </div>
  );
}
