import React from 'react';
import { makeStyles } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '../assets/AppsIcon';
import HouseIcon from '../assets/HouseIcon';
import TrelloIcon from '../assets/TrelloIcon';
import PlusIcon from '../assets/PlusIcon';
import InfoIcon from '../assets/InfoIcon';
import AlarmIcon from '../assets/AlarmIcon';
import TrelloBanner from '../assets/TrelloBanner';
import MenuButton from './MenuButton';
import SearchField from './SearchField';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, .32)',
    color: 'rgb(23,43,77)',
    padding: 4,
    maxHeight: 40,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  avatar: {
    height: 32,
    width: 32,
    backgroundColor: '#dfe1e6',
    borderRadius: '50%',
    borderColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 700,
    fontSize: 14,
    cursor: 'pointer',
    '&:focus': {
      outline: 'none',
    },
  },
  spacer: {
    display: 'flex',
    flexGrow: 1,
  },
}));

const TopNav = () => {
  const classes = useStyles();
  const med = useMediaQuery('(min-width:750px)');
  return (
    <div className={classes.root}>
      <MenuButton Icon={AppsIcon} />
      {!med && (
        <>
          <MenuButton Icon={TrelloIcon} />
          <MenuButton Icon={SearchIcon} />{' '}
        </>
      )}
      {med && (
        <>
          <MenuButton Icon={HouseIcon} />
          <MenuButton Icon={TrelloIcon} text="Boards" />
          <SearchField />
        </>
      )}
      <div className={classes.spacer} />
      <TrelloBanner />
      <div className={classes.spacer} style={{ flexBasis: 1 }} />
      <MenuButton Icon={PlusIcon} />
      <MenuButton Icon={InfoIcon} />
      <MenuButton Icon={AlarmIcon} />
      <button type="button" className={classes.avatar}>
        MM
      </button>
    </div>
  );
};

export default TopNav;
