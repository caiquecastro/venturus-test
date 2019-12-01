import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import UsersTable from "./components/UsersTable";
import RegistrationForm from "./components/RegistrationForm";

class App extends Component{
  render(){
    return(
      <div className="App">
        <Navbar />
        <Header />
        <UsersTable />
        <RegistrationForm />
      </div>
    );
  }
}

export default App;