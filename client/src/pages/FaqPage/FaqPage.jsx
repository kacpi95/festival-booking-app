import FaqContent from '../../components/features/FaqContent/FaqContent';
import FaqCtaSection from '../../components/features/FaqCtaSection/FaqCtaSection';
import FaqHero from '../../components/features/FaqHero/FaqHero';
import styles from './FaqPage.module.scss';

export default function FaqPage() {
  return (
    <main className={styles.page}>
      <FaqHero />
      <FaqContent />
      <FaqCtaSection />
    </main>
  );
}
