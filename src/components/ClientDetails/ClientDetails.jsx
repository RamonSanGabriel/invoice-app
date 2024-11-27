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
        <div className={css.clientDetailsDiv}>
          <h3>Billed to: </h3>
          <h4>
            <textarea
              name="clientDetails"
              id=""
              rows="1"
              cols="40"
              // value={name}
            />
            <p>{name}</p>
            {/* </textarea> */}
          </h4>
          <textarea
            name="clientDetails"
            id=""
            rows="1"
            cols="40"
            // value={address}
          />
          <p className={css.clientAddress}>{address}</p>
          <address>
            <textarea
              name="clientDetails"
              id=""
              rows="1"
              cols="40"
              // value={email}
            />
            <p>
              <a href={`mailto:${email}`}>{email} </a>
            </p>
            <textarea
              name="clientDetails"
              id=""
              rows="1"
              cols="40"
              // value={contact1}
            />
            <p>
              <a href="tel:12345">{contact1}</a>
            </p>
          </address>
        </div>
      </section>
    </>
  );
};

export default ClientDetails;
