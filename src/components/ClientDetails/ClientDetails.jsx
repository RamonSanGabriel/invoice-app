import css from './ClientDetails.module.css';

const ClientDetails = ({
  name,
  address,
  email,
  contact1,
  contact2,
  contact3,
}) => {
  return (
    <>
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
    </>
  );
};

export default ClientDetails;
