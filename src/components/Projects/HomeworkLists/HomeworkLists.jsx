import { Link } from 'react-router-dom';
import css from './HomeworkLists.module.css';

const HomeworkLists = () => {
  return (
    <div>
      <ul className={css.homeworkList}>
        <li>
          <button className={css.homeworkButton}>
            <span>
              <Link to="webstudio">HTML & CSS</Link>
            </span>
          </button>
        </li>

        <li>
          <button className={css.homeworkButton}>
            <span>
              <Link to="moviesearch">JAVASCRIPT</Link>
            </span>
          </button>
        </li>

        <li>
          <button className={css.homeworkButton}>
            <span>
              <Link to="phonebook">REACT JS</Link>
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default HomeworkLists;
