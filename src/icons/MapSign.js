import React from 'react';
import { faMapSigns } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MapSign({ size }) {
  return (
    <FontAwesomeIcon icon={faMapSigns} size={size} />
  );
}
