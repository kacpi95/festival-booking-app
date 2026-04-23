import OrderTicketForm from '../../components/features/OrderTicketForm/OrderTicketForm';
import styles from './OrderPage.module.scss';

export default function OrderPage() {
  return (
    <div className={styles.page}>
      <div className='container'>
        <header className={styles.header}>
          <div className={styles.heading}>
            <h1 className={styles.title}>Secure Your Pulse.</h1>
            <p className={styles.lead}>
              Complete your booking for the main stage arena. Choose a day, pick
              an available seat, and confirm your reservation in just a few
              steps.
            </p>
          </div>

          <div className={styles.steps} aria-label='Booking steps'>
            <div className={styles.step}>
              <span className={styles.stepNum}>1</span>
              <span>Select day</span>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>2</span>
              <span>Choose seat</span>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>3</span>
              <span>Confirm details</span>
            </div>
          </div>
        </header>

        <OrderTicketForm />
      </div>
    </div>
  );
}