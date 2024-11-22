import { useState } from 'react';
import css from './Button.module.css';

const Button = () => {
  const state = {
    good: 0,
    neutral: 0,
    bad: 0,
    count: 0,
  };
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [add, setAdd] = useState(state);

  const handleClick = text => {
    setAdd(prevState => [...(prevState, add + 1)]);
  };

  const handleClickUpper = text => {
    console.log(`${text}`);
    // alert(`${text}`);
    // setText(`${text.toUpperCase()}`);
  };

  return (
    <div>
      <h1>I am a Junior Web Developer</h1>

      <button
        onClick={() =>
          handleClickUpper("My name is Ramon, I'm a web developer")
        }
        className={css.myButton}
      >
        Click Me
      </button>

      {options.map(option => (
        <button
          key={option}
          onClick={() => {
            handleClick;
          }}
        >
          {option}
        </button>
      ))}
      <p>Count: {add.count}</p>
      <div>
        <p>Good: {add.good}</p>
        <p>Neutral: {add.neutral}</p>
        <p>Bad: {add.bad}</p>
      </div>
    </div>
  );
};

export default Button;
