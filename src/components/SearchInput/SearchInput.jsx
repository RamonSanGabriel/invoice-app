import React, { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import css from './SearchInput.module.css';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  return (
    <div className={css.search}>
      <label htmlFor="search">Search</label>
      <div>
        <IoSearchSharp className={css.icon} />
        <input
          className={css.inputSearch}
          type="text"
          id="search"
          name="search"
          placeholder="Type here..."
          autoComplete="on"
          maxLength={96}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchInput;
