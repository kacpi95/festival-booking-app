import AlertBox from '../../ui/AlertBox/AlertBox';
import Loader from '../../ui/Loader/Loader';
import styles from './BookingDetailsCard.module.scss';

export default function BookingDetailsCard({
  order,
  accepted,
  setAccepted,
  isError,
  addSeat,
  canSubmit,
  totalPrice,
  updateTextField,
  updateNumberField,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>Booking details</h2>
        <p className={styles.cardSub}>
          Complete the form and select your preferred seat.
        </p>
      </div>

      {isError && (
        <AlertBox variant='warning'>
          Please fill in your name and email, choose a seat, and accept the
          terms.
        </AlertBox>
      )}

      {addSeat?.error && !isError && (
        <AlertBox variant='warning'>{addSeat.error}</AlertBox>
      )}

      {addSeat?.success && !isError && (
        <AlertBox variant='success'>
          Your reservation has been saved. Check your email for the next steps.
        </AlertBox>
      )}

      {addSeat?.pending && <Loader />}

      <div className={styles.field}>
        <label className={styles.label} htmlFor='clientName'>
          Full name
        </label>
        <input
          id='clientName'
          className={styles.input}
          type='text'
          value={order.client}
          name='client'
          onChange={updateTextField}
          placeholder='Alex Rider'
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor='clientEmail'>
          Email address
        </label>
        <input
          id='clientEmail'
          className={styles.input}
          type='email'
          value={order.email}
          name='email'
          onChange={updateTextField}
          placeholder='alex@neonpulse.live'
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Select day</label>

        <div className={styles.dayTabs}>
          <label className={styles.dayOption}>
            <input
              type='radio'
              name='day'
              value={1}
              checked={order.day === 1}
              onChange={updateNumberField}
            />
            <span>Friday</span>
          </label>

          <label className={styles.dayOption}>
            <input
              type='radio'
              name='day'
              value={2}
              checked={order.day === 2}
              onChange={updateNumberField}
            />
            <span>Saturday</span>
          </label>

          <label className={styles.dayOption}>
            <input
              type='radio'
              name='day'
              value={3}
              checked={order.day === 3}
              onChange={updateNumberField}
            />
            <span>Sunday</span>
          </label>
        </div>
      </div>

      <div className={styles.summary}>
        <div className={styles.summaryRow}>
          <span className={styles.summaryLabel}>Selected seat:</span>
          <span className={styles.summaryValue}>
            {order.seat || 'Choose on the map'}
          </span>
        </div>

        <div className={styles.summaryRow}>
          <span className={styles.summaryLabel}>Total price:</span>
          <span className={styles.totalPrice}>
            {order.seat ? `$${totalPrice.toFixed(2)}` : '—'}
          </span>
        </div>
      </div>

      <label className={styles.checkboxRow}>
        <input
          className={styles.checkbox}
          type='checkbox'
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
        />
        <span>
          I agree to the <a href='/terms-and-conditions'>Terms</a> and{' '}
          <a href='/privacy-policy'>Privacy Policy</a>.
        </span>
      </label>

      <button className={styles.button} type='submit' disabled={!canSubmit}>
        Confirm Reservation
      </button>
    </div>
  );
}
