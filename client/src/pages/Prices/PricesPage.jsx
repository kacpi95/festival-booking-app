import { Link } from 'react-router-dom';

import AlertBox from '../../components/ui/AlertBox/AlertBox';
import styles from './PricesPage.module.scss';
import pricePageInfoSection from '../../assets/price-page-info-section.png';
import TicketsHero from '../../components/features/TicketsHero/TicketsHero';
import PRICES from '../../data/ticketPlans';

export default function PricesPage() {
  return (
    <div className={styles.page}>
      <TicketsHero />

      <div className={`container ${styles.content}`}>
        <AlertBox variant='info'>
          <strong>Good to know:</strong> Day 01 gives access to one festival
          day, Day 02 covers any two days, and Day 03 is the full 3-day pass.
        </AlertBox>

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
                <article
                  key={id}
                  className={`${styles.card} ${styles[accent]}`}
                >
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

        <section className={styles.infoSection} aria-label='Ticket information'>
          <h2 className={styles.sectionTitle}>Good to know</h2>

          <div className={styles.infoGrid}>
            <article className={`${styles.infoCard} ${styles.infoLarge}`}>
              <div className={styles.infoImageWrap}>
                <img
                  src={pricePageInfoSection}
                  alt='Festival seating area'
                  className={styles.infoImage}
                />
                <div className={styles.infoOverlay} />
              </div>

              <div className={styles.infoContent}>
                <h3 className={styles.infoTitle}>Dynamic Seat Selection</h3>
                <p className={styles.infoText}>
                  All standard tickets include access to the general standing
                  area. VIP upgrades and selected reserved zones may be
                  available during checkout depending on ticket type.
                </p>
              </div>
            </article>

            <div className={styles.infoSide}>
              <article className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Payment Flexibility</h3>
                <p className={styles.infoText}>
                  We accept major credit cards and digital payments. Installment
                  options may be available for full 3-day passes.
                </p>
              </article>

              <div className={styles.infoMiniGrid}>
                <article
                  className={`${styles.infoCard} ${styles.infoAccentPink}`}
                >
                  <h3 className={styles.infoTitle}>Easy Refund</h3>
                  <p className={styles.infoText}>
                    Cancellation requests can be submitted up to 14 days before
                    the event for eligible ticket types.
                  </p>
                </article>

                <article
                  className={`${styles.infoCard} ${styles.infoAccentCyan}`}
                >
                  <h3 className={styles.infoTitle}>24/7 Support</h3>
                  <p className={styles.infoText}>
                    Our team is available online to help with booking questions,
                    seat issues, and ticket access.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
