import React, { useState } from 'react';
import { ClickAwayListener, makeStyles, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles(() => ({
  root: {},

  button: {
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: 3,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'auto',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(9,30,66,.13)',
    },
    '&:active': {
      backgroundColor: 'rgba(0, 0, 0, 0.24)',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 16,
    color: '#42526e',
  },
  item: {
    color: '#172b4d',
    fontWeight: 400,
    fontSize: 16,
  },
  add: {
    backgroundColor: '#fff',
    borderRadius: 3,
    borderBottom: 'solid 1px #172b4d',
    boxShadow: 'rgba(9, 30, 66, 0.25) 0px 1px 0px 0px',
    marginBottom: 8,
  },
  input: {
    padding: 0,
    backgroundColor: 'transparent',
    '&::placeholder': {
      fontSize: 14,
      opacity: 0.6,
      color: '#172b4d',
    },
  },
  inputRoot: {
    padding: 6,
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
    },
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
      color: 'red',
    },
    '&:active': {
      backgroundColor: 'rgba(9,30,66,.13)',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  iconClear: {
    // color: '#6b778c',
    color: 'rgb(9 30 66 / 25%)',
    '&:hover': {
      color: '#172b4d',
    },
  },
}));

const AddCard = ({ length = 0, listID, addCard }) => {
  const cardMessage = length ? 'Add a card' : 'Add a card';
  const [active, setActive] = useState(false);
  const [cardContent, setCardContent] = useState('');

  const classes = useStyles();
  const onClose = () => {
    setCardContent('');
    setActive(false);
  };
  const handleAdd = () => {
    addCard(cardContent, listID);
    onClose();
  };

  return (
    <ClickAwayListener onClickAway={() => setActive(false)}>
      <div style={{ paddingLeft: 4, paddingRight: 8, marginBottom: 8 }}>
        {!active && (
          <div className={classes.row} style={{ marginLeft: 4, marginRight: 8 }}>
            <div
              type="button"
              className={classes.button}
              style={{ flexGrow: 1, justifyContent: 'start' }}
              onClick={() => setActive(true)}
            >
              <AddIcon className={classes.icon} />
              <span className={classes.item}> {cardMessage}</span>
            </div>

            <div type="button" className={classes.button}>
              <ImageOutlinedIcon className={classes.icon} />
            </div>
          </div>
        )}

        {active && (
          <>
            <div className={classes.add}>
              <TextField
                id="filled-multiline-static"
                disableUnderline
                value={cardContent}
                onChange={(e) => setCardContent(e.target.value)}
                multiline
                rows={3}
                placeholder="Enter a title for this card..."
                variant="filled"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  classes: { root: classes.inputRoot, input: classes.input },
                }}
              />
            </div>
            <div className={classes.row}>
              <button type="button" tabIndex={0} className={classes.submit} onClick={handleAdd}>
                Add Card
              </button>
              <ClearIcon className={classes.iconClear} onClick={onClose} />
              <div style={{ flex: 1 }} />
              <button className={classes.menu} type="button">
                <MoreHorizOutlinedIcon
                  className={classes.iconClear}
                  style={{ color: '#6b778c', fontSize: 20 }}
                />
              </button>
            </div>
          </>
        )}
      </div>
    </ClickAwayListener>
  );
};
export default AddCard;
