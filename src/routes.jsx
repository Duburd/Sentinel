import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppliedRoute from "./AppliedRoute.jsx";
import App from './app.jsx';
import Admin from './views/admin.jsx';
import Login from './views/login.jsx';
import Home from './Home.jsx';


class Routes extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                </div>
            </Router>
        )
    }
}

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/admin" component={Admin} />
    { /* Finally, catch all unmatched routes */ }
    {/* <Route component={NotFound} /> */}
  </Switch>;