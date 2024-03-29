import styles from './CartContent.module.scss';
import { closeCart } from '../openCart';
import CartItem from '../CartItem/CartItem';
import ButtonLink from '../../../components/ButtonLink/ButtonLink';

const CartContent = (props) => {
  const { cart, removeItem, changeQuantity } = props;
  const { subtotal, shipping, total } = props.summary;

  return (
    <div className={styles.content}>
      <div className={styles.items}>
        {cart.map((item, i) => {
          return <CartItem item={item} key={item.id} dataIndex={i} removeItem={removeItem} changeQuantity={changeQuantity} />
        })}
      </div>
      <div className={styles.summary}>
        <div><span>Subtotal</span><span>{`$${subtotal} USD`}</span></div>
        <div><span>Shipping</span><span>{(shipping === 0) ? 'FREE' : `$${shipping} USD`}</span></div>
        <div><span>Total</span><span>{`$${total} USD`}</span></div>
      </div>
      <div className={styles.btn}><ButtonLink href="/checkout" text="Continue to Checkout" scheme="scheme-primary" hover="glow" onClick={closeCart} /></div>
    </div>
  )
}

export default CartContent;
