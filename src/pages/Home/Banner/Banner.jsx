import styles from './Banner.module.scss';
import ButtonLink from '../../../components/ButtonLink/ButtonLink';

const Banner = (props) => {
  const { text, btnText, scheme, hover, banner, href } = props;

  const style = {
    backgroundImage: `url(${banner})`,
  };

  return(
    <div className={styles.banner} style={style}>
      <div className={styles.content}>
        <h1>{text}</h1>
        <ButtonLink text={btnText} scheme={scheme} hover={hover} href={href} />
      </div>
    </div>
  )
}

export default Banner;
