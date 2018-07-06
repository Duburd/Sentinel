import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom'
export default class Home extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
    return (
      <div id="home">
        <img src={ require('../public/images/AdobeStock_64718583.jpeg') } />
      </div>
    );
  }
}