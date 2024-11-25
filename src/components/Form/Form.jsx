import css from './Form.module.css';
import ClientDetails from '../ClientDetails/ClientDetails';
import Header from '../Header/Header';
import { useState } from 'react';

const Form = () => {
  const [clientAddress, setClientAddress] = useState('');
  const [clientName, setClientName] = useState('');

  return (
    <>
      <form className={css.form}>
        <Header />
        <ClientDetails />
        {/* <ClientDetails name={clientName} address={clientAddress} /> */}
      </form>
    </>
  );
};

export default Form;
