import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    height: 32,
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, .3)',
    border: 'none',
    borderRadius: 3,
    marginRight: 4,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, .2)',
    },
    '&:active': {
      backgroundColor: 'rgba(255, 255, 255, .1)',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  text: {
    color: '#fff',
    fontWeight: 700,
    padding: '0 3px 0 5px',
  },
  icon: {
    fontSize: 18,
  },
}));

const MenuButton = ({ Icon, text }) => {
  const classes = useStyles();
  if (text) {
    return (
      <button className={classes.root} type="button">
        <Icon />
        <span className={classes.text}>{text}</span>
      </button>
    );
  }
  return (
    <button className={classes.root} type="button">
      <Icon className={classes.icon} />
    </button>
  );
};
export default MenuButton;
