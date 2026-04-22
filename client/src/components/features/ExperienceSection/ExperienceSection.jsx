import styles from './ExperienceSection.module.scss';
import Experience from '../../../assets/Experience.png';

export default function ExperienceSection() {
  return (
    <section className={styles.section}>
      <div className='container'>
        <div className={styles.grid}>
          <article className={styles.stageCard}>
            <img
              src={Experience}
              alt='Main festival stage'
              className={styles.stageImage}
            />

            <div className={styles.stageOverlay}>
              <span className={styles.stageLabel}>The Mainstage</span>
              <h2 className={styles.stageTitle}>Pulse Arena</h2>
            </div>
          </article>

          <div className={styles.sideColumn}>
            <article className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Immersive Experience</h3>
              <p className={styles.infoText}>
                Spatial audio, holographic visuals, and a 360-degree LED ceiling
                that syncs with the bass.
              </p>
            </article>

            <div className={styles.smallCards}>
              <article className={`${styles.smallCard} ${styles.vipCard}`}>
                <div className={styles.icon}>🎟</div>
                <h4 className={styles.smallTitle}>VIP Pass</h4>
                <p className={styles.smallText}>
                  Exclusive lounge access & fast lane entry.
                </p>
              </article>

              <article className={`${styles.smallCard} ${styles.cityCard}`}>
                <div className={styles.icon}>📍</div>
                <h4 className={styles.smallTitle}>City Center</h4>
                <p className={styles.smallText}>
                  Downtown Neon Hub, Tokyo Metropolis.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
