import styles from './ItemDetail.module.scss';
import { useState, useEffect } from 'react';
import useDocTitle from '../../hooks/useDocTitle';
import { useParams } from 'react-router-dom';
import Form from './Form/Form';

const ItemDetail = (props) => {
  const { id } = useParams();
  const { cart, setCart } = props;
  const [item, setItem] = useState({});

  useEffect(() => {
    getItem();
  }, []); // eslint-disable-line

  const getItem = async () => {
    const response = await fetch(`https://store-app-api-production.up.railway.app/cases/${id}`);
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
          <Form item={item} id={id} collection={collection} addItem={addItem} />
        </div>
      </div>
    </main>
  );

  else return null;
}

export default ItemDetail;
