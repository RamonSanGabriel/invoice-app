import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import { useToggle } from '../../hooks/useToggle';
import { MdOutlineMenu } from 'react-icons/md';
import Sidebar from '../Sidebar/Sidebar';

const Header = () => {
  const { isOpen: isSidebarOpen, toggle: toggleSidebar } = useToggle(false);
  return (
    <header className={css.headerContainer}>
      <nav className={css.headerNav}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? css.linkActive : css.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          end
          className={({ isActive }) => (isActive ? css.linkActive : css.link)}
        >
          About
        </NavLink>

        <NavLink
          to="projects"
          end
          className={({ isActive }) => (isActive ? css.linkActive : css.link)}
        >
          Projects
        </NavLink>
      </nav>

      <MdOutlineMenu
        className={`${css.hamburgerIcon} ${
          isSidebarOpen && css.visuallyHidden
        }`}
        onClick={toggleSidebar}
      />

      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </header>
  );
};

export default Header;
