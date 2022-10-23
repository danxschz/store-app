import styles from './Accessories.module.scss';
import useDocTitle from '../../hooks/useDocTitle';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Item from '../../components/Item/Item';

const Accessories = (props) => {
  const { accessories } = props;
  useDocTitle('Accessories');

  return (
    <main>
      <div className={styles.content}>
        <div className={styles.header}>
          <SectionHeader text="All Accessories" />
        </div>
        <div className={styles.accessories}>
          {accessories.map((item) => {
            return <Item item={item} key={item.id} accessory />
          })}
        </div>
      </div>
    </main>
  );
}

export default Accessories;
