import React, { useState } from 'react';
import css from './Form.module.css';
import { IoSearchSharp } from 'react-icons/io5';

const Form = () => {
  const [fname, setFname] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [website, setWebsite] = useState('');
  const [search, setSearch] = useState('');
  const [bankname, setBankName] = useState('');
  const [acctnumber, setAcctNumber] = useState('');

  return (
    <>
      <form className={css.form}>
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
        <div className={css.labelBox1}>
          <label htmlFor="fname"> Name </label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Enter your full name"
            autoComplete="on"
            maxLength={56}
            value={fname}
            onChange={e => setFname(e.target.value)}
          />
          <label htmlFor="address"> Address </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter your address"
            autoComplete="on"
            maxLength={96}
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
        </div>
        <div className={css.labelBox2}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="on"
            maxLength={255}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="number">Phone</label>
          <input
            type="number"
            id="number"
            name="number"
            placeholder="(+63) 915 - 123 - 4567  "
            autoComplete="on"
            maxLength={12}
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            placeholder="https://www.example.com"
            autoComplete="on"
            maxLength={96}
            value={website}
            onChange={e => setWebsite(e.target.value)}
          />
        </div>
        <div className={css.labelBox3}>
          <label htmlFor="bankname">Bank</label>
          <input
            type="text"
            id="bankname"
            name="bankname"
            placeholder="Enter your bank name"
            autoComplete="on"
            maxLength={96}
            value={bankname}
            onChange={e => setBankName(e.target.value)}
          />
        </div>
      </form>
    </>
  );
};

export default Form;
