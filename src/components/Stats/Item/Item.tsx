import React from 'react';
import classes from './Item.module.css';

interface Props {
  percentage: number;
  text: string;
}

const Item = ({ percentage, text }: Props): JSX.Element => {
  return (
    <div className={classes.container}>
      <div className={classes.percentage}>{percentage} %</div>
      <div className={classes.text}>{text}</div>
    </div>
  );
};

export default Item;
