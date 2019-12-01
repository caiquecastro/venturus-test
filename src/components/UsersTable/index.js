import React, { useState, useEffect } from 'react';
import './UsersTable.scss';
import UsersService from '../../services/UsersService';

function getCityLink(address) {
  const { geo: { lat, lng } } = address;

  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
}

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    UsersService.fetchAll()
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div className="UsersTable">
      <div className="PageHeader">
        <h1 className="PageTitle">Users</h1>
        <form action="/" method="GET">
          <input />
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
            <th className="sr-only">Actions</th>
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
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
