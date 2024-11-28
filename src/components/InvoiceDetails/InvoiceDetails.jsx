import css from './InvoiceDetails.module.css';

const InvoiceDetails = ({ invoiceNo, issueDate, dueDate }) => {
  return (
    <>
      <div>
        <ul>
          <li>
            <h4>Invoice Number: </h4>
            <p>{invoiceNo}</p>
          </li>
          <li>
            <h4>Issued Date: </h4>
            <p>{issueDate}</p>
          </li>
          <li>
            <h4>Due Date: </h4>
            <span>
              <p>{dueDate}</p>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default InvoiceDetails;
