import styles from './FaqHero.module.scss';
import faqHero from '../../../assets/faq-hero.png';

export default function FaqHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImage}>
        <img src={faqHero} alt='Festival lasers and lights' />
      </div>

      <div className={`container ${styles.heroContent}`}>
        <h1 className={styles.title}>
          Know the <span>Pulse</span>
        </h1>
        <p className={styles.lead}>
          Everything you need to navigate the New Wave Festival experience.
        </p>
      </div>
    </section>
  );
}
