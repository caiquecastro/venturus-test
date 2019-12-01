import React from 'react';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Trophy(props) {
  return (
    <FontAwesomeIcon icon={faTrophy} {...props} />
  );
}
