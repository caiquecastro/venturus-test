import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import UsersTable from './components/UsersTable';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <UsersTable />
      <RegistrationForm />
    </div>
  );
}

export default App;
