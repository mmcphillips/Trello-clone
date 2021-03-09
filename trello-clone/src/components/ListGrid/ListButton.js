import React, { useState } from 'react';
import { Popover, TextField, makeStyles, Typography } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import PlusIcon from '../../assets/PlusIcon';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 4,
    position: 'relative',
    marginRight: 8,
    width: 264,
    padding: 4,
    maxHeight: 40,
    backgroundColor: 'rgba(0, 00, 0, 0.08)',
    borderRadius: 3,
    color: '#000',
    border: 'none',
    cursor: 'pointer',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.16)',
    },
    '&:active': {
      backgroundColor: 'rgba(0, 0, 0, 0.24)',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  text: {
    fontSize: 15,
    color: '#172b4d',
  },
  icon: {
    color: '#42526e',
    cursor: 'pointer',
    '&:hover': {
      color: '#172b4d',
    },
  },
  addList: {
    // height: 80,
    maxHeight: 80,
    border: 'solid 1px green',
    transition: '.3s',
  },
  hidden: {
    zIndex: 0,
    maxHeight: 0,
    transition: '.3s',
    overflow: 'hidden',
  },
  popoverPaper: {
    width: 264,
    backgroundColor: '#ebecf0',
    padding: 4,
  },
  popoverPaperFirst: {
    width: 264,
    marginLeft: -12,
    backgroundColor: '#ebecf0',
    padding: 4,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  submit: {
    height: 32,
    backgroundColor: '#5aac44',
    color: '#fff',
    borderRadius: 3,
    cursor: 'pointer',
    border: 'none',
    '&:hover': {
      outline: 'none',
      backgroundColor: '#61bd4f',
    },
    '&:focus': {
      outline: 'none',
    },
  },

  cssOutlinedInput: {
    // height: 28,
    height: 40,
    '&$cssFocused $notchedOutline': {
      borderColor: `#0079bf !important`,
    },
  },
  cssFocused: {
    borderColor: `red !important`,
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'transparent !important',
  },
  input: {
    padding: 6,
  },
}));

const ListButton = ({ first, createList }) => {
  const addMessage = first ? 'Add a list' : 'Add another list';
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const [listName, setListName] = useState('');
  const handleSubmit = () => {
    createList(listName);
    setListName('');
  };

  return (
    <>
      <div className={classes.root} aria-describedby={id} type="button" onClick={handleClick}>
        <PlusIcon dark style={{ marginRight: 4, fontSize: 16 }} className={classes.icon} />
        <Typography className={classes.text}>{addMessage}</Typography>
      </div>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        classes={{ paper: first ? classes.popoverPaperFirst : classes.popoverPaper }}
      >
        <TextField
          autoFocus
          fullWidth
          placeholder="Enter list title..."
          value={listName}
          onChange={(e) => setListName(e.target.value)}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              handleSubmit();
            }
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
        <div className={classes.row}>
          <button type="button" tabIndex={0} className={classes.submit} onClick={handleSubmit}>
            Add List
          </button>
          <ClearIcon
            className={classes.icon}
            style={{ marginLeft: 2, fontSize: 29 }}
            onClick={handleClose}
          />
        </div>
      </Popover>
    </>
  );
};
export default ListButton;
