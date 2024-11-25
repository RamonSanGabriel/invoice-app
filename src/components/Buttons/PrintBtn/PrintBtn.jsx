import css from './PrintBtn.module.css';

const PrintBtn = () => {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div className={css.submitBtn}>
      <button onClick={handlePrint} type="button">
        Print / Download
      </button>
    </div>
  );
};

export default PrintBtn;
