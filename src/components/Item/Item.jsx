import styles from './Item.module.scss';
import { Link } from 'react-router-dom';

const Item = (props) => {
  const { item, accessory } = props;
  const { id, img, name, price, collection_obj } = item || {};
  const collection = (collection_obj) ? collection_obj.name : undefined;

  return (
    <Link to={`/shop/${(accessory) ? 'accessories': 'cases'}/${id}`} className={styles.link}>
      <div className={styles.item}>
        <img src={img} alt={`${name} case`}/>
        <div className={styles.collection}>{collection}</div>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{`$${price} USD`}</div>
      </div>
    </Link>
  )
}

export default Item;
