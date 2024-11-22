import aboutImage from '../../images/about-2.png';
import { Socials } from '../Socials/Socials';
import css from './Homepage.module.css';
import { homePage } from '../../data/home';

const Homepage = () => {
  const { name, position, country } = homePage;
  return (
    <div className={css.homeContainer}>
      <div className={css.homeDetails}>
        <h1 className={css.homeName}>{name}</h1>
        <p className={css.homeText}>
          I am a {position} from {country}.
        </p>
        {/* Social Links Component */}
        <Socials />
      </div>

      <img
        className={css.homeImage}
        src={aboutImage}
        alt={name}
        width="400"
        height="500"
      />
    </div>
  );
};

export default Homepage;
