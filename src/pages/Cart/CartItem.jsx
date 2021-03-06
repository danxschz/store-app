import styles from './CartItem.module.scss';
import scss from '../../assets/_shared.module.scss';
import IconButton from '../../components/IconButton';
import QuantityInput from '../../components/QuantityInput';

const CartItem = (props) => {
  const { img, name, device, collection, quantity, price } = props.item;
  const { dataIndex, removeItem, changeQuantity } = props;

  return (
    <div className={styles.item}>
      <img src={img} alt={name} />
      <div>
        <div className={styles.info}>
          <div className={styles.name}>
            <span>{name}</span>
            <IconButton icon="fa-solid fa-xmark" scheme={scss.schemeLight} hover="rotate-90" onClick={removeItem} dataIndex={dataIndex} />
          </div>
          <div>{device}</div>
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
