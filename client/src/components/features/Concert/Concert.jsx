import styles from './Concert.module.scss';

export default function Concert({ performer, price, genre, day, image }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img className={styles.image} src={image} alt={performer} />
        <div className={styles.imageOverlay} />

        <div className={styles.topMeta}>
          <span className={styles.dayBadge}>Day {day}</span>
        </div>
      </div>

      <div className={styles.body}>
        <p className={styles.genre}>{genre}</p>
        <h3 className={styles.title}>{performer}</h3>

        <div className={styles.footerRow}>
          <span className={styles.price}>${price}</span>
          <span className={styles.ticketBadge}>Live show</span>
        </div>
      </div>
    </article>
  );
}
