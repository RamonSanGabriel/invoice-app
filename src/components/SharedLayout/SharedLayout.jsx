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
      <div>
        {/*    <ReactToPrint
          trigger={() => <button>Print / Download</button>}
          content={() => contentRef.current}
        /> */}

        {showInvoice ? (
          <>
            {/* Print Button */}
            <div className={css.sharedContainer}>
              <button className={css.previewBtn} onClick={handlePrint}>
                Print / Download
              </button>
            </div>
            <div ref={contentRef}>
              <div className={css.sharedContainer}>
                {/* Header */}
                <Header />

                {/* Invoice details */}
                <InvoiceDetails
                  invoiceNo={invoiceNo}
                  issueDate={issuedDate}
                  dueDate={dueDate}
                />
                <div className={css.userClient}>
                  <div className={css.userClientItem}>
                    {/* Client details */}
                    <ClientDetails
                      name={clientName}
                      address={clientAddress}
                      email={clientEmail}
                      contact1={clientContact1}
                      // contact2={clientContact2}
                      // contact3={clientContact3}
                    />
                    {/* User details */}
                    <UserDetails />
                  </div>
                </div>
                {/* Footer details */}
                <Footer />
              </div>
            </div>
            <PreviewBtn value={setShowInvoice} />
          </>
        ) : (
          <>
            <div>
              {/* Forms */}
              <form>
                <h2 className={css.formHeader}> Client Details</h2>
                <article>
                  <div className={css.clientDiv}>
                    <label htmlFor="clientDetails">
                      Name:
                      <FaUser className={css.icon} />
                      <input
                        type="text"
                        onInput={toInputUppercase}
                        maxLength={62}
                        value={clientName}
                        onChange={e => setClientName(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className={css.clientDiv}>
                    <label htmlFor="clientAddress">
                      Address:
                      <IoHomeSharp className={css.icon} />
                      <input
                        className={css.inputAddress}
                        type="text"
                        // onInput={toInputUppercase}
                        maxLength={152}
                        value={clientAddress}
                        onChange={e => setClientAddress(e.target.value)}
                      />
                    </label>
                  </div>
                </article>
                <article>
                  <div className={css.clientDiv}>
                    <label htmlFor="clientEmail">
                      Email:
                      <MdEmail className={css.icon} />
                      <input
                        className={css.formInput}
                        type="email"
                        onInput={toInputLowerCase}
                        maxLength={62}
                        value={clientEmail}
                        onChange={e => setClientEmail(e.target.value)}
                      />
                    </label>
                  </div>

                  <div className={css.clientDiv}>
                    <label htmlFor="clientContact1">
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
                    </label>
                  </div>
                </article>
                <h2> Invoice Details</h2>
                <article className={css.articleInvoice}>
                  <div className={css.clientDiv}>
                    <label>
                      Invoice No:
                      <FaFileInvoice className={css.iconInvoice} />
                      <input
                        className={css.formInput}
                        type="text"
                        onInput={toInputUppercase}
                        maxLength={10}
                        value={invoiceNo}
                        onChange={e => setInvoiceNo(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className={css.clientDiv}>
                    <label>
                      Issued Date:
                      <input
                        className={css.formInput}
                        type="date"
                        value={issuedDate}
                        onChange={e => setIssuedDate(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className={css.clientDiv}>
                    <label>
                      Due Date:
                      <input
                        className={css.formInput}
                        type="date"
                        value={dueDate}
                        onChange={e => setDueDate(e.target.value)}
                      />
                    </label>
                  </div>
                </article>
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
