import React from 'react';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HeartBeat(props) {
  return (
    <FontAwesomeIcon icon={faHeartbeat} {...props} />
  );
}
