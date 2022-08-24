import styles from './Header.module.scss';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import openCart from '../../pages/Cart/openCart';
import IconButton from '../IconButton/IconButton';

const setFocusStyle = (e) => e.target.parentElement.classList.add(styles.focus);
const removeFocusStyle = (e) => e.target.parentElement.classList.remove(styles.focus);

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}><Link to="/" aria-label="Home"><img src={logo} alt="logo" /></Link><Link to="/">The Rage Lab</Link></div>
      <nav>
        <ul className={styles.nav}>
          <li className={styles['hvr-underline']}><Link to="/shop/cases">Cases</Link></li>
          <li className={styles['hvr-underline']}><Link to="/shop/collections">Collections</Link></li>
          <li className={styles['hvr-underline']}><Link to="/shop/accesories">Accesories</Link></li>
          <li className={styles['hvr-underline']}><Link to="/about-us">About Us</Link></li>
        </ul>
      </nav>
      <div className={styles.user}>
        <form>
          <label htmlFor="search">Search</label>
          <input type="search" id="search" placeholder="Search..." onFocus={setFocusStyle} onBlur={removeFocusStyle} />
          <IconButton scheme="scheme-primary_inv" icon="fa-solid fa-magnifying-glass" label="Search" hover="glow" />
        </form>
        <IconButton scheme="scheme-primary_inv" icon="fa-solid fa-user" label="User" hover="glow" />
        <IconButton scheme="scheme-primary_inv" icon="fa-solid fa-cart-shopping" label="Shopping Cart" hover="glow" onClick={openCart} />
      </div>
    </header>
  )
}

export default Header;
