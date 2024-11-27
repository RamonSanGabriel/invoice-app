import { useState } from 'react';
import { User } from '../../data/user';
import css from './UserDetails.module.css';

const UserDetails = () => {
  const [userEmail, setUserEmail] = useState('');
  const { name, email, address, number } = User;
  return (
    <div>
      <section>
        <h3>From: </h3>
        <h4>{name}</h4>
        <p>{address}</p>
        <p>
          <a href="mailto:{userEmail}">{email}</a>
        </p>
        <p>{number}</p>
      </section>
    </div>
  );
};

export default UserDetails;
