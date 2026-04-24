import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './MainMenu.module.scss';

export default function MainMenu() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  const navLinkClass = ({ isActive }) =>
    `${styles.navLink} ${isActive ? styles.active : ''}`;

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to='/' className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoAccent}>NEW</span> WAVE
        </Link>

        <button
          type='button'
          className={styles.burgerButton}
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls='main-navigation'
          aria-label='Toggle navigation'
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`${styles.navigationWrap} ${open ? styles.open : ''}`}
          id='main-navigation'
        >
          <nav className={styles.nav}>
            <NavLink to='/' end className={navLinkClass} onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink to='/prices' className={navLinkClass} onClick={closeMenu}>
              Tickets
            </NavLink>
            <NavLink
              to='/order-a-ticket'
              className={navLinkClass}
              onClick={closeMenu}
            >
              Book
            </NavLink>
            <NavLink to='/faq' className={navLinkClass} onClick={closeMenu}>
              FAQ
            </NavLink>
          </nav>

          <div className={styles.actions}>
            <Link
              to='/order-a-ticket'
              className={styles.ctaButton}
              onClick={closeMenu}
            >
              Get Tickets
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
