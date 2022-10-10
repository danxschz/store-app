import styles from './Cases.module.scss';
import useDocTitle from '../../hooks/useDocTitle';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Item from '../../components/Item/Item';

const Cases = (props) => {
  const { cases } = props;
  useDocTitle('Cases');

  return (
    <main>
      <div className={styles.content}>
        <div className={styles.header}>
          <SectionHeader text="All Cases" />
        </div>
        <div className={styles.cases}>
          {cases.map((item) => {
            return <Item item={item} key={item.id} />
          })}
        </div>
      </div>
    </main>
  );
}

export default Cases;
