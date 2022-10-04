import styles from './SearchBar.module.scss';
import IconButton from '../IconButton/IconButton';

const setFocusStyle = (e) => e.target.parentElement.classList.add(styles.focus);
const removeFocusStyle = (e) => e.target.parentElement.classList.remove(styles.focus);

const SearchBar = (props) => {
  return (
    <form className={styles.form}>
      <label htmlFor={props.id}>Search</label>
      <input type="search" id={props.id} placeholder="Search..." onFocus={setFocusStyle} onBlur={removeFocusStyle} />
      <IconButton scheme="scheme-primary_inv" icon="fa-solid fa-magnifying-glass" label="Search" hover="glow" />
    </form>
  )
}

export default SearchBar;
