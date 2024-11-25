import React from 'react';
import InvoiceNumber from './InvoiceNumber/InvoiceNumber';
import InvoiceDate from './InvoiceDate/InvoiceDate';
import InvoiceDue from './InvoiceDue/InvoiceDue';
import { InvoiceNo } from '../../data/invoice';

const Invoices = ({ id }) => {
  // const { id } = InvoiceNo;
  return (
    <div>
      <h1>Invoice</h1>
      <article>
        <ul>
          <li>Invoice Number: {id}</li>
          <li>Invoice Date: {InvoiceDate} </li>
          <li>Due Date: {InvoiceDue} </li>
        </ul>
      </article>
    </div>
  );
};

export default Invoices;
