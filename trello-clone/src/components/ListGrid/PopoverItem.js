import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  item: {
    height: 20,
    color: '#172b4d',
    fontSize: 14,
  },
  root: {
    height: 32,
    padding: 6,
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
    '&:hover': {
      backgroundColor: 'rgba(9,30,66,.13)',
      cursor: 'pointer',
    },
    '&:active': {
      backgroundColor: '#e4f0f6',
    },
    '&:hover > item': {},
  },
}));

const PopoverItem = ({ item, onClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.root} onClick={onClick || undefined}>
      <Typography className={classes.item}>{item}</Typography>
    </div>
  );
};
export default PopoverItem;
