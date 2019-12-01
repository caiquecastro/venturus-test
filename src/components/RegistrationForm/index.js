import React, { useState } from 'react';
import './RegistrationForm.scss';
import SmileIcon from '../../icons/Smile';
import LifeRingIcon from '../../icons/LifeRing';
import HeartbeatIcon from '../../icons/HeartBeat';
import UsersService from '../../services/UsersService';

export default function RegistrationForm({ onRegister }) {
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
    }).then((data) => {
      onRegister && onRegister(data);
      window.alert('User successfully registered');
    });
  }

  function resetForm() {
    setUsername('');
    setName('');
    setEmail('');
    setCity('');
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
          <div className="Fields">
            <div className="Field">
              <label htmlFor="usernameInput">Username</label>
              <input
                id="usernameInput"
                className="FormInput"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>

            <div className="Field">
              <label htmlFor="cityInput">City</label>
              <input
                id="cityInput"
                className="FormInput"
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
            </div>

            <div className="Field">
              <label htmlFor="nameInput">Name</label>
              <input
                id="nameInput"
                className="FormInput"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

            <fieldset className="Field">
              <legend>Ride in group?</legend>
              <div className="RadioGroup">
                <div className="RadioGroupItem">
                  <input type="radio" name="rideInGroup" id="alwaysRide" />
                  <label htmlFor="alwaysRide">Always</label>
                </div>

                <div className="RadioGroupItem">
                  <input type="radio" name="rideInGroup" id="sometimesRide" />
                  <label htmlFor="sometimesRide">Sometimes</label>
                </div>

                <div className="RadioGroupItem">
                  <input type="radio" name="rideInGroup" id="neverRide" />
                  <label htmlFor="neverRide">Sometimes</label>
                </div>
              </div>
            </fieldset>

            <div className="Field">
              <label htmlFor="emailInput">E-mail</label>
              <input
                id="emailInput"
                className="FormInput"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <fieldset className="Field">
              <legend>Days of the week</legend>

              <div className="RadioGroup">
                <div className="RadioGroupItem">
                  <input type="checkbox" name="daysOfTheWeek" id="sunday" />
                  <label htmlFor="sunday">Su</label>
                </div>

                <div className="RadioGroupItem">
                  <input type="checkbox" name="daysOfTheWeek" id="monday" />
                  <label htmlFor="monday">Mo</label>
                </div>

                <div className="RadioGroupItem">
                  <input type="checkbox" name="daysOfTheWeek" id="tuesday" />
                  <label htmlFor="tuesday">Tue</label>
                </div>

                <div className="RadioGroupItem">
                  <input type="checkbox" name="daysOfTheWeek" id="wednesday" />
                  <label htmlFor="wednesday">Wed</label>
                </div>

                <div className="RadioGroupItem">
                  <input type="checkbox" name="daysOfTheWeek" id="thursday" />
                  <label htmlFor="thursday">Thu</label>
                </div>

                <div className="RadioGroupItem">
                  <input type="checkbox" name="daysOfTheWeek" id="friday" />
                  <label htmlFor="friday">Fri</label>
                </div>

                <div className="RadioGroupItem">
                  <input type="checkbox" name="daysOfTheWeek" id="saturday" />
                  <label htmlFor="saturday">Sat</label>
                </div>
              </div>
            </fieldset>
          </div>

          <button className="Button Button--primary" onClick={saveUser}>Save</button>
          <button className="Button" type="reset" onClick={resetForm}>Discard</button>
        </form>
      </div>
    </div>
  );
}
