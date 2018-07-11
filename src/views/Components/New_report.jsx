import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import classNames from 'classnames';
import styled from 'styled-components';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import DatePicker from './Date_picker.jsx'
var moment = require('moment');

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  resize: {
    fontSize: 14,
    height: 15,
  },
  resizeDesc: {
    fontSize: 11,
  },
});

const ModalButton = styled.button`
  background: #3f51b5;
  border-radius: 8px;
  color: white;
  font-size: 14px; 
  padding: 10px;
  margin: 2em 1em 0 0;
  position: relative;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;


class TextFields extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...props.modalObj,
      policyObj: {},
      policyIds: { ids: [], first_names: [] },

      incidentTime: new Date(),

      policyNum: "",
      selectedPolicyNum: "",
      userId: "",
      vehicleId: "",
    }
  }

  newReport(e) {
    e.preventDefault()
    var data = {
      data: { ...this.state, ...this.props }
    }
    console.log(data)
    this.props.handleClose()
    fetch(`/api/reports/new`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(function (response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    }).then(function (data) {
      // if (data == "success") {
      //   this.setState({ msg: "Form submitted" } );
      // }
    }).catch(function (err) {
      console.log(err)
    });
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handlePolicyNum = () => {
    this.setState({
      selectedPolicyNum: this.state.policyNum,
      userId: "",
      vehicleId: "",     // TODO: can delete this?
    })

  }

  getUsers = () => {
    if (!this.state.policyNum) { return []; }   // TODO should be unnecessary?
    return this.props.usersList
      .filter(user => user.policy_number == this.state.policyNum)
      .sort();   // TODO: something more fun
  }

  getVehicles = () => {
    if (!this.state.userId) { return []; }   // TODO should be unnecessary?
    return this.props.vehiclesList
      .filter(v => v.user_id == this.state.userId)
      .sort();   // TODO: something more fun
  }

  handleDateChange = (event, date) => {
    this.setState({ incidentTime: date })
  }

  render() {

    const { classes } = this.props;

    function prettifyUser(user) {
      return `${user.id}: ${user.first_name} ${user.last_name}`;
    }

    function prettifyVehicle(vehicle) {
      return `${vehicle.plate} - ${vehicle.color} ${vehicle.year} ${vehicle.make} ${vehicle.model}`
    }

    const labelStyle = {
      left: 150,
      textSize: 14
    };

    const labelStyle2 = {
      left: 200,
      textSize: 14
    };




    return (
      <form className={classes.container} noValidate autoComplete="on">
        <TextField
          id="policyNum"
          label="Policy Number"
          name="policyNum"
          InputLabelProps={{
            shrink: true,
            FormLabelClasses: {
              root: classes.resize
            },
          }}
          InputProps={{
            classes: {
              input: classes.resize,
            },
          }}
          className={classes.textField}
          margin="normal"
          onChange={this.handleInputChange}
          onBlur={this.handlePolicyNum}
        />

        <FormControl >
          <InputLabel style={labelStyle} htmlFor="user-id">User</InputLabel>
          <Select
            style={{
              width: 350,
              height: 15,
              lineHeight: 0,
              top: 29,
              left: 100,
              position: 'relative',
              fontSize: 14,
            }}
            value={this.state.userId}
            onChange={this.handleInputChange}
            inputProps={{
              name: 'userId',
              id: 'user-id',
            }}
          >
            <MenuItem key={-1} value="">&nbsp;</MenuItem>
            {this.getUsers().map(user => {
              return <MenuItem key={user.id} value={user.id}>{prettifyUser(user)}</MenuItem>
            })}
          </Select>
        </FormControl>

        <FormControl >
          <InputLabel style={labelStyle2} htmlFor="vehicle-id">Vehicle</InputLabel>
          <Select
            style={{
              width: 350,
              height: 15,
              lineHeight: 0,
              left: 150,
              top: 29,
              position: 'relative',
              fontSize: 14,
            }}
            value={this.state.vehicleId}
            onChange={this.handleInputChange}
            inputProps={{
              name: 'vehicleId',
              id: 'vehicle-id',
            }}
          >
            <MenuItem key={-1} value="">&nbsp;</MenuItem>
            {this.getVehicles().map(vehicle => {
              return <MenuItem key={vehicle.id} value={vehicle.id}>{prettifyVehicle(vehicle)}</MenuItem>
            })}
          </Select>
        </FormControl>


        <TextField
          id="damageDescription"
          label="Damage Description"
          name="damage"
          InputLabelProps={{
            shrink: true,
            FormLabelClasses: {
              root: classes.resize
            },
          }}
          InputProps={{
            classes: {
              input: classes.resize,
            },
          }}
          fullWidth
          multiline
          margin="normal"
          onChange={this.handleInputChange}
        />
        <DatePicker
          name="incidentTime"
          onChange={this.handleDateChange}
        />
        <TextField
          id="location"
          label="Location of incident"
          name="location"
          defaultValue=""
          InputLabelProps={{
            shrink: true,
            FormLabelClasses: {
              root: classes.resize
            },
          }}
          InputProps={{
            classes: {
              input: classes.resize,
            },
          }}
          onChange={this.handleInputChange}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="incidentDescription"
          label="Incident Description"
          name="description"
          InputLabelProps={{
            shrink: true,
            FormLabelClasses: {
              root: classes.resize
            },
          }}
          InputProps={{
            classes: {
              input: classes.resizeDesc,
            },
          }}
          onChange={this.handleInputChange}
          fullWidth
          multiline
          margin="normal"
        />
        <ModalButton onClick={(ev) => { this.props.addNotification(ev, 'Report submitted'); this.newReport.bind(this)(ev) }}>Submit Report</ModalButton>
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
