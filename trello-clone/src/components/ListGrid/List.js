import React, { useEffect, useState } from 'react';
import { makeStyles, Popover, TextField, Typography } from '@material-ui/core';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import ClearIcon from '@material-ui/icons/Clear';
import AddCard from './AddCard';
import Card from './Card';
import PopoverItem from './PopoverItem';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 8,
    borderRadius: 3,
    height: 'fit-content',
    backgroundColor: '#ebecf0',
    width: 264,
  },
  row: {
    minHeight: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 6,
  },
  head: {
    fontWeight: 600,
    fontSize: 20,
    color: '#172b4d',
  },
  cssOutlinedInput: {
    height: 28,
    '&$cssFocused $notchedOutline': {
      borderColor: `#0079bf !important`,
    },
  },
  cssFocused: {},
  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'transparent !important',
  },
  input: {
    padding: 6,
    fontWeight: 600,
  },
  menu: {
    height: 32,
    width: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: 3,
    marginRight: 4,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(9,30,66,.08)',
    },
    '&:active': {
      backgroundColor: 'rgba(9,30,66,.13)',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  cardCont: {
    display: 'block',
    margin: 4,
    padding: 4,
  },
  //   popper
  paper: {
    borderRadius: 3,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    width: 304,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: 'solid 1px rgba(9,30,66, .13)',
    height: 40,
    margin: '0 12px',
  },
  title: {
    color: '#5e6c84',
    fontSize: 14,
  },
  spacer: {
    height: 1,
    width: 1,
  },
  icon: {
    color: '#42526e',
    fontSize: 16,
    cursor: 'pointer',
    '&:hover': {
      color: '#172b4d',
    },
  },
  divider: {
    borderBottom: 'solid 1px #42526e',
    margin: '0 12',
  },
}));

const List = ({ list, archiveAllCards, addCard, deleteList, updateListName }) => {
  const [listName, setListName] = useState(list.name);
  useEffect(() => {
    if (list.name) {
      setListName(list.name);
    }
  }, [list]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  const handleDelete = () => {
    deleteList(list.uuid);
  };

  const handleArchiveAll = () => {
    archiveAllCards(list.uuid);
  };

  const handleUpdate = () => {
    if (list.name !== listName) {
      updateListName(listName, list.uuid);
    }
  };
  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <TextField
          className={classes.textField}
          placeholder="Enter list title..."
          value={listName}
          onChange={(e) => setListName(e.target.value)}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              console.log('s');
            }
          }}
          onBlur={() => {
            handleUpdate();
          }}
          variant="outlined"
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
              input: classes.input,
            },
          }}
        />
        <button className={classes.menu} type="button" onClick={handleClick}>
          <MoreHorizOutlinedIcon style={{ color: '#6b778c', fontSize: 18 }} />
        </button>
        {/* popper here */}
      </div>
      <div className={classes.cardCont}>
        {list.items.length > 0 && list.items.map((item) => <Card title={item} />)}
      </div>
      {list.name && <AddCard length={list.length} listID={list.uuid} addCard={addCard} />}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transitionDuration={0}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <div className={classes.header}>
            <div className={classes.spacer} />
            <Typography className={classes.title}>List Actions</Typography>
            <ClearIcon className={classes.icon} onClick={handleClose} />
          </div>
          <PopoverItem item="Add Card..." />
          <PopoverItem item="Copy List..." />
          <PopoverItem item="Move List..." />
          <PopoverItem item="Watch..." />
          <div className={classes.divider} />
          <PopoverItem item="Move All Cards in This List..." />
          <PopoverItem item="Archive All Cards in This List..." onClick={handleArchiveAll} />
          <div className={classes.divider} />

          <PopoverItem item="Archive This List..." onClick={handleDelete} />
        </div>
      </Popover>
    </div>
  );
};
export default List;
