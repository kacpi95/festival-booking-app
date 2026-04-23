import styles from './JoinPulseSection.module.scss';

export default function JoinPulseSection() {
  return (
    <section className={styles.section}>
      <div className='container'>
        <div className={styles.card}>
          <h2 className={styles.title}>Join the Pulse</h2>

          <p className={styles.text}>
            Get early access to secret stage locations, artist meetups, and
            limited edition merch drops.
          </p>

          <form className={styles.form}>
            <input
              type='email'
              placeholder='Enter your email'
              aria-label='Email address'
              className={styles.input}
            />
            <button type='submit' className={styles.button}>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
