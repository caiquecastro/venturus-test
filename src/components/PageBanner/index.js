import React from 'react';
import './PageBanner.scss';
import Trophy from '../../icons/Trophy';
import MapSign from '../../icons/MapSign';
import PuzzlePiece from '../../icons/PuzzlePiece';

export default function PageBanner() {
  return (
    <div className="PageBanner">
      <div className="container PageBannerContainer">
        <div className="PageDetails">
          <PuzzlePiece size="3x" />
          <div className="PageDetail">
            <p className="PageDetailTitle">Sport type</p>
            <p className="PageDetailValue">Cycling</p>
          </div>
        </div>
        <div className="PageDetails">
          <Trophy size="3x" />
          <div className="PageDetail">
            <p className="PageDetailTitle">Mode</p>
            <p className="PageDetailValue">Advanced</p>
          </div>
        </div>
        <div className="PageDetails">
          <MapSign size="3x" />
          <div className="PageDetail">
            <p className="PageDetailTitle">Route</p>
            <p className="PageDetailValue">30 miles</p>
          </div>
        </div>
      </div>
    </div>
  );
}
