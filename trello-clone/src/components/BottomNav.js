import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import RoomServiceOutlinedIcon from '@material-ui/icons/RoomServiceOutlined';
import classNames from 'classnames';
import ClearButton from './ClearButton';

import DarkButton from './DarkButton';
import MenuDrawer from './MenuDrawer';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '8px 4px 4px 8px',
  },
  divider: {
    height: 16,
    borderLeft: ' solid 1px rgba(0, 0, 0, .2)',
    marginRight: 5,
    marginLeft: 2,
    width: 1,
  },
  spacer: {
    width: 1,
    transition: '.2s',
  },
  spacerOpen: {
    width: 339,
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
}));

const BottomNav = ({ activity }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [favorited, setFavorited] = useState(false);
  const classes = useStyles();
  const drawerSpacer = classNames(classes.spacer, { [classes.spacerOpen]: drawerOpen });
  return (
    <div className={classes.root}>
      <ClearButton text="Matthew" />
      <DarkButton
        Icon={StarOutlineIcon}
        onClick={() => setFavorited(!favorited)}
        favorited={favorited}
      />
      <div className={classes.divider} />
      <DarkButton text="Personal" />
      <div className={classes.divider} />
      <DarkButton Icon={LockOpenOutlinedIcon} text="Private" />
      <div className={classes.divider} />
      <button type="button" className={classes.avatar}>
        MM
      </button>
      <DarkButton text="Invite" />
      <div style={{ flexGrow: 1 }} />
      <DarkButton
        Icon={RoomServiceOutlinedIcon}
        text="Butler"
        onClick={() => setDrawerOpen(false)}
      />
      {!drawerOpen && (
        <DarkButton
          Icon={MoreHorizOutlinedIcon}
          text="Show Menu"
          onClick={() => setDrawerOpen(true)}
        />
      )}
      <div className={drawerSpacer} />
      <MenuDrawer activity={activity} open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
};

export default BottomNav;
