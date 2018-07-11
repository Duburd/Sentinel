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
 logout = () => {
   const {cookies} = this.props;
   cookies.remove('user')
   this.setState({
     user: null,
   })
   this.setState({
     redirect: true
   })
 }

 render() {
   const {redirect} = this.state
   if(redirect){
     return <Redirect to="/" href="/login"/>
   } else {
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
               <NavItem eventKey={4}>Submit a witness report</NavItem>
             </LinkContainer>


             {this.state.user
               ? <NavItem onClick={()=>this.logout()}> Logout {this.state.user.username} </NavItem>
               : <NavItem eventKey={2} href="#"> Login (I'm logged out) </NavItem>
             }



           </Nav>
         </Navbar.Collapse>
       </Navbar>
     </div>
   );
 }
 }
}

export default withCookies(BootNavbar);