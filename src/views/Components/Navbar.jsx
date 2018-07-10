import React, { Component, Fragment } from 'react';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

class Navvy extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="header">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Sentinel</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>


            <Nav pullRight>
              <LinkContainer to="/admin">
                <NavItem eventKey={1}>Admin</NavItem>
              </LinkContainer>
              <LinkContainer to="/">
                <NavItem eventKey={2}>Home</NavItem>
              </LinkContainer>
              <LinkContainer to="/login">
                <NavItem eventKey={3}>Login</NavItem>
              </LinkContainer>
              <LinkContainer to="/witness">
                <NavItem eventKey={4}>Main</NavItem>
              </LinkContainer>


              {this.state.isAuthenticated
                ? <NavItem eventKey={2} href="#"> Logout (I'm logged in) </NavItem>
                : <NavItem eventKey={2} href="#"> Login (I'm logged out) </NavItem>
              }



            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navvy;


