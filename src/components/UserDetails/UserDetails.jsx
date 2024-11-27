import { useState } from 'react';
import { User } from '../../data/user';
import css from './UserDetails.module.css';

const UserDetails = () => {
  const [userEmail, setUserEmail] = useState('');
  const { name, email, address, number } = User;
  return (
    <>
      <div>
        <section className={css.userDetailsDiv}>
          <h3 className={css.userDetailsFrom}>From: </h3>
          <h4 className={css.userDetailsName}>{name}</h4>
          <p className={css.userDetailsAddress}>{address}</p>
          <p className={css.userDetailsEmail}>
            <a href="mailto:{userEmail}">{email}</a>
          </p>
          <p>{number}</p>
        </section>
      </div>
    </>
  );
};

export default UserDetails;
