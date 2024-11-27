import { useState, useRef } from 'react';
import css from './ShareLayout.module.css';
import Header from '../Header/Header';
import ClientDetails from '../ClientDetails/ClientDetails';
import InvoiceDetails from '../InvoiceDetails/InvoiceDetails';
import UserDetails from '../UserDetails/UserDetails';
import Footer from '../Footer/Footer';
import PreviewBtn from '../Buttons/EditBtn/EditBtn';
import EditBtn from '../Buttons/PreviewBtn/PreviewBtn';
import { FooterDetails } from '../../data/footer';
import { useReactToPrint } from 'react-to-print';
import FooterDevBy from '../Footer/FooterDevBy/FooterDevBy';
/* Input Icons */
import { FaUser } from 'react-icons/fa6';
import { IoHomeSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { MdLocalPhone } from 'react-icons/md';
import { FaFileInvoice } from 'react-icons/fa';

const SharedLayout = () => {
  const [showInvoice, setShowInvoice] = useState(false);
  const [invoiceNo, setInvoiceNo] = useState('');
  const [issuedDate, setIssuedDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientContact1, setClientContact1] = useState('');
  // const [clientContact2, setClientContact2] = useState('');
  // const [clientContact3, setClientContact3] = useState('');

  const contentRef = useRef();

  const { accountName } = FooterDetails;

  const toInputUppercase = e => {
    e.target.value = ('' + e.target.value).toUpperCase();
  };

  const toInputLowerCase = e => {
    e.target.value = ('' + e.target.value).toLowerCase();
  };

  const handlePrint = useReactToPrint({ contentRef });
  return (
    <>
      <div className={css.sharedContainer}>
        {/*    <ReactToPrint
          trigger={() => <button>Print / Download</button>}
          content={() => contentRef.current}
        /> */}

        {showInvoice ? (
          <>
            {/* Print Button */}
            <button onClick={handlePrint}>Print / Download</button>
            <div className={css.sharedContainer} ref={contentRef}>
              {/* Header */}
              <Header />

              {/* Invoice details */}
              <InvoiceDetails
                invoiceNo={invoiceNo}
                issueDate={issuedDate}
                dueDate={dueDate}
              />
              {/* User details */}
              <div className={css.userClient}>
                {/* Client details */}
                <ClientDetails
                  name={clientName}
                  address={clientAddress}
                  email={clientEmail}
                  contact1={clientContact1}
                  // contact2={clientContact2}
                  // contact3={clientContact3}
                />
                <UserDetails />
              </div>
              {/* Footer details */}
              <Footer />
            </div>
            <PreviewBtn value={setShowInvoice} />
          </>
        ) : (
          <>
            <div>
              {/* Forms */}
              <form>
                <h2> Client Details</h2>
                <article>
                  <div className={css.clientDiv}>
                    <label>
                      Name:
                      <FaUser className={css.icon} />
                      <input
                        type="text"
                        onInput={toInputUppercase}
                        maxLength={22}
                        value={clientName}
                        onChange={e => setClientName(e.target.value)}
                      />
                    </label>
                    <div>
                      <label>
                        Address:
                        <IoHomeSharp className={css.icon} />
                        <input
                          className={css.inputAddress}
                          type="text"
                          // onInput={toInputUppercase}
                          maxLength={52}
                          value={clientAddress}
                          onChange={e => setClientAddress(e.target.value)}
                        />
                      </label>
                    </div>
                  </div>
                </article>
                <label>
                  Email:
                  <MdEmail className={css.icon} />
                  <input
                    type="email"
                    onInput={toInputLowerCase}
                    maxLength={42}
                    value={clientEmail}
                    onChange={e => setClientEmail(e.target.value)}
                  />
                </label>
                <label>
                  Phone:
                  <MdLocalPhone className={css.icon} />
                  <input
                    name="tel1"
                    type="tel"
                    onInput={toInputUppercase}
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="+63 956 123 4567"
                    aria-label="2-digit area code"
                    size="12"
                    maxLength={16}
                    value={clientContact1}
                    onChange={e => setClientContact1(e.target.value)}
                    required
                  />
                  {/*    <input
                  name="tel2"
                  type="tel"
                  pattern="[0-9]{3}"
                  placeholder="###"
                  maxLength={3}
                  aria-label="3-digit prefix"
                  size="3"
                  value={clientContact2}
                  onChange={e => setClientContact2(e.target.value)}
                />
                -
                <input
                  name="tel3"
                  type="tel"
                  pattern="[0-9]{4}"
                  placeholder="####"
                  maxLength={4}
                  aria-label="4-digit number"
                  size="4"
                  value={clientContact3}
                  onChange={e => setClientContact3(e.target.value)}
                /> */}
                </label>
                <h2> Invoice Details</h2>

                <label>
                  Invoice No:
                  <FaFileInvoice className={css.iconInvoice} />
                  <input
                    type="text"
                    onInput={toInputUppercase}
                    maxLength={7}
                    value={invoiceNo}
                    onChange={e => setInvoiceNo(e.target.value)}
                  />
                </label>
                <label>
                  Issued Date:
                  <input
                    type="date"
                    value={issuedDate}
                    onChange={e => setIssuedDate(e.target.value)}
                  />
                </label>
                <label>
                  Due Date:
                  <input
                    type="date"
                    value={dueDate}
                    onChange={e => setDueDate(e.target.value)}
                  />
                </label>
              </form>
              {/* Buttons */}
            </div>
            {/* <Footer /> */}
            <EditBtn value={setShowInvoice} />
          </>
        )}
      </div>
      <FooterDevBy accountName={accountName} />
    </>
  );
};

export default SharedLayout;
