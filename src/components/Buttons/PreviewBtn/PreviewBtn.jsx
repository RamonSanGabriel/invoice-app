import React from 'react';
import css from './PreviewBtn.module.css';

const PreviewBtn = ({ value }) => {
  return (
    <div>
      <button className={css.previewBtn} onClick={() => value(true)}>
        Preview Invoice
      </button>
    </div>
  );
};

export default PreviewBtn;
