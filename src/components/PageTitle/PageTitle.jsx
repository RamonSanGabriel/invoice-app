import css from './PageTitle.module.css';

const PageTitle = ({ title, subtitle }) => {
  return (
    <div>
      <h2 className={css.containerPageTitle}>{title}</h2>
      <h3 className={css.containerPageTitle}>{subtitle}</h3>
    </div>
  );
};

export default PageTitle;
