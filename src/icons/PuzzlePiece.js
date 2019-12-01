import React from 'react';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PuzzlePiece(props) {
  return (
    <FontAwesomeIcon icon={faPuzzlePiece} {...props} />
  );
}
