import React, { Component, Fragment } from 'react';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, IndexLink, Redirect, Link} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

class BootNavbar extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      redirect: false,
      user: cookies.get('user') || null,
    }
  }

  componentDidMount(){
    const { cookies } = this.props;

    this.setState({
      user: cookies.get('user') || null
    })
  }

  logout = () => {
    const {cookies} = this.props;
    cookies.remove('user')
    console.log(cookies.get('user'))
    this.setState({
      user: null,
    })
    this.setState({
      redirect: true
    })
  }

  render() {
    const {cookies} = this.props
    const {redirect} = this.state
    let logout = null
    let admin = <LinkContainer to="/login">
                  <NavItem eventKey={3}>Login</NavItem>
                </LinkContainer>
    if(cookies.get('user')){
      admin =  <LinkContainer to="/admin">
                <NavItem eventKey={1}>Admin</NavItem>
              </LinkContainer>
    }
    if(redirect){
      logout = <Redirect to="/login" href="/login"/>;
    }
    return (
      <div className="header">
      {logout}
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Sentinel</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>


            <Nav pullRight>
              {admin}
              <LinkContainer to="/">
                <NavItem eventKey={1}>Home</NavItem>
              </LinkContainer>

              <LinkContainer to="/witness">
                <NavItem eventKey={4}>File Witness Report</NavItem>
              </LinkContainer>


              {cookies.get('user') === undefined
                ? <NavItem eventKey={2} href="#"></NavItem>
                : <NavItem onClick={()=>this.logout()}> Logout {cookies.get('user').username} </NavItem>
              }



            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withCookies(BootNavbar);


