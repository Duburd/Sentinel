import React, { Component } from "react";
import "../styles/App.css"
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
        <div>
            <Redirect refresh='5' to='/' />
          <div>
            <img className="mainPagePics" src='./Images/AdobeStock_187790448.jpeg' />
          </div>
          You are now logged out. Redirecting...
        </div>
    );
  }
}