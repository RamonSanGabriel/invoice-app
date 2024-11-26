import css from './ClientDetails.module.css';

const ClientDetails = ({
  name,
  address,
  email,
  contact1,
  // contact2,
  // contact3,
}) => {
  return (
    <>
      <section>
        <h2>Billed to: </h2>
        <p>Name: {name}</p>
        <p>Address: {address}</p>
        <address>
          <p> Email: </p>
          <a href="mailto:client@example.com">{email}</a>
          <p> Contact Number:</p>
          <a href="tel:12345">
            {contact1}
            {/* {contact2}
            {contact3} */}
          </a>
        </address>
      </section>
    </>
  );
};

export default ClientDetails;
