import AlertBox from '../../components/ui/AlertBox/AlertBox';
import styles from './PricesPage.module.scss';
import TicketsHero from '../../components/features/TicketsHero/TicketsHero';
import PricingPlans from '../../components/features/PricingPlans/PricingPlans';
import TicketInfoSection from '../../components/features/TicketInfoSection/TicketInfoSection';

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

        <TicketInfoSection />
      </div>
    </div>
  );
}
