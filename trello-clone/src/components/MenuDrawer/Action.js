import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Moment from 'moment';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '8px 4px 4px 8px',
    // marginLeft: 4,
  },
  avatar: {
    height: 32,
    width: 32,
    marginRight: 10,
    backgroundColor: '#dfe1e6',
    borderRadius: '50%',
    borderColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 700,
    fontSize: 14,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#c1c7d0',
    },
    '&:active': {
      backgroundColor: '#b3bac5',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  primary: {
    cursor: 'pointer',
    color: '#172b4d',
    fontSize: 16,
    fontWeight: 600,
  },
  secondary: {
    fontSize: 14,
    fontWeight: 400,
  },
  item: {
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  soft: {
    color: '#5e6c84',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 1,
    '&:hover': {
      textDecoration: 'underline',
      color: '#000',
      cursor: 'pointer',
    },
  },
}));

const Avatar = ({ name }) => {
  const matches = name.match(/\b(\w)/g);
  const classes = useStyles();
  return (
    <button type="button" className={classes.avatar}>
      {matches.slice(0, 2)}
    </button>
  );
};

const Activity = ({ name = 'Matthew McPhillips', action, item, descriptor, time = Date.now() }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar name={name} />
      <div className={classes.col}>
        <Typography style={{ lineHeight: 1 }}>
          <span className={classes.primary}>{name}</span>
          <span className={classes.secondary}>{` ${action} `}</span>
          <span className={classes.item}>{item}</span>
          {descriptor && <span className={classes.secondary}>{` ${descriptor} `}</span>}
        </Typography>
        <Typography className={classes.soft}>
          {`${Moment(time).format('MMM DD, YYYY')} at ${Moment(time).format('h:m A')}`}
        </Typography>
      </div>
    </div>
  );
};

export default Activity;
