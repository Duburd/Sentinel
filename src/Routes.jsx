import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppliedRoute from "./AppliedRoute.jsx";
import App from './App.jsx';
import Admin from './views/Admin.jsx';
import Login from './views/Login.jsx';
import Home from './views/Home.jsx';
import Contact from './views/Contact.jsx';
import Witness from './views/Witness.jsx';



class Routes extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
                <div>
                </div>
        )
    }
}

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/admin" component={Admin} props={childProps}/>
    <AppliedRoute path="/contact" component={Contact} />
    <AppliedRoute path="/witness" component={Witness} />
    { /* Finally, catch all unmatched routes */ }
    {/* <Route component={NotFound} /> */}
  </Switch>;