import React from 'react';
import classes from './Button.module.css';

interface Props {
  text: string;
  action: (e: React.MouseEvent) => void;
}

const Button = ({ text, action }: Props): JSX.Element => {
  return (
    <div className={classes.container}>
      <button className={classes.btn} onClick={action}>
        {text}
      </button>
    </div>
  );
};

export default Button;
