import styles from './IconButton.module.scss';

const IconButton = (props) => {
  const { scheme, icon, hover, label, onClick, dataIndex } = props;

  return (
    <button className={`${styles.btn} ${scheme} ${styles[`hvr-${hover}`]}`} aria-label={label} onClick={onClick} data-index={dataIndex}>
      <i className={icon}></i>
    </button>
  )
}

export default IconButton;
