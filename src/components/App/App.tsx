import React from 'react';
import Layout from '../../hoc/Layout/Layout';
import Comments from '../Stats/Stats';
import Header from '../Header/Header';
import classes from './App.module.css';
import Review from '../Review/Review';

const App = (): JSX.Element => {
  return (
    <Layout>
      <Header />
      <main>
        <Comments />
        <Review />
      </main>
    </Layout>
  );
};

export default App;
