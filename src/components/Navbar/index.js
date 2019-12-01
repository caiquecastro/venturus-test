import React from 'react';
import './Navbar.scss';
import HomeIcon from '../../icons/HomeIcon';

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="container">
        <ul className="Breadcrumbs">
          <li className="BreadcrumbItem">
            <a href="#">
              <HomeIcon />
            </a>
          </li>
          <li className="BreadcrumbItem">
            <a href="#">Page Name</a>
          </li>
          <li className="BreadcrumbItem">
            <a href="#">Breadcrumb</a>
          </li>
          <li className="BreadcrumbItem">Current page</li>
        </ul>
      </div>
    </div>
  );
}
