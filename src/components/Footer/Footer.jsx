import React from 'react';
import { FooterDetails } from '../../data/footer';
import css from './Footer.module.css';

const Footer = () => {
  const { bankName, accountName, accountNumber, mobile, email } = FooterDetails;
  return (
    <div>
      <footer>
        <ul>
          <li>Bank Name: {bankName}</li>
          <li>Account Holder: {accountName}</li>
          <li>Account Number: {accountNumber} </li>
          <li>Mobile: {mobile} </li>
          <li>Email: {email}</li>
        </ul>
        <p className={css.footerText}>
          &copy; {new Date().getFullYear()} Developed by {accountName}
        </p>
      </footer>
    </div>
  );
};

export default Footer;
