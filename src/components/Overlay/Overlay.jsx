import styles from './Overlay.module.scss';

const Overlay = (props) => {
  const { id, onClick } = props;

  return <div id={id} className={styles.overlay} onClick={onClick}></div>
}

export default Overlay;
