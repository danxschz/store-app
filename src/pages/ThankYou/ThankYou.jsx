import styles from './ThankYou.module.scss';
import useDocTitle from '../../hooks/useDocTitle';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

const ThankYou = () => {
  useDocTitle('Thank You');

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <SectionHeader text="Thank you for checking out my project" />
      </div>
      <div className={styles.content}>
        <p>This section is currently a <strong>WIP</strong></p>
        <p>You can find more of my work on <a href="https://github.com/danxschz" target="_blank" rel="noreferrer">GitHub</a></p>
        <p>Reach me at <a href="mailto:danxschz@gmail.com">danxschz@gmail.com</a> or <a href="https://www.linkedin.com/in/danxschz/" target="_blank" rel="noreferrer">in/danxschz</a></p>
      </div>
    </main>
  );
}

export default ThankYou;
