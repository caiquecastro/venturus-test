import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import UsersTable from './components/UsersTable';
import PageBanner from './components/PageBanner';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <PageBanner />
      <UsersTable />
      <RegistrationForm />
    </div>
  );
}

export default App;
