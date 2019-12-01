import React from 'react';
import { faLifeRing } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LifeRing(props) {
  return (
    <FontAwesomeIcon icon={faLifeRing} {...props} />
  );
}
