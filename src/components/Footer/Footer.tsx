import React from 'react';
import classes from './Footer.module.css';

const Footer = (): JSX.Element => {
  const year = new Date().getFullYear();
  return (
    <div className={classes.container}>
      <div className={classes.poster}></div>
      <div className={classes.copyright}>
        Copyright © {year}. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
