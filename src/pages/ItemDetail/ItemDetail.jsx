import styles from './ItemDetail.module.scss';
import accessories from '../../data/accessories.json';
import { useState, useEffect } from 'react';
import useDocTitle from '../../hooks/useDocTitle';
import { useParams } from 'react-router-dom';
import Form from './Form/Form';

const ItemDetail = (props) => {
  const { id } = useParams();
  const { cart, setCart, accessory } = props;
  const [item, setItem] = useState({});

  useEffect(() => {
    if (accessory) setItem(accessories.find((i) => i.id === id));
    else getItem();
  }, []) // eslint-disable-line

  const getItem = async () => {
    const type = (accessory) ? 'accessories' : 'cases'
    const response = await fetch(`https://store-app-api-production.up.railway.app/${type}/${id}`);
    const json = await response.json();
    setItem(json);
  }

  const { img, name, price, collection_obj } = item;
  const collection = (collection_obj) ? collection_obj.name : undefined;

  const addItem = (item) => {
    setCart([...cart, item]);
  }

  const title = (name) ? `${name} Case` : 'Loading';
  useDocTitle(title);

  if (name) return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.img}><img src={img} alt={`${name} case`} /></div>
        <div className={styles.info}>
          <div>
            <div className={styles.collection}>{collection}</div>
            <h1 className={styles.name}>{name}</h1>
            <div className={styles.price}>{`$${price} USD`}</div>
          </div>
          <Form item={item} id={id} collection={collection} addItem={addItem} accessory={(accessory) ? true : false} />
        </div>
      </div>
    </main>
  );

  else return null;
}

export default ItemDetail;
