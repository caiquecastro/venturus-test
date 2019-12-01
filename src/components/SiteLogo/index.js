import React from 'react';
import './SiteLogo.scss';
import { faVolleyballBall } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SiteLogo() {
  return (
    <div className="SiteLogo">
      <FontAwesomeIcon icon={faVolleyballBall} size="2x" />
      Venturus Sports
    </div>
  );
}
