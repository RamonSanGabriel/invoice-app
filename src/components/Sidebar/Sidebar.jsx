import React from 'react';
import { MdOutlineClose } from 'react-icons/md';
import css from './Sidebar.module.css';
import { navLinks } from '../../data/navlinks';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && <div className={css.overlay} onClick={onClose}></div>}

      <div className={`${css.sidebar} ${isOpen ? css.open : ''}`}>
        <button className={css.closeButton} onClick={onClose}>
          <MdOutlineClose />
        </button>
        <nav>
          <ul className={css.linkList}>
            {navLinks.map(({ id, link, path }) => (
              <li key={id} onClick={onClose}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? css.linkActive : css.link
                  }
                  to={path}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
