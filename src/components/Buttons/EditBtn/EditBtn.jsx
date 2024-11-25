import React from 'react';
import css from './EditBtn.module.css';

const EditBtn = ({ value }) => {
  return (
    <div>
      <button className={css.editBtn} onClick={() => value(false)}>
        Edit Invoice
      </button>
    </div>
  );
};

export default EditBtn;
