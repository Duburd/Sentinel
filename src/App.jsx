import React, { Component } from 'react';
import './App.css';
import Navvy from './Navbar.jsx';
import EnhancedTable from './enhanced_table.jsx';
import SimpleModalWrapped from './modal.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      claimsList: [],
      selected: [],
      open: false,
    }
  }

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
    }, 2000)
  }

  render() {

    return (
      <div className="App">
        <Navvy />
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
          claimsList={this.state.claimsList} />
      </div>
    )
  }
}

export default App;
