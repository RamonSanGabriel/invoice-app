import { useState } from 'react';
import Header from '../Header/Header';
import UserDetails from '../UserDetails/UserDetails';
import ClientDetails from '../ClientDetails/ClientDetails';
import Invoices from '../Invoices/Invoices';
import { InvoiceNo } from '../../data/invoice';
import SearchInput from '../SearchInput/SearchInput';
import Form from '../Form/Form';
// import { Client } from '../../data/client';
import Footer from '../Footer/Footer';
// import { Invoice } from '../../data/invoice';
import { User } from '../../data/user';

const SharedLayout = () => {
  const [showInvoice, setShowInvoice] = useState(true);
  const [clientAddress, setClientAddress] = useState('');
  const [clientName, setClientName] = useState('');
  // const [showUserDetails, setShowUserDetails] = useState(false);
  // const { name, address } = Client;
  const { id } = InvoiceNo;
  const { fname, userAddress } = User;
  return (
    <>
      {showInvoice ? (
        <div>
          <Form />
          <button
            onClick={() => {
              setShowInvoice(false);
            }}
          >
            Preview Invoice
          </button>
        </div>
      ) : (
        <div>
          {/* Header */}
          <Invoices id={id} />
          {/* User Details */}
          {/* <UserDetails /> */}
          {/*   <section>
            <h2>User's Name: {fname}</h2>
            <p>User's Address: {userAddress}</p>
          </section> */}

          {/* Client Details */}
          <ClientDetails name={clientName} address={clientAddress} />
          <section>
            <h2>Client name: {clientName}</h2>
            <p>Client address: {clientAddress}</p>
          </section>
          {/* Invoice Date */}

          {/* Table */}
          <section>
            <article>
              <h3>Invoice Items</h3>
              <table>
                <thead>
                  <tr></tr>
                </thead>
              </table>
            </article>
          </section>
          {/* Notes */}
          <section>
            <label htmlFor="notes">Notes:</label>
            {/*  <textarea
          name="notes"
          id="notes"
          placeholder="Notes to client"
          rows="5"
          cols="50"
        ></textarea> */}
            {/* resize: none; */}
          </section>

          {/* Footer */}
          <footer>
            <ul>
              <li>User Name</li>
              <li>User Email</li>
              <li>User Bank</li>
              <li>User Account Number</li>
              <li>User Account Number</li>
              <li>User Website</li>
            </ul>
          </footer>
          <button
            onClick={() => {
              setShowInvoice(true);
            }}
          >
            Edit Information
          </button>
        </div>
      )}
      <Footer />
    </>
  );
};

export default SharedLayout;
