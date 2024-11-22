import css from './NavLinks.module.css';

const NavLinks = () => {
  const homeworks = [
    'Homework 1',
    'Homework 2',
    'Homework 3',
    'Homework 4',
    'Homework 5',
  ];

  return (
    <ul className={css.navLinks}>
      {homeworks.map(homework => (
        <li>
          <a href="/">{homework}</a>
          {/* {homework} */}
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
