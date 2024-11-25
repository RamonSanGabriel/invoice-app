import React from 'react';
// import { useState } from 'react';

const ClientDetails = ({
  name,
  address,
  email,
  contact1,
  contact2,
  contact3,
}) => {
  return (
    <div>
      <section>
        <h2>Billed to:</h2>
        <p>{name}</p>
        <p>Client Address: {address}</p>
        <address>
          <a href="mailto:client@example.com">Client Email: {email}</a>
          <a href="tel:12345">
            Client Contact Number:
            {contact1}
            {contact2}
            {contact3}
          </a>
        </address>
      </section>
    </div>
  );
};

export default ClientDetails;
