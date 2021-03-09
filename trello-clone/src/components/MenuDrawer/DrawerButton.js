import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import splashCropped from '../../assets/splashCropped.jpg';

const useStyles = makeStyles(() => ({
  root: {
    padding: '0 6px',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: 3,
    marginRight: 4,
    marginLeft: 4,
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
    color: '#5e6c84',
    fontWeight: 400,
    textOverflow: 'ellipses',
  },
  head: {
    color: '#172b4d',
    fontWeight: 600,
    height: 20,
  },
  icon: {
    color: '#42526e',
    fontSize: 18,
  },
  rowMain: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 32,
  },
  rowDesc: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 20,
  },
  menuSpacer: {
    width: 40,
  },
  before: {
    position: 'relative',
    width: 20,
    height: 20,
    backgroundImage: `url(${splashCropped})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginLeft: 10,
    marginRight: 10,
  },
  contentIcon: {
    height: 20,
    width: 20,
    backgroundColor: 'rgba(0, 0, 0, .16)',
    borderRadius: 3,
    paddingTop: 2,
    marginLeft: 10,
    marginRight: 10,
    color: '#42526e',
  },
}));

const DrawerButton = ({ Icon, image, content, head, desc }) => {
  const classes = useStyles();
  if (image) {
    return (
      <button type="button" className={classes.root}>
        <div className={classes.rowMain}>
          <div className={classes.before} />
          <Typography className={classes.head}>{head}</Typography>
        </div>
      </button>
    );
  }

  if (desc && content) {
    return (
      <button type="button" className={classes.root}>
        <div className={classes.rowMain}>
          <div className={classes.contentIcon}>{content}</div>
          <Typography className={classes.text}>{desc}</Typography>
        </div>
      </button>
    );
  }

  if (head && desc && Icon) {
    return (
      <button type="button" className={classes.root}>
        <div className={classes.rowMain}>
          <div style={{ width: 40, marginTop: 5 }}>
            <Icon className={classes.icon} />
          </div>
          <Typography className={classes.head}>{head}</Typography>
        </div>
        <div className={classes.rowDesc}>
          <div className={classes.menuSpacer} />
          <Typography className={classes.text}>{desc}</Typography>
        </div>
      </button>
    );
  }
  if (head && Icon) {
    return (
      <button type="button" className={classes.root}>
        <div className={classes.rowMain}>
          <div style={{ width: 40, marginTop: 5 }}>
            <Icon dark className={classes.icon} />
          </div>
          <Typography className={classes.head}>{head}</Typography>
        </div>
      </button>
    );
  }

  return null;
};

export default DrawerButton;
