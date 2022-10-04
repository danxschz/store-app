import styles from './SearchBar.module.scss';
import IconButton from '../IconButton/IconButton';

const setFocusStyle = (e) => e.target.parentElement.classList.add(styles.focus);
const removeFocusStyle = (e) => e.target.parentElement.classList.remove(styles.focus);

const SearchBar = () => {
  return (
    <form className={styles.form}>
      <label htmlFor="search">Search</label>
      <input type="search" id="search" placeholder="Search..." onFocus={setFocusStyle} onBlur={removeFocusStyle} />
      <IconButton scheme="scheme-primary_inv" icon="fa-solid fa-magnifying-glass" label="Search" hover="glow" />
    </form>
  )
}

export default SearchBar;
