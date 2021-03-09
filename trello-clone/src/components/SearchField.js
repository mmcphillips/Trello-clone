import React, { useState } from 'react';
import { ClickAwayListener, Input, makeStyles } from '@material-ui/core';

import ClearIcon from '@material-ui/icons/Clear';
import CallMadeIcon from '@material-ui/icons/CallMade';
import SearchIcon from '@material-ui/icons/Search';

import classNames from 'classnames';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 184,
    flexGrow: 1,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, .3)',
    transition: '.1s',
  },
  input: {
    padding: '2px 2px 0px 8px',
    height: 32,
    borderRadius: 3,
    flexGrow: 1,
  },
  inputInactive: {
    '&::placeholder': {
      color: '#fff',
      opacity: 1,
    },
  },
  inputActive: {
    '&::placeholder': {
      color: '#000',
      opacity: 1,
    },
  },
  inputRoot: {
    padding: 0,
  },
  icon: { fontSize: 20, paddingRight: 4, marginRight: 7, cursor: 'pointer' },
  iconActive: {
    color: 'rgb(66, 82, 110)',
  },
  iconInactive: {
    color: '#fff',
  },
  rootActive: {
    maxWidth: 280,
    backgroundColor: '#fff',
  },
}));

const SearchField = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [query, setQuery] = useState('');

  const classes = useStyles();
  const rootStyle = classNames(classes.root, { [classes.rootActive]: searchActive });
  const inputStyle = classNames(classes.input, {
    [classes.inputInactive]: !searchActive,
    [classes.inputActive]: searchActive,
  });
  const activeIconStyle = classNames(classes.icon, classes.iconActive);
  const inactiveIconStyle = classNames(classes.icon, classes.iconInactive);
  const handleClose = (e) => {
    e.stopPropagation();
    setSearchActive(false);
  };
  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div className={rootStyle}>
        <Input
          value={query}
          onClick={() => setSearchActive(true)}
          onChange={(e) => setQuery(e.target.value)}
          variant="outlined"
          disableUnderline
          style={{ flexGrow: 1 }}
          classes={{ root: classes.inputRoot, input: inputStyle }}
          placeholder={searchActive ? 'Search...' : 'Jump to...'}
          endAdornment={
            searchActive ? (
              <>
                <CallMadeIcon className={activeIconStyle} onClick={handleClose} />
                <ClearIcon className={activeIconStyle} onClick={handleClose} />
              </>
            ) : (
              <SearchIcon className={inactiveIconStyle} />
            )
          }
        />
      </div>
    </ClickAwayListener>
  );
};
export default SearchField;
