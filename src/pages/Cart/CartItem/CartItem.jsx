import styles from './CartItem.module.scss';
import IconButton from '../../../components/IconButton/IconButton';
import QuantityInput from '../../../components/QuantityInput/QuantityInput';

const CartItem = (props) => {
  const { dataIndex, removeItem, changeQuantity } = props;
  const { name, img, price, collection, device, quantity, accessory } = props.item;

  const style = (accessory) ? { visibility: 'hidden' } : {};

  return (
    <div className={styles.item}>
      <img src={img} alt={name} />
      <div>
        <div className={styles.info}>
          <div className={styles.name}>
            <span>{name}</span>
            <IconButton icon="fa-solid fa-xmark" scheme="scheme-light" hover="rotate-90" onClick={removeItem} dataIndex={dataIndex} />
          </div>
          <div style={style}>{device}</div>
          <div>{collection}</div>
        </div>
        <div className={styles.price}>
          <QuantityInput value={quantity} onChange={changeQuantity} dataIndex={dataIndex} />
          <span>{`$${price} USD`}</span>
        </div>
      </div>
    </div>
  )
}

export default CartItem;
