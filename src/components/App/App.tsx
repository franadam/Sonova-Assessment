import React from 'react';
import Layout from '../../hoc/Layout/Layout';
import Comments from '../Stats/Stats';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Product from '../ProductSection/ProductSection';

const App = (): JSX.Element => {
  return (
    <Layout>
      <Header />
      <main>
        <Comments />
        <Product />
        <Review />
      </main>
    </Layout>
  );
};

export default App;
