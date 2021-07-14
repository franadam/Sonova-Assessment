import React from 'react';
import classes from './Product.module.css';

interface Props {
  picture: string;
  text: string;
  reverse?: boolean;
}

const Product = ({ picture, text, reverse }: Props): JSX.Element => {
  return (
    <div className={classes.container}>
      {reverse ? (
        <>
          <div className={classes.text}>{text}</div>
          <img
            src={picture}
            alt="picture"
            className={classes.picture}
          ></img>{' '}
        </>
      ) : (
        <>
          <img src={picture} alt="picture" className={classes.picture}></img>
          <div className={classes.text}>{text}</div>
        </>
      )}
    </div>
  );
};

export default Product;
