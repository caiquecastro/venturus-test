import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import UsersTable from './components/UsersTable';
import PageBanner from './components/PageBanner';
import UsersService from './services/UsersService';
import RegistrationForm from './components/RegistrationForm';

function App() {
  const [users, setUsers] = useState([]);

  function fetchUsers(filter = '') {
    UsersService.fetchAll({
      filter,
    }).then((data) => {
      setUsers(data);
    }).catch((err) => {
      setError(err.message);
    });
  }

  function onDeleteUser(userId) {
    setUsers(users.filter((u) => u.id !== userId));
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  function onRegister(newUser) {
    setUsers([
      ...users,
      newUser,
    ]);
  }

  return (
    <div className="App">
      <Header />
      <Navbar />
      <PageBanner />
      <UsersTable
        users={users}
        onDelete={onDeleteUser}
        onFilter={fetchUsers}
      />
      <RegistrationForm onRegister={onRegister} />
    </div>
  );
}

export default App;
