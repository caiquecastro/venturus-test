import React, { useState, useEffect } from 'react';
import './UsersTable.scss';
import UsersService from '../../services/UsersService';
import TrashIcon from '../../icons/TrashIcon';

function getCityLink(address) {
  const { geo: { lat, lng } } = address;

  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
}

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    UsersService.fetchAll({
      filter,
    }).then((data) => {
      setUsers(data);
    }).catch((err) => {
      setError(err.message);
    });
  }, [filter]);

  function deleteUser(user) {
    const confirmAnswer = window.confirm(`Do you want to delete user ${user.name}?`);

    if (confirmAnswer) {
      UsersService.deleteUser(user.id)
        .then(() => {
          window.alert('User was successfully deleted');
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
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
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
                  <a href={getCityLink(user.address)}>
                    {user.address.city}
                  </a>
                </td>
                <td>-----</td>
                <td>-----</td>
                <td>{user.postsCount}</td>
                <td>{user.albumsCount}</td>
                <td>{user.photosCount}</td>
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
