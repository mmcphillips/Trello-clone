import React, { useState } from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core';

import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';
import splashCropped from './assets/splashCropped.jpg';
import ListGrid from './components/ListGrid';

const useStyles = makeStyles(() => ({
  app: {
    height: '100vh',
    width: '100vw',
    backgroundImage: `url(${splashCropped})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

const App = () => {
  const classes = useStyles();
  const [lists, setLists] = useState([]);
  const [activity, setActivity] = useState([]);

  const addActivity = (
    name = 'Matthew McPhillips',
    action = 'altered',
    item = 'the deal',
    descriptor = '',
    time = Date.now()
  ) => {
    setActivity((prevActivity) =>
      prevActivity.slice().concat([{ name, action, item, descriptor, time }])
    );
  };

  const createList = (listName) => {
    const randomString = (() => Math.random().toString(36).substring(7))();
    setLists((prevLists) =>
      prevLists.slice().concat([{ name: listName, uuid: randomString, items: [] }])
    );
    addActivity('Matthew McPhillips', 'added', listName, 'to this board', Date.now());
  };

  const deleteList = (uuid) => {
    let name = '';
    lists.forEach((list) => {
      if (list.uuid === uuid) {
        name = list.name;
      }
    });
    setLists((prevLists) => prevLists.slice().filter((list) => list.uuid !== uuid));
    addActivity('Matthew McPhillips', 'removed', name, 'from this board', Date.now());
  };

  const archiveAllCards = (uuid) => {
    let name = '';
    lists.forEach((list) => {
      if (list.uuid === uuid) {
        name = list.name;
      }
    });
    setLists((prevList) => {
      const prev = prevList.slice();
      const newList = prev.map((list) => {
        if (list.uuid === uuid) {
          list.items = [];
        }
        return list;
      });
      return newList;
    });
    addActivity('Kanye West', 'archived all cards from', name, Date.now());
  };

  const addCard = (content, uuid) => {
    let name = '';
    lists.forEach((list) => {
      if (list.uuid === uuid) {
        name = list.name;
      }
    });
    const listCopy = lists.slice();
    listCopy.forEach((list) => {
      if (list.uuid === uuid) {
        console.log('match');
        list.items = list.items.concat([content]);
      }
    });
    setLists(listCopy);
    addActivity('Kevin McPhillips', 'Added ', content, `to ${name}`, Date.now());
  };

  const updateListName = (listName, uuid) => {
    setLists((prevLists) => {
      const newList = prevLists.slice().map((list) => {
        if (list.uuid === uuid) {
          list.name = listName;
        }
        return list;
      });
      return newList;
    });
  };
  // const theme = createMuiTheme({
  //   typography: {
  //     fontFamily: '-apple-system',
  //   },
  // });
  return (
    // <MuiThemeProvider theme={theme}>
    <CssBaseline>
      <div className={classes.app}>
        <TopNav />
        <BottomNav activity={activity} />
        <ListGrid
          first={lists.length === 0}
          lists={lists}
          createList={createList}
          deleteList={deleteList}
          archiveAllCards={archiveAllCards}
          addCard={addCard}
          updateListName={updateListName}
        />
      </div>
    </CssBaseline>
    // </MuiThemeProvider>
  );
};
export default App;
