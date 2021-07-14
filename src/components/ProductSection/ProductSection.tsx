import React from 'react';
import Button from '../Button/Button';
import Product from './Product/Product';
import classes from './ProductSection.module.css';

const ProductSection = (): JSX.Element => {
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  return (
    <div className={classes.container}>
      <Product
        picture="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/49437970-zdf-image-2.jpg"
        text={text}
      />
      <Button
        text={'Lorem ipsum dolor sit amet'}
        action={(e) => {
          e.preventDefault();
        }}
      />
      <Product
        picture="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/b0c886af-zdf-image-geers-store-1.jpg"
        text={text}
        reverse
      />
    </div>
  );
};

export default ProductSection;
