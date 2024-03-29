import styles from './Home.module.scss';
import assets from './assets';
import useDocTitle from '../../hooks/useDocTitle';
import Banner from './Banner/Banner';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CollectionCard from '../../components/CollectionCard/CollectionCard';
import ButtonLink from '../../components/ButtonLink/ButtonLink';
import Item from '../../components/Item/Item';

const Home = (props) => {
  const{ collections, cases } = props;
  useDocTitle();

  return (
    <main className={styles.main}>
      <Banner text="Phone cases built for the bold" btnText="Shop Now" scheme="scheme-light" hover="outline-light" href="/shop/cases" banner={assets.banner} />
      <div className={styles.collections}>
        <SectionHeader text="Popular Collections" href="/shop/collections" />
        <div className={styles.cards}>
          <CollectionCard collection={collections.find(i => i.id === 'nar')} />
          <CollectionCard collection={collections.find(i => i.id === 'dsl')} />
          <CollectionCard collection={collections.find(i => i.id === 'aot')} />
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.info}>
          <h2>Made to Protect</h2>
          <p>Protective. Inspiring. Unlimited style.</p>
          <ButtonLink href="/about-us" text="About Us" scheme="scheme-primary" hover="outline-light" />
        </div>
        <div><img src={assets.phoneCase} alt="phone case"/></div>
      </div>
      <div className={styles.trending}>
        <SectionHeader text="Trending Now" />
        <div className={styles.cases}>
          <Item item={cases.find(i => i.id === 'aot-02')} />
          <Item item={cases.find(i => i.id === 'sxf-01')} />
          <Item item={cases.find(i => i.id === 'sgh-01')} />
          <Item item={cases.find(i => i.id === 'jjk-02')} />
        </div>
      </div>
    </main>
  )
}

export default Home;
