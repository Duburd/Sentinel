import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import App from './app.jsx';
import Home from './views/home.jsx';
import Admin from './views/admin.jsx';
export default (
    
  <Route path='/' component={App}>
    <Route path='/admin' component={Admin} />
    <Route path='*' component={Home} />
  </Route>
);
