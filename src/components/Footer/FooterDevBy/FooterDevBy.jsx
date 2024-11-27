import { FooterDetails } from '../../../data/footer';
const FooterDevBy = ({ accountName }) => {
  return (
    <div>
      <p>
        &copy; {new Date().getFullYear()} Developed by {accountName}
      </p>
    </div>
  );
};

export default FooterDevBy;
