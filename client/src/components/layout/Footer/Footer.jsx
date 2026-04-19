import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandBlock}>
          <h3 className={styles.brand}>NEW WAVE</h3>
          <small className={styles.copy}>
            © 2026 New Wave Festival. All rights reserved.
          </small>
        </div>

        <div className={styles.links}>
          <a href='/'>Privacy</a>
          <a href='/'>Terms</a>
          <a href='/'>Contact</a>
        </div>
      </div>
    </footer>
  );
}
