import React, { Component } from 'react';
import '../styles/App.css';
import EnhancedTable from './Components/Enhanced_table.jsx';
import SimpleModalWrapped from './Components/Modal.jsx';
import NotificationSystem from 'react-notification-system';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './Login.jsx';
import { Button as BootButton } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app




class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      claimsList: [],
      selected: [],
      open: false,
      photoIndex: 0,
      isOpen: false,
      images: [],
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

  //for opening/closing main report modal
  handleOpen = (targetId) => {
    let modalObj = {id: 'NEW'}
      if (targetId === 'new') {
          return this.setState({modalId: 'new', open: true, modalObj})
      }
    modalObj = this.state.claimsList.find(function (claim) {
      return claim.id === targetId;
    });
    //clear images as to not let them accumulate in state
    this.setState({ images: [], open: true, modalId: targetId, modalObj });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  lightbox = () => {
    this.setState({ isOpen: true })
    this.handleClose()
  }

  componentDidMount() {

    this._notificationSystem = this.refs.notificationSystem;

    fetch('/api/reports')
      .then(results => results.json())
      .then(results => {
        return this.setState({ claimsList: results })
      })

      fetch('/api/users')
      .then(results => results.json())
      .then(results => {
        return this.setState({ usersList: results })
      })

      fetch('/api/vehicles')
      .then(results => results.json())
      .then(results => {
        return this.setState({ vehiclesList: results })
      })


    //don't know if this is the best way to do this. ****
    this.lookupInterval = setInterval(() => {
      fetch('/api/reports')
        .then(results => results.json())
        .then(results => {
          return this.setState({ claimsList: results })
        })
    }, 2500)
  }

  render() {
    const { photoIndex, isOpen, images } = this.state;

    return (
      <div className="App">
        <BootButton className="newReportButton" onClick={this.handleOpen.bind(this, 'new')}>+ Report</BootButton>
        <NotificationSystem ref="notificationSystem" />
        <header className="App-header">
          <img src="insure.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Sentinel Admin</h1>
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
          vehiclesList={this.state.vehiclesList}
          usersList={this.state.usersList}
          images={this.state.images}
          lightbox={this.lightbox}
          modalObj={this.state.modalObj}
          modalId={this.state.modalId}
          open={this.state.open}
          handleClose={this.handleClose}
          handleOpen={this.handleOpen}
          claimsList={this.state.claimsList}
          addNotification={this._addNotification} />
            {isOpen && (
            <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={() => this.setState({ isOpen: false, images: [] })}
                onMovePrevRequest={() =>
                this.setState({
                    photoIndex: (photoIndex + images.length - 1) % images.length,
                })
                }
                onMoveNextRequest={() =>
                    this.setState({
                        photoIndex: (photoIndex + 1) % images.length,
                    })
                }
                />
                )}
                </div>
                )
            }
        }

export default Admin;
