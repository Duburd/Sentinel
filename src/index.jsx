import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors'
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import { BrowserRouter } from 'react-router-dom'


const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});


ReactDOM.render(
    <BrowserRouter>
    <App />
  </BrowserRouter>, 
document.getElementById('react-root'));
