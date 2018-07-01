import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class MainTable extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>Case #</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark McDonald</td>
          <td>T-boned by a lawnmower.</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob Jacobson</td>
          <td>Rear ended by a tractor.</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry Lemonade</td>
          <td>Fender bender. $2500 Estimate.</td>
        </tr>
      </tbody>
    </Table>
    );
  }
}

export default MainTable;
