import styles from './PricingPlans.module.scss';
import PRICES from '../../../data/ticketPlans';
import { Link } from 'react-router-dom';

export default function PricingPlans() {
  return (
    <section
      className={styles.pricingSection}
      aria-label='Festival ticket plans'
    >
      <div className={styles.grid}>
        {PRICES.map(
          ({
            id,
            label,
            title,
            price,
            oldPrice,
            description,
            features,
            accent,
          }) => (
            <article key={id} className={`${styles.card} ${styles[accent]}`}>
              <span className={styles.planLabel}>{label}</span>

              <div className={styles.cardInner}>
                <h2 className={styles.cardTitle}>{title}</h2>

                <div className={styles.priceRow}>
                  <span className={styles.price}>${price}</span>
                  <span className={styles.oldPrice}>${oldPrice}</span>
                </div>

                <p className={styles.description}>{description}</p>

                <div className={styles.featuresBlock}>
                  <h3 className={styles.featuresTitle}>Included access:</h3>

                  <ul className={styles.list}>
                    {features.map((feature) => (
                      <li key={feature} className={styles.listItem}>
                        <span className={styles.dot} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to='/order-a-ticket' className={styles.cta}>
                  Select Ticket
                </Link>
              </div>
            </article>
          ),
        )}
      </div>
    </section>
  );
}
