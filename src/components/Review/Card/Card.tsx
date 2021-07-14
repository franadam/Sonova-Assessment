import React from 'react';
import classes from './Card.module.css';

interface Props {
  picture: string;
  text: string;
  author: string;
  rating: number;
}
const Card = ({ picture, text, author, rating }: Props): JSX.Element => {
  return (
    <div className={classes.container}>
      <div className={classes.picture}>
        <img className={classes.img} src={picture} alt="avatar" />
      </div>
      <div className={classes.text}>{text}</div>
      <div className={classes.author}>{author}</div>
      <div className={classes.rating}>{rating} / 5 </div>
    </div>
  );
};

export default Card;
