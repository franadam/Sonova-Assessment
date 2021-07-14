import React from 'react';
import { FaDove } from 'react-icons/fa';
import classes from './Navbar.module.css';

const Navbar = (): JSX.Element => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>
        Geers <FaDove className={classes.icon} />
      </h1>
      <div className={classes.contact}>
        <h3 className={classes.phone}>+41 58 928 01 01 </h3>
        <p className={classes.day}>Mo - Sa 9 - 18 Uhr</p>
      </div>
    </div>
  );
};

export default Navbar;
