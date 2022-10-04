import styles from './MobileNav.module.scss';
import logo from '../../assets/logo.png';
import { closeNav } from './openNav';
import { Link } from 'react-router-dom';
import Overlay from '../Overlay/Overlay';
import SearchBar from '../SearchBar/SearchBar';

const MobileNav = () => {
  return (
    <div className={styles.content}>
      <Overlay id="overlay-nav" onClick={closeNav}/>
      <nav id="nav" className={styles.nav}>
        <div className={styles.logo}><Link to="/" aria-label="Home"><img src={logo} alt="logo" /></Link><Link to="/">The Rage Lab</Link></div>
        <ul>
          <li className={styles['hvr-underline']}><Link to="/shop/cases">Cases</Link></li>
          <li className={styles['hvr-underline']}><Link to="/shop/collections">Collections</Link></li>
          <li className={styles['hvr-underline']}><Link to="/shop/accesories">Accesories</Link></li>
          <li className={styles['hvr-underline']}><Link to="/about-us">About Us</Link></li>
        </ul>
        <SearchBar id="search-mobile"/>
      </nav>
    </div>
  )
}

export default MobileNav;
