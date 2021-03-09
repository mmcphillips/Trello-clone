import React, { useState } from 'react';
import { makeStyles, SvgIcon } from '@material-ui/core';
import classNames from 'classnames';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    cursor: 'pointer',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 700,
  },
  active: {
    color: 'rgba(255, 255, 255, .8)',
  },
  inactive: {
    color: 'rgba(255, 255, 255, .5)',
  },
}));
const TrelloBanner = () => {
  const classes = useStyles();
  const [active, setActive] = useState(false);

  const rootStyle = classNames(classes.root, {
    [classes.active]: active,
    [classes.inactive]: !active,
  });

  return (
    <div
      className={rootStyle}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <SvgIcon
        width="24"
        height="24"
        role="presentation"
        focusable="false"
        viewBox="0 0 24 24"
        style={{ fontSize: 20 }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm2 1a1 1 0 011-1h4a1 1 0 011 1v10a1 1 0 01-1 1H6a1 1 0 01-1-1V6zm9-1a1 1 0 00-1 1v6a1 1 0 001 1h4a1 1 0 001-1V6a1 1 0 00-1-1h-4z"
          fill={active ? 'rgba(255, 255, 255, .8)' : 'rgba(255, 255, 255, .5)'}
        />
      </SvgIcon>
      <span>Trello</span>
    </div>
  );
};

export default TrelloBanner;
