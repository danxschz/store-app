import styles from './SectionHeader.module.scss';
import { Link } from 'react-router-dom';

const SectionHeader = (props) => {
  const { text, href } = props;

  const style = { justifyContent: (href) ? 'space-between' : 'center'}

  const viewMoreHidden = (href) ? <Link to={href} className={`${styles.view} hidden`} aria-hidden="true"><span>View more</span><i className="fa-solid fa-angles-right"></i></Link> : null;
  const viewMore = (href) ? <Link to={href} className={styles.view}><span>View more</span><i className="fa-solid fa-angles-right"></i></Link> : null;

  return (
    <div className={styles.header} style={style}>
      {viewMoreHidden}
      <h2>{text}</h2>
      {viewMore}
    </div>
  )
}

export default SectionHeader;
