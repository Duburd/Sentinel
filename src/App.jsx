import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Admin from './views/Admin.jsx';
import Login from './views/Login.jsx';
import Routes from './Routes.jsx';
import Home from './views/Home.jsx';
import Navbar from './views/Components/Navbar.jsx';
import { Auth } from "aws-amplify";
require("babel-core/register");
require("babel-polyfill");



const About = () => (
  <div>
    <h2>About</h2>
  </div>
);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isAuthenticated: false,
      // isAuthenticating: true
    }
  }


  // userHasAuthenticated = authenticated => {
  //   this.setState({ isAuthenticated: authenticated });
  // }

  // handleLogout = event => {
  //   this.userHasAuthenticated(false);
  // }

  // async componentDidMount() {
  //   try {
  //     if (await Auth.currentSession()) {
  //       this.userHasAuthenticated(true);
  //     }
  //   }
  //   catch (e) {
  //     if (e !== 'No current user') {
  //       alert(e);
  //     }
  //   }

  //   this.setState({ isAuthenticating: false });
  // }


  render() {

    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    }

    return (
      <div>
      <Navbar />
      <Routes childProps={childProps} />
      </div>
    )
  }
}

export default App;