import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppliedRoute from "./AppliedRoute.jsx";
import App from './app.jsx';
import Admin from './views/admin.jsx';
import Login from './views/login.jsx';
import Home from './views/home.jsx';
import Main from './views/main.jsx';
import Contact from './views/contact.jsx';



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
    <AppliedRoute path="/admin" component={Admin} />
    <AppliedRoute path="/main" component={Main} />
    <AppliedRoute path="/contact" component={Contact} />
    { /* Finally, catch all unmatched routes */ }
    {/* <Route component={NotFound} /> */}
  </Switch>;