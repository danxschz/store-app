import styles from './Collection.module.scss';
import cases from '../../data/cases';
import collections from '../../data/collections';
import { useLocation } from 'react-router-dom';
import useDocTitle from '../../hooks/useDocTitle';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Item from '../../components/Item/Item';

const Collection = () => {
  const { state } = useLocation();
  const id = state.id;

  const collection = collections[id];
  const collectionItems = collection.items;

  useDocTitle(`${collection.name} Cases`);

  return (
    <main>
      <div className={styles.content}>
        <div className={styles.header}>
          <SectionHeader text={`${collection.name} Cases`} />
        </div>
        <div className={styles.cases}>
          {collectionItems.map((key) => {
            return <Item case={cases[key]} id={key} key={key} />
          })}
        </div>
      </div>
    </main>
  );
}

export default Collection;
