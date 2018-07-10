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
      policyIds: {ids: [], first_names: []},

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

    // let relevantClaimsList = this.props.claimsList.filter(function (claim) {
    //   return claim.policy_number == policyNum;
    // });

    // const policyIds = relevantClaimsList.reduce((prev, pol) => {
    //   prev.ids.push(pol.id);
    //   prev.vehicleids.push(pol.vehicleid);
    //   prev.first_names.push(pol.first_name);
    //   prev.last_names.push(pol.last_name);
    //   prev.plates.push(pol.plate);
    //   return prev
    // }, {
    //   ids: [],
    //   vehicleids: [],
    //   first_names: [],
    //   last_names: [],
    //   plates: [],
    // }) 
    // this.setState({ policyIds })
    
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



  render() {
  
    const { classes } = this.props;
    // const { policyNum, firstName, lastName, phoneNum, make, model, year, licensePlate, damageDescription, incidentTime, location, incidentDescription } = this.state;

    // form also needs crap for damage, incident, etc, and also needs a Submit button
    // return (
    //   <form garbage={garbage}>
    //     <Textfield purpose={"for policy numbers"} />
    //     <MyDropdown name='vehicle' choices={this.getVehicles()} />
    //     <MyDropdown name='user' choices={this.getUsers()} />
    //   </form>
    // );
    
    function prettifyUser(user) {
      return user.id + ' : ' + user.first_name + ' ' + user.last_name;
    }
    
    function prettifyVehicle(vehicle) {
      return vehicle.plate;
    }

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
          <InputLabel htmlFor="user-id">User</InputLabel>
          <Select
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
          <InputLabel htmlFor="vehicle-id">Vehicle</InputLabel>
          <Select
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
        <TextField
          id="incidentTime"
          label="Date/Time of incident"
          name="incidentTime"
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
          className={classes.textField}
          margin="normal"
          onChange={this.handleInputChange}
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
