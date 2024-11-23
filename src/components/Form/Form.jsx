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
  const [clientname, setClientName] = useState('');
  const [clientaddress, setClientAddress] = useState('');

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
          <label htmlFor="acctnumber">Account</label>
          <input
            type="number"
            id="acctnumber"
            name="acctnumber"
            placeholder="Enter your bank account number"
            autoComplete="on"
            maxLength={96}
            value={acctnumber}
            onChange={e => setAcctNumber(e.target.value)}
          />
        </div>
        <div className={css.labelBox4}>
          <label htmlFor="clientname">Client</label>
          <input
            type="text"
            id="clientname"
            name="clientname"
            placeholder="Enter your client's name"
            autoComplete="on"
            maxLength={96}
            value={clientname}
            onChange={e => setClientName(e.target.value)}
          />
          <label htmlFor="clientaddress">Address</label>
          <input
            type="text"
            id="clientaddress"
            name="clientaddress"
            placeholder="Enter your client's address"
            autoComplete="on"
            maxLength={96}
            value={clientaddress}
            onChange={e => setClientAddress(e.target.value)}
          />
        </div>
        <div className={css.labelBox5}>
          <label htmlFor="email">Invoice Number</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter invoice number"
            autoComplete="on"
            maxLength={255}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="number">Invoice Date</label>
          <input
            type="number"
            id="number"
            name="number"
            placeholder="mm/dd/yyyy"
            autoComplete="on"
            maxLength={12}
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
          <label htmlFor="website">Due Date</label>
          <input
            type="text"
            id="website"
            name="website"
            placeholder="mm/dd/yyyy"
            autoComplete="on"
            maxLength={96}
            value={website}
            onChange={e => setWebsite(e.target.value)}
          />
        </div>
      </form>
    </>
  );
};

export default Form;
