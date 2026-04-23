import AlertBox from '../../components/ui/AlertBox/AlertBox';
import styles from './PricesPage.module.scss';
import pricePageInfoSection from '../../assets/price-page-info-section.png';
import TicketsHero from '../../components/features/TicketsHero/TicketsHero';
import PricingPlans from '../../components/features/PricingPlans/PricingPlans';

export default function PricesPage() {
  return (
    <div className={styles.page}>
      <TicketsHero />

      <div className={`container ${styles.content}`}>
        <AlertBox variant='info'>
          <strong>Good to know:</strong> Day 01 gives access to one festival
          day, Day 02 covers any two days, and Day 03 is the full 3-day pass.
        </AlertBox>

        <PricingPlans />

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
