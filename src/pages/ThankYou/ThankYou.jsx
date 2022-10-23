import styles from './ThankYou.module.scss';
import useDocTitle from '../../hooks/useDocTitle';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

const ThankYou = () => {
  useDocTitle('Thank You');

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <SectionHeader text="Thank you for checking out this prototype" />
        <div className={styles.info}>
          <p>This section is currently a <strong>WIP</strong></p>
          <p>You can find more of my work on my <a href="https://danxschz.com" target="_blank" rel="noreferrer">portfolio</a></p>
          <p>Reach me at <a href="mailto:contact@danxschz.com">contact@danxschz.com</a> or <a href="https://www.linkedin.com/in/danxschz/" target="_blank" rel="noreferrer">in/danxschz</a></p>
        </div>
      </div>
    </main>
  );
}

export default ThankYou;
