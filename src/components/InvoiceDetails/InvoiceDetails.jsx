import React from 'react';

const InvoiceDetails = ({ invoiceNo, issueDate, dueDate }) => {
  return (
    <div>
      <article>
        <ul>
          <li>Invoice Number: {invoiceNo}</li>
          <li>Issued Date:{issueDate}</li>
          <li>Due Date:{dueDate}</li>
        </ul>
      </article>
    </div>
  );
};

export default InvoiceDetails;
