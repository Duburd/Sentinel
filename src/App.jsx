import React, { Component } from 'react';
import './App.css';
import Navvy from './Navbar.jsx';
import MainTable from './Table.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <div className="App">
              <Navvy />
        <header className="App-header">
          <img src="insure.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to InsuranceBuddy Admin</h1>
        </header>
        <p className="App-intro">
        </p>
        <MainTable />
      </div>
    )
  }
}

export default App;
