import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Admin from './views/admin.jsx';
import Login from './views/login.jsx';
import Routes from './routes.jsx';
import Home from './views/home.jsx';
import Navvy from './views/Components/Navbar.jsx';
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
      <Navvy />
      <Routes childProps={childProps} />
      </div>
    )
  }
}

export default App;