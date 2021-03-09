import React from 'react';
import { makeStyles } from '@material-ui/core';
import ListButton from './ListButton';
import List from './List';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: 'calc(100% - 84px)',
  },
}));

const ListGrid = ({
  first,
  archiveAllCards,
  updateListName,
  createList,
  deleteList,
  addCard,
  lists,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {lists.map((list) => (
        <List
          key={`${list.uuid}-grid`}
          archiveAllCards={archiveAllCards}
          list={list}
          addCard={addCard}
          deleteList={deleteList}
          updateListName={updateListName}
        />
      ))}
      <ListButton first={first} createList={createList} deleteList={deleteList} />
    </div>
  );
};
export default ListGrid;
