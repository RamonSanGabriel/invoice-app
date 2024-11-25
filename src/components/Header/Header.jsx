import React from 'react';
import css from './Header.module.css';

const Header = () => {
  return (
    <div className={css.headerContainer}>
      <header>
        <h1>Invoice</h1>
      </header>
    </div>
  );
};

export default Header;
