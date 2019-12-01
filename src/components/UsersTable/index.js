import React, { useState, useEffect } from 'react';
import './UsersTable.scss';
import UsersService from '../../services/UsersService';
import TrashIcon from '../../icons/TrashIcon';

function getCityLink(address = {}) {
  const { geo: { lat, lng } } = address;

  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
}

export default function UsersTable({ users, onFilter, onDelete }) {
  function deleteUser(user) {
    const confirmAnswer = window.confirm(`Do you want to delete user ${user.name}?`);

    if (confirmAnswer) {
      UsersService.deleteUser(user.id)
        .then(() => {
          window.alert('User was successfully deleted');
          onDelete && onDelete(user.id);
        });
    }
  }

  return (
    <div className="UsersTable">
      <div className="container">
        <div className="PageHeader">
          <h1 className="PageTitle">Users</h1>
          <form action="/" method="GET" className="SearchForm">
            <label htmlFor="searchInput" className="sr-only">Buscar</label>
            <input
              type="text"
              id="searchInput"
              className="FormInput"
              placeholder="Filter Table Content"
              onChange={(e) => onFilter(e.target.value)}
            />
          </form>
        </div>
        <table className="Table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>City</th>
              <th>Ride in group</th>
              <th>Day of the week</th>
              <th>Post</th>
              <th>Albums</th>
              <th>Photos</th>
              <th>
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {
                    user.address.geo ?
                      (
                        <a href={getCityLink(user.address)}>
                          {user.address.city}
                        </a>
                      ) : user.address.city
                  }
                </td>
                <td>{user.rideInGroup}</td>
                <td>{user.rideDays}</td>
                <td>{user.postsCount || '0'}</td>
                <td>{user.albumsCount || '0'}</td>
                <td>{user.photosCount || '0'}</td>
                <td className="TableAction">
                  <button type="button" onClick={() => deleteUser(user)}>
                    <TrashIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
