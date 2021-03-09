import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#fff',
    borderRadius: 3,
    // boxShadow: '0 1px 0 rgb(9 30 66 / 25%)',
    // borderBottom: 'solid 1px #6b778c',
    borderBottom: 'solid 1px rgb(9 30 66 / 25%)',
    marginBottom: 8,
    paddingLeft: 6,
    paddingRight: 8,
    cursor: 'pointer',
  },
  // max-width: 300px
  // min-height: 20px
}));

const Card = ({ title }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>{title}</Typography>
    </div>
  );
};
export default Card;
