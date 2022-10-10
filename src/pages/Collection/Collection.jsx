import styles from './Collection.module.scss';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useDocTitle from '../../hooks/useDocTitle';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Item from '../../components/Item/Item';

const Collection = () => {
  const { state } = useLocation();
  const id = state.id;

  const [collection, setCollection] = useState({});

  useEffect(() => {
    getCollection();
  }, []); // eslint-disable-line

  const getCollection = async () => {
    const response = await fetch(`https://store-app-api-production.up.railway.app/collections/${id}`);
    const json = await response.json();
    setCollection(json);
  }

  const { name, cases } = collection

  const title = (name) ? `${name} Cases` : 'Loading';
  useDocTitle(title);

  if (name) return (
    <main>
      <div className={styles.content}>
        <div className={styles.header}>
          <SectionHeader text={`${name} Cases`} />
        </div>
        <div className={styles.cases}>
          {cases.map((item) => {
            return <Item item={item} key={item.id} />
          })}
        </div>
      </div>
    </main>
  );
  
  else return null;
}

export default Collection;
