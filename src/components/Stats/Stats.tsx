import React from 'react';
import classes from './Stats.module.css';
import Comment from './Item/Item';

const Stats = (): JSX.Element => {
  const computePercentage = () => Math.floor(Math.random() * 100);
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  return (
    <section className={classes.container}>
      <h1 className={classes.title}>Das sagen Menschen mit Hörgerät:</h1>
      <div className={classes['comments-list']}>
        <Comment percentage={computePercentage()} text={text} />
        <Comment percentage={computePercentage()} text={text} />
        <Comment percentage={computePercentage()} text={text} />
        <Comment percentage={computePercentage()} text={text} />
        <Comment percentage={computePercentage()} text={text} />
        <Comment percentage={computePercentage()} text={text} />
      </div>
    </section>
  );
};

export default Stats;
