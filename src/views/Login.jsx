import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import "../styles/login.css";
import "../styles/App.css"
require("babel-core/register");
require("babel-polyfill");
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import { Redirect, Link} from 'react-router-dom';

class Login extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      user: cookies.get('user') || null,
      username: "matti",
      password: "abc123",
      logErr: null,
      redirect: false
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  onUserChange = (event) => {
    this.setState({username: event.target.value});
  }

  onPassChange = (event) => {
    this.setState({password: event.target.value});
  }

  handleSubmit = () => {
    this.setState({logErr: null})
    const loginObj = {
      username: this.state.username,
      password: this.state.password,
    }
    console.log(loginObj)
    const cred = JSON.stringify(loginObj)
    fetch('api/admins/session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: cred,
    })
    .then((results)=> results.json())
    .then((response) => {
      if(response.user === null){
          this.setState({logErr: response.message})
          console.log(response)
        } else {
          const { cookies } = this.props
          console.log(response.user[0])
          cookies.set('user', response.user[0], { path: '/' })
          const user = cookies.get('user')
          this.setState({
            user: user,
            redirect: true,
          })
        }
    })
  }

  render() {
    const {redirect} = this.state
    if(redirect){
      return <Redirect to="/"/>
    } else {
    return (
      <div className="App">
      <header className="App-header">
      <img src="insure.svg" className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to Sentinel</h1>
      <div className="Login">
        <form>
          <ControlLabel style={{color: 'tomato'}}>{this.state.logErr}</ControlLabel>
          <FormGroup controlId="username" bsSize="large">
          <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              type="username"
              value={this.state.username}
              onChange={this.onUserChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.onPassChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            onClick={()=>this.handleSubmit()}
          >
            Login
          </Button>
          {this.state.redirect}
        </form>
      </div>
      </header>
      </div>
    );
  }
  }
}

export default withCookies(Login)