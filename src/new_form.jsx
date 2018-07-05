import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import styled from 'styled-components';


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
    this.state = {...props.modalObj}
  }



  onChange = (e) => {
    // Because we named the inputs to match their corresponding values in state, it's
    // super easy to update the state
    this.setState({ [e.target.name]: e.target.value });
    console.log('state', this.state)
  }

  handleSubmit(event) {
    event.preventDefault()
    var data = {
      data: {...this.state}
    }
    console.log(data)
    fetch("/reports/update", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
        console.log(data)    
        if(data == "success"){
           this.setState({msg: "Form submitted"});  
        }
    }).catch(function(err) {
        console.log(err)
    });
  }
  
  markAsOpen(e) {
    e.preventDefault();
    fetch(`/api/reports/${this.props.modalObj.id}/status`, {
      method: 'PUT', // or 'POST'
      body: JSON.stringify(this.props.modalObj.id), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }

  markAsClosed(e) {
    e.preventDefault();
    
  }

  render() {
    const { classes } = this.props;
    const { policyNum, firstName, lastName, phoneNum, make, model, year, licensePlate, damageDescription, incidentTime, location, incidentDescription } = this.state;
    return (

      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="policyNum"
          label="Policy Number"
          name="policyNum"
          defaultValue={this.props.modalObj.policy_number}
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
          onChange={this.onChange}
        />

        <TextField
          id="firstName"
          label="First Name"
          name="firstName"
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
          defaultValue={this.props.modalObj.first_name}
          margin="normal"
        />
        <TextField
          id="lastName"
          label="Last Name"
          name="lastName"
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
          defaultValue={this.props.modalObj.last_name}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          required
          id="caseNum"
          label="Case Number"
          name="caseNum"
          disabled
          InputLabelProps={{
            shrink: true,
            FormLabelClasses: {
              root: classes.resize
            },
          }}
          InputProps={{
            readOnly: true,
            classes: {
              input: classes.resize,
            },
          }}
          defaultValue={this.props.modalObj.id}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          required
          id="phoneNum"
          label="Phone Number"
          name="phoneNum"
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
          defaultValue={this.props.modalObj.phone_number}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          required
          id="make"
          label="Vehicle Make"
          name="make"
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
          defaultValue={this.props.modalObj.make}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="model"
          label="Vehicle Model"
          name="model"
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
          defaultValue={this.props.modalObj.model}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="year"
          label="Vehicle Year"
          name="year"
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
          defaultValue={this.props.modalObj.year}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="licencePlate"
          label="License plate"
          name="licensePlate"
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
          defaultValue={this.props.modalObj.license_number}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="damageDescription"
          label="Damage Description"
          name="damageDescription"
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
          defaultValue={this.props.modalObj.damage}
          fullWidth
          multiline
          margin="normal"
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
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="incidentDescription"
          label="Incident Description"
          name="incidentDescription"
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
          defaultValue={this.props.modalObj.description}
          fullWidth
          multiline
          margin="normal"
        />
        <ModalButton onClick={this.markAsOpen.bind(this)}>Mark as Open</ModalButton>
        <ModalButton onClick={this.markAsClosed.bind(this)}>Mark as Closed</ModalButton>
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
