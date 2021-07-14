import React from 'react';
import classes from './Header.module.css';
import Button from '../Button/Button';

const Header = (): JSX.Element => {
  return (
    <div className={classes.container}>
      <div className={classes.poster}></div>
      <div className={classes.info}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Button
          text={'Lorem ipsum dolor sit amet'}
          action={(e) => {
            e.preventDefault();
          }}
        />
      </div>
    </div>
  );
};

export default Header;
