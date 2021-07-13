import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import classes from './Layout.module.css';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.children}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
