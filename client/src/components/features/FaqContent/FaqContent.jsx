import styles from './FaqContent.module.scss';
import faqData from '../../../data/faqData.js';
import faqContentImage from '../../../assets/faq-content-image.png';
import FaqAccordion from '../FaqAccordion/FaqAccordion.jsx';

export default function FaqContent() {
  return (
    <section className={`container ${styles.content}`}>
      <aside className={styles.sidebar}>
        <span className={styles.sidebarLabel}>Categories</span>

        <nav className={styles.categoryList} aria-label='FAQ categories'>
          {faqData.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              {section.label}
            </a>
          ))}
        </nav>

        <div className={styles.mapCard}>
          <img src={faqContentImage} alt='Festival map preview' />
          <div>
            <span>Main grounds</span>
            <p>Stage, gates and service points.</p>
          </div>
        </div>
      </aside>

      <div className={styles.sections}>
        {faqData.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className={`${styles.faqSection} ${styles[section.accent]}`}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.line} />
              <h2>{section.label}</h2>
            </div>

            <div className={styles.accordions}>
              {section.items.map((item) => (
                <FaqAccordion
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
