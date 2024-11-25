import React, { useState } from 'react';
import css from './ClientDetails.module.css';
// import { Client } from '../../data/client';

const ClientDetails = ({ name, address }) => {
  const [clientName, setClientName] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  // const [invoiceNumber, setInvoiceNumber] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [invoiceDue, setInvoiceDue] = useState('');

  /* Data destructuring for client */
  // const { name, address } = Client;
  return (
    <>
      <div className={css.labelBox4}>
        <label className={css.clientName} htmlFor="clientName">
          Client
        </label>
        <input
          type="text"
          id="clientName"
          name="clientName"
          placeholder="Enter your client's name"
          autoComplete="on"
          maxLength={96}
          value={clientName}
          onChange={e => setClientName(e.target.value)}
        />
        <label htmlFor="clientAddress">Address</label>
        <input
          type="text"
          id="clientAddress"
          name="clientAddress"
          placeholder="Enter your client's address"
          autoComplete="on"
          maxLength={96}
          value={clientAddress}
          onChange={e => setClientAddress(e.target.value)}
        />
      </div>
      <div className={css.labelBox5}>
        {/*  <label htmlFor="invoiceNumber">Invoice Number</label>
        <input
          type="text"
          id="invoiceNumber"
          name="invoiceNumber"
          placeholder="Enter invoice number"
          autoComplete="on"
          maxLength={56}
          value={invoiceNumber}
          onChange={e => setInvoiceNumber(e.target.value)}
        /> */}
        <label htmlFor="invoiceDate">Invoice Date</label>
        <input
          type="date"
          id="invoiceDate"
          name="invoiceDate"
          placeholder="mm/dd/yyyy"
          autoComplete="on"
          maxLength={12}
          value={invoiceDate}
          onChange={e => setInvoiceDate(e.target.value)}
        />
        <label htmlFor="invoiceDue">Due Date</label>
        <input
          type="date"
          id="invoiceDue"
          name="invoiceDue"
          placeholder="mm/dd/yyyy"
          autoComplete="on"
          maxLength={96}
          value={invoiceDue}
          onChange={e => setInvoiceDue(e.target.value)}
        />
      </div>
      <section>
        <h2>Client's Name: {clientName}</h2>
        <p>Client's Address: {clientAddress}</p>
      </section>
    </>
  );
};

export default ClientDetails;
