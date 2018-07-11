import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Admin from './views/Admin.jsx';
import Login from './views/Login.jsx';
import Routes from './Routes.jsx';
import Home from './views/Home.jsx';
import Navbar from './views/Components/Navbar.jsx';
import { instanceOf } from 'prop-types';
import cookie from 'react-cookie';
require("babel-core/register");
require("babel-polyfill");

class App extends Component {

  render() {
    const childProps = {
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