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
              <Link to="/">Valiant</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav >
              <NavItem eventKey={1} href="#">
                Link
      </NavItem>
              <NavItem eventKey={2} href="#">
                Link
      </NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>


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
              <LinkContainer to="/main">
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


