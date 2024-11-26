import { User } from '../../data/user';
import css from './UserDetails.module.css';

const UserDetails = () => {
  const { name, email, address, number } = User;
  return (
    <div>
      <section>
        <h3>From: </h3>
        <h4>{name}</h4>
        <p>{address}</p>
        <p>{email}</p>
        <p>{number}</p>
      </section>
    </div>
  );
};

export default UserDetails;
