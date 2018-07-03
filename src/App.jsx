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

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
  
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
  
    this.setState({ selected: newSelected });
  };

  handleOpen = (id) => {
    this.setState({ open: true, modalId: id });
  };

  handleClose = (id) => {
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
        <EnhancedTable tableHelper={this.state.tableHelper} modalId={this.state.modalId} open={this.state.open} handleClose={this.handleClose} handleOpen={this.handleOpen} handleClick={this.handleClick} claimsList={this.state.claimsList} selected={this.state.selected} />
        <SimpleModalWrapped modalId={this.state.modalId} open={this.state.open} handleClose={this.handleClose} handleOpen={this.handleOpen} claimsList={this.state.claimsList}/>
      </div>
    )
  }
}

export default App;
