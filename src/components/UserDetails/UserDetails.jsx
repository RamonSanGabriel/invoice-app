import React, { useState } from 'react';
import css from './UserDetails.module.css';

const UserDetails = () => {
  const [fname, setFname] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [website, setWebsite] = useState('');
  const [bankName, setBankName] = useState('');
  const [acctNumber, setAcctNumber] = useState('');

  /* Data destructuring */

  return (
    <div>
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
        <label htmlFor="userAddress"> Address </label>
        <input
          type="text"
          id="userAddress"
          name="userAddress"
          placeholder="Enter your address"
          autoComplete="on"
          maxLength={96}
          value={userAddress}
          onChange={e => setUserAddress(e.target.value)}
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
          required
        />
        <label htmlFor="number">Phone</label>
        <input
          type="tel"
          id="number"
          name="number"
          placeholder="(+63) 915 - 123 - 4567  "
          pattern="[0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{4}"
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
        <label htmlFor="bankName">Bank</label>
        <input
          type="text"
          id="bankName"
          name="bankName"
          placeholder="Enter your bank name"
          autoComplete="on"
          maxLength={96}
          value={bankName}
          onChange={e => setBankName(e.target.value)}
        />
        <label htmlFor="acctNumber">Account</label>
        <input
          type="number"
          id="acctNumber"
          name="acctNumber"
          placeholder="Enter your bank account number"
          autoComplete="on"
          maxLength={96}
          value={acctNumber}
          onChange={e => setAcctNumber(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UserDetails;
