import React from 'react';
import Card from './Card/Card';
import classes from './Review.module.css';

const Review = (): JSX.Element => {
  const computeRating = () => Math.ceil(Math.random() * 5);
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  return (
    <div className={classes.container}>
      <div className={classes['cards-list']}>
        <Card
          picture={
            'https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/5552e3b1-man-review-2_104g04g000000000000000.jpg'
          }
          text={text}
          author={'Marc J.K.'}
          rating={computeRating()}
        />
        <Card
          picture={
            'https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/aa7c9767-brochure-woman-4_104g04g000000000000000.jpg'
          }
          text={text}
          author={'Sophie K.'}
          rating={computeRating()}
        />
        <Card
          picture={
            'https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/3e74a3fe-woman-review-1_104g04g000000000000000.jpg'
          }
          text={text}
          author={'Susan S.'}
          rating={computeRating()}
        />
      </div>
    </div>
  );
};

export default Review;
