import React from 'react';
import { Drawer, makeStyles } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import SearchIcon from '@material-ui/icons/Search';
import DrawerButton from './DrawerButton';
import TrelloDarkIcon from '../../assets/TrelloDarkIcon';
import RobotIcon from '../../assets/RobotIcon';
import RocketIcon from '../../assets/RocketIcon';
import Action from './Action';

const useStyles = makeStyles(() => ({
  root: {},
  paper: {
    border: 'none',
    width: 339,
    top: 40,
    height: 'calc(100% - 40px)',
    backgroundColor: '#f4f5f7',
  },
  container: {
    margin: '0 4px',
  },
  header: {
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  divider: {
    width: '100%',
    height: 1,
    borderBottom: 'solid 1px rgba(9,30,66,.13)',
  },
  divider16: {
    width: '100%',
    height: 1,
    borderBottom: 'solid 1px rgba(9,30,66,.13)',
    margin: '16px 0',
  },
  scrollBody: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  clear: {
    cursor: 'pointer',
    color: '#42526e',
    '&:hover': {
      color: '#091e42',
    },
  },
  scroll: {
    maxHeight: 470,
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      cursor: 'pointer !important',
      width: 10,
    },
    '&::-webkit-scrollbar-thumb': {
      width: 30,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    '&::-webkit-scrollbar-track': {
      width: 20,
      backgroundColor: 'rgba(0, 0, 0, 0.25)',
      borderRadius: 10,
    },
  },
}));

const ActivityDrawer = ({ open, onClose, activity }) => {
  const classes = useStyles();

  return (
    <Drawer
      open={open}
      onClose={onClose}
      BackdropProps={{ invisible: true }}
      variant="temporary"
      anchor="right"
      classes={{ paper: classes.paper }}
    >
      <div className={classes.container}>
        <div className={classes.header}>
          <div> </div> <h3>Menu</h3> <ClearIcon className={classes.clear} onClick={onClose} />
        </div>
        <div className={classes.divider} />
        <div className={classes.scrollBody}>
          <DrawerButton
            Icon={TrelloDarkIcon}
            head="About This Board"
            desc="Add a description to your board"
          />
          <DrawerButton image head="Change Background" />
          <DrawerButton Icon={SearchIcon} head="Search Cards" />
          <DrawerButton Icon={FiberManualRecordOutlinedIcon} head="Stickers" />
          <DrawerButton Icon={MoreHorizOutlinedIcon} head="More" />
          <div className={classes.divider16} />
          <DrawerButton Icon={RobotIcon} head="Butler" desc="Automate cards and more..." />
          <div className={classes.divider16} />
          <DrawerButton Icon={RocketIcon} head="Power-Ups" desc="Google Drive and more..." />
          <DrawerButton content={1} desc="Add Power-Up..." />
          <div className={classes.divider16} />
          <DrawerButton Icon={FormatListBulletedIcon} head="Activity" />
          <div className={classes.scroll}>
            <Action
              name="Kevin McPhillips"
              action="hurled"
              item="litter"
              descriptor="in every room in the house"
              time={Date.now()}
            />
            {activity.length > 0 &&
              activity.map(({ name, action, item, descriptor, time }, i) => (
                <Action
                  name={name}
                  action={action}
                  item={item}
                  descriptor={descriptor}
                  time={time}
                  key={`${name}${i}`}
                />
              ))}
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default ActivityDrawer;
