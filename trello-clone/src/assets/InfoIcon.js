import React from 'react';
import { SvgIcon } from '@material-ui/core';

const InfoIcon = () => (
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
      d="M12 20a8 8 0 100-16 8 8 0 000 16zm0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
      fill="#fff"
    />
    <path d="M11 11a1 1 0 112 0v5a1 1 0 11-2 0v-5zm2-3a1 1 0 11-2 0 1 1 0 012 0z" fill="#fff" />
  </SvgIcon>
);
export default InfoIcon;
