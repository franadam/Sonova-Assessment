import React from 'react';
import classes from './Footer.module.css';
import { FaQuoteLeft } from 'react-icons/fa';

const Footer = (): JSX.Element => {
  const year = new Date().getFullYear();
  return (
    <div className={classes.container}>
      <div className={classes.poster}>
        <FaQuoteLeft className={classes.icon} />
        <div className={classes.citation}>
          <div className={classes.text}>
            GEERS, DIE VERSTEHEN WAS VOM HÖREN.
          </div>
          <div className={classes.author}>Thomas Gottschalk</div>
        </div>
      </div>
      <div className={classes.copyright}>
        Copyright © {year} Sonova AG. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
