import React, { Component } from 'react';
import './App.css';
import Navvy from './Navbar.jsx';
import EnhancedTable from './enhanced_table.jsx';
import SimpleModalWrapped from './modal.jsx';

// let counter = 0;
// function createData(description, caseNumber, client, reportDate, status) {
//   counter += 1;
//   return { id: counter, description, caseNumber, client, reportDate, status };
// }



String.prototype.trunc = String.prototype.trunc ||
  function(n){
      return (this.length > n) ? this.substr(0, n-1) + ' ...' : this;
  };

function chopDate(str) {
  return str.slice(0,-5).replace("T", " at ");
}



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      claimsList: [],
      selected: [],
      open: false,
    }
  }


  handleOpen = (id) => {
    let modalObj = this.state.claimsList[id - 1];
    this.setState({ open: true, modalId: id, modalObj });
  };

  handleClose = () => {
    this.setState({ open: false, modalId: false });
  };

  componentDidMount() {
    fetch('/api/fullreports')
    .then(results => results.json())
    .then(results => {
      return this.setState({claimsList:results})
    })
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
        <SimpleModalWrapped modalObj={this.state.modalObj} modalId={this.state.modalId} open={this.state.open} handleClose={this.handleClose} handleOpen={this.handleOpen} claimsList={this.state.claimsList}/>
      </div>
    )
  }
}

export default App;
