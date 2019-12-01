import React from 'react';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Smile(props) {
  return (
    <FontAwesomeIcon icon={faSmile} {...props} />
  );
}
