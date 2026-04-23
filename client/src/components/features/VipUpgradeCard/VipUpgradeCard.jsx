import styles from './VipUpgradeCard.module.scss';
import orderTicketImage from '../../../assets/order-ticket-image.png';

export default function VipUpgradeCard() {
  return (
    <article className={styles.vipCard}>
      <img
        src={orderTicketImage}
        alt='Festival VIP backstage atmosphere'
        className={styles.vipImage}
      />
      <div className={styles.vipOverlay} />
      <div className={styles.vipContent}>
        <span className={styles.vipLabel}>VIP Perk</span>
        <h3 className={styles.vipTitle}>Upgrade to Backstage Pass</h3>
      </div>
    </article>
  );
}
