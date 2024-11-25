import React from 'react';
import css from './Header.module.css';

const Header = () => {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div>
      <header>
        <h2>Invoice</h2>
      </header>
    </div>
  );
};

export default Header;
