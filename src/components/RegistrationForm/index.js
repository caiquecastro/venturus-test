import React, { useState } from 'react';
import './RegistrationForm.scss';
import SmileIcon from '../../icons/Smile';
import LifeRingIcon from '../../icons/LifeRing';
import HeartbeatIcon from '../../icons/HeartBeat';
import UsersService from '../../services/UsersService';

export default function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');

  function saveUser(e) {
    e.preventDefault();

    UsersService.create({
      username,
      name,
      email,
      city,
    }).then(() => {
      window.alert('User successfully registered');
    });
  }

  return (
    <div className="Registration">
      <div className="container">
        <div className="PageHeader">
          <h1 className="PageTitle">Registration</h1>
        </div>
        <div className="RegistrationBanner">
          <div className="BannerItem">
            <h2>Need help?</h2>
            <div className="BannerItemText">
              <LifeRingIcon size="4x" />
              <p className="">
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="BannerItem">
            <h2>Why register?</h2>
            <div className="BannerItemText">
              <HeartbeatIcon size="4x" />
              <p className="">
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="BannerItem">
            <h2>What people are saying...</h2>
            <div className="BannerItemText">
              <SmileIcon size="4x" />
              <p className="">
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <form className="RegistrationForm">
          <label htmlFor="usernameInput">Username</label>
          <input
            id="usernameInput"
            className="FormInput"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <label htmlFor="nameInput">Name</label>
          <input
            id="nameInput"
            className="FormInput"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label htmlFor="emailInput">E-mail</label>
          <input
            id="emailInput"
            className="FormInput"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="cityInput">City</label>
          <input
            id="cityInput"
            className="FormInput"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />

          <button onClick={saveUser}>Save</button>
        </form>
      </div>
    </div>
  );
}
