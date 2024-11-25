import React from 'react';
import { User } from '../../data/user';

const UserDetails = () => {
  const { name, email } = User;
  return (
    <div>
      <section>
        <h2>{name}</h2>
        <p>{email}</p>
      </section>
    </div>
  );
};

export default UserDetails;
