import React from 'react';
import Layout from '../../hoc/Layout/Layout';
import Header from '../Header/Header';
import classes from './App.module.css';

const App = (): JSX.Element => {
  return (
    <Layout>
      <Header />
    </Layout>
  );
};

export default App;
