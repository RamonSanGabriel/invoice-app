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
        <h3>Billed to: </h3>
        <h4>
          <p>{name}</p>
        </h4>
        <p>{address}</p>
        <address>
          <p>
            <a href="mailto:client@example.com">{email}</a>
          </p>
          <p>
            <a href="tel:12345">{contact1}</a>
          </p>
        </address>
      </section>
    </>
  );
};

export default ClientDetails;
