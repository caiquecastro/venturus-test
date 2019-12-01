import React from 'react';
import './Header.css';
import SiteLogo from '../SiteLogo';
import UserMenu from '../UserMenu';

export default function Header() {
  return (
    <div className="Header">
      <div className="container HeaderContainer">
        <SiteLogo />
        <UserMenu />
      </div>
    </div>
  );
}
