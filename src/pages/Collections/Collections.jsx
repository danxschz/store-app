import styles from './Collections.module.scss';
import useDocTitle from '../../hooks/useDocTitle';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CollectionCard from '../../components/CollectionCard/CollectionCard';

const Collections = (props) => {
  const { collections } = props;
  useDocTitle('Collections');
  
  return (
    <main>
      <div className={styles.content}>
        <div className={styles.header}><SectionHeader text="Collections" /></div>
        <div className={styles.collections}>
          {collections.map((collection) => {
            return <CollectionCard collection={collection} key={collection.id} />
          })}
        </div>
      </div>
    </main>
  )
}

export default Collections;
