import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    height: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: 3,
    marginRight: 4,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, .16)',
    },
    '&:active': {
      backgroundColor: 'rgba(0, 0, 0, .24)',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  text: {
    color: '#000',
    fontSize: 18,
    fontWeight: 700,
  },
}));

const MenuButton = ({ text }) => {
  const classes = useStyles();
  if (text) {
    return (
      <button className={classes.root} type="button">
        <Typography className={classes.text}>{text}</Typography>
      </button>
    );
  }
  return null;
};
export default MenuButton;
