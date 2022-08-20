import styles from './Form.module.scss';
import scss from '../../../assets/_shared.module.scss';
import phoneDevices from '../../../data/devices';
import { useState } from 'react';
import openCart from '../../Cart/openCart';
import QuantityInput from '../../../components/QuantityInput/QuantityInput';
import Button from '../../../components/Button/Button';
import { useEffect } from 'react';

const Form = (props) => {
  const { item, id, addItem } = props;

  const [devices, setDevices] = useState(phoneDevices.apple);
  const changeDevices = (e) => {
    setDevices(phoneDevices[e.target.value]);
  }

  useEffect(() => {
    changeDevice();
  }, [devices]); // eslint-disable-line

  const [order, setOrder] = useState({ device: 'iPhone 13', quantity: 1 });

  const changeDevice = () => {
    const value = document.querySelector('#device').value;
    setOrder({ ...order, device: value });
  }

  const changeQuantity = (quantity) => {
    setOrder({ ...order, quantity });
  }

  const handleAddItem = (e) => {
    e.preventDefault();
    const newItem = {
      id: id,
      price: item.price,
      device: order.device,
      quantity: order.quantity,
    }
    addItem(newItem);
    openCart();
  }

  return (
    <form className={styles.form} onSubmit={handleAddItem}>
      <div className={styles.input}>
        <label htmlFor="brand">Brand</label>
        <select id="brand" defaultValue="apple" onChange={changeDevices}>
          <option value="apple" >Apple</option>
          <option value="samsung">Samsung</option>
          <option value="xiaomi">Xiaomi</option>
        </select>
      </div>
      <div className={styles.input}>
        <label htmlFor="device">Device</label>
        <select id="device" onChange={changeDevice}>
          {devices.map((device, i) => {
            return <option value={device} key={i}>{device}</option>
          })}
        </select>
      </div>
      <QuantityInput onChange={changeQuantity} />
      <Button text="Add to Cart" scheme={scss.schemePrimary} hover="glow" />
    </form>
  )
}

export default Form;
