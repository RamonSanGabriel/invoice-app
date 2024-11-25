import { useState, useRef } from 'react';
import Header from '../Header/Header';
import ClientDetails from '../ClientDetails/ClientDetails';
import InvoiceDetails from '../InvoiceDetails/InvoiceDetails';
import UserDetails from '../UserDetails/UserDetails';
import Footer from '../Footer/Footer';
import PreviewBtn from '../Buttons/EditBtn/EditBtn';
import EditBtn from '../Buttons/PreviewBtn/PreviewBtn';
import { useReactToPrint } from 'react-to-print';

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

  const toInputUppercase = e => {
    e.target.value = ('' + e.target.value).toUpperCase();
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
            <button onClick={handlePrint}>Print / Download</button>
            <div ref={contentRef}>
              {/* Header */}
              <Header />
              {/* Print Button */}

              {/* User details */}
              <UserDetails />

              {/* Client details */}
              <ClientDetails
                name={clientName}
                address={clientAddress}
                email={clientEmail}
                contact1={clientContact1}
                // contact2={clientContact2}
                // contact3={clientContact3}
              />
              {/* Invoice details */}
              <InvoiceDetails
                invoiceNo={invoiceNo}
                issueDate={issuedDate}
                dueDate={dueDate}
              />
              {/* Buttons */}
            </div>
            <PreviewBtn value={setShowInvoice} />
          </>
        ) : (
          <>
            <div>
              <h2>Enter Invoice Details</h2>
              <form>
                <label htmlFor="">
                  Client's Name:
                  <input
                    type="text"
                    onInput={toInputUppercase}
                    maxLength={22}
                    value={clientName}
                    onChange={e => setClientName(e.target.value)}
                  />
                </label>
                <label htmlFor="">
                  Client's Address:
                  <input
                    type="text"
                    onInput={toInputUppercase}
                    maxLength={52}
                    value={clientAddress}
                    onChange={e => setClientAddress(e.target.value)}
                  />
                </label>
                <label htmlFor="">
                  Client's Email:
                  <input
                    type="email"
                    onInput={toInputUppercase}
                    maxLength={42}
                    value={clientEmail}
                    onChange={e => setClientEmail(e.target.value)}
                  />
                </label>
                <label>
                  Contact Number
                  <input
                    name="tel1"
                    type="tel"
                    onInput={toInputUppercase}
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="123-456-7890"
                    aria-label="2-digit area code"
                    size="12"
                    maxLength={11}
                    minLength={11}
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
                <label>
                  Invoice Number:
                  <input
                    type="text"
                    onInput={toInputUppercase}
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
            <EditBtn value={setShowInvoice} />
          </>
        )}

        {/* Footer details */}
      </div>
      <Footer />
    </>
  );
};

export default SharedLayout;
