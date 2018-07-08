import React, { Component } from 'react';
import '../styles/App.css';
import EnhancedTable from './Components/Enhanced_table.jsx';
import SimpleModalWrapped from './Components/Modal.jsx';
import NotificationSystem from 'react-notification-system';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './Login.jsx';
import { withAuthenticator } from 'aws-amplify-react';




class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      claimsList: [],
      selected: [],
      open: false,
    }
  }

  _notificationSystem = null
 
  _addNotification = (event, msg) => {
    event.preventDefault();
    this._notificationSystem.addNotification({
      message: msg,
      level: 'success'
    });
  };

  handleOpen = (targetId) => {
    let modalObj = this.state.claimsList.find(function (claim) {
      return claim.id === targetId;
    });
    this.setState({ open: true, modalId: targetId, modalObj });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {

    this._notificationSystem = this.refs.notificationSystem;

    fetch('/api/reports')
      .then(results => results.json())
      .then(results => {
        return this.setState({ claimsList: results })
      })

    //don't know if this is the best way to do this. ****
    this.lookupInterval = setInterval(() => {
      fetch('/api/reports')
        .then(results => results.json())
        .then(results => {
          return this.setState({ claimsList: results })
        })
    }, 500)
  }

  render() {

    return (
      <div className="App">
        <NotificationSystem ref="notificationSystem" />
        <header className="App-header">
          <img src="insure.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to InsuranceBuddy Admin</h1>
        </header>
        <p className="App-intro">
        </p>
        <EnhancedTable
          modalObj={this.state.modalObj}
          tableHelper={this.state.tableHelper}
          modalId={this.state.modalId}
          open={this.state.open}
          handleClose={this.handleClose}
          handleOpen={this.handleOpen}
          claimsList={this.state.claimsList}
          selected={this.state.selected}
        />
        <SimpleModalWrapped
          modalObj={this.state.modalObj}
          modalId={this.state.modalId}
          open={this.state.open}
          handleClose={this.handleClose}
          handleOpen={this.handleOpen}
          claimsList={this.state.claimsList}
          addNotification={this._addNotification} />
      </div>
    )
  }
}

export default Admin;
