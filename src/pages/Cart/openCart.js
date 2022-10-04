import styles from './Cart.module.scss';

const openCart = () => {
  const cart = document.querySelector('#cart');
  const overlay = document.querySelector('#overlay-cart');
  const body = document.body;

  // Hide body scrollbar to avoid double scrollbar in case the cart has vertical overflow
  const scrollbarWidth = (window.innerWidth - document.body.clientWidth) + 'px';
  body.style = `overflow: hidden; padding-right: ${scrollbarWidth}`;

  // Open cart
  overlay.style.height = 'auto';
  overlay.style.opacity = 0.8;
  cart.classList.add(styles.cart_open);
}

const closeCart = () => {
  const cart = document.querySelector('#cart');
  const overlay = document.querySelector('#overlay-cart');
  const body = document.body;

  cart.classList.remove(styles.cart_open);
  overlay.style.opacity = 0;

  // Wait for opacity transition to finish before removing height
  setTimeout(() => {
    overlay.style.height = 0;
    body.removeAttribute('style');
  }, 500);
}

export default openCart;
export { closeCart };
