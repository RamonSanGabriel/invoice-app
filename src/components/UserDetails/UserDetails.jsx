import React from 'react';
import { User } from '../../data/user';

const UserDetails = () => {
  const { name, email } = User;
  return (
    <div>
      <section>
        <h2>From: </h2>
        <p>{name}</p>
        <p>{email}</p>
      </section>
    </div>
  );
};

export default UserDetails;
