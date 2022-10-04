import styles from './InfoBar.module.scss';
import IconLink from '../IconLink/IconLink';

const InfoBar = () => {
  return (
    <div className={styles['info-bar']}>
      <div className={styles.content}>
        <div className={styles.socials}>
          <IconLink href="https://instagram.com" blank label="Instagram" scheme="scheme-primary" icon="fa-brands fa-instagram" hover="grow"/>
          <IconLink href="https://facebook.com" blank label="Facebook" scheme="scheme-primary" icon="fa-brands fa-facebook" hover="grow"/>
          <IconLink href="https://tiktok.com" blank label="TikTok" scheme="scheme-primary" icon="fa-brands fa-tiktok" hover="grow"/>
        </div>
        <div className={styles.info}>
          <strong>Free Shipping!</strong>
          <span>VE Orders <strong>$50+</strong></span>
          <span>Outside VE <strong>$100+</strong></span>
        </div>
        <div className={`${styles.socials} hidden`} aria-hidden="true">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-tiktok"></i>
        </div>
      </div>
    </div>
  )
}

export default InfoBar;
