import React from 'react';
import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';

const useStyles = makeStyles(() => ({
  root: {
    height: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, .08)',
    border: 'none',
    borderRadius: 3,
    marginRight: 4,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, .16)',
    },
    '&:active': {
      backgroundColor: 'rgba(0, 0, 0, .32)',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  text: {
    color: '#172b4d',
    fontSize: 14,
    padding: '0 3px 0 5px',
  },
  icon: {
    color: '#172b4d',
    fontSize: 14,
  },
  favorited: {
    color: '#f2d600',
  },
}));

const DarkButton = ({ Icon, text, onClick, favorited }) => {
  console.log('favorited');
  const classes = useStyles();
  const iconClass = classNames(classes.icon, { [classes.favorited]: favorited });
  if (text && Icon) {
    return (
      <button className={classes.root} type="button" onClick={onClick || undefined}>
        <Icon className={classes.icon} />
        <span className={classes.text}>{text}</span>
      </button>
    );
  }
  if (text) {
    return (
      <button className={classes.root} type="button">
        <span className={classes.text}>{text}</span>
      </button>
    );
  }
  if (Icon) {
    return (
      <button className={classes.root} type="button" onClick={onClick || undefined}>
        <Icon className={iconClass} />
      </button>
    );
  }
  return undefined;
};
export default DarkButton;
