import styles from './Cases.module.scss';
import cases from '../../data/cases';
import useDocTitle from '../../hooks/useDocTitle';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Item from '../../components/Item/Item';

const Cases = () => {
  useDocTitle('Cases');

  return (
    <main>
      <div className={styles.content}>
        <div className={styles.header}>
          <SectionHeader text="All Cases" />
        </div>
        <div className={styles.cases}>
          {Object.entries(cases).map(([key, value]) => {
            return <Item case={value} id={key} key={key} />
          })}
        </div>
      </div>
    </main>
  );
}

export default Cases;
