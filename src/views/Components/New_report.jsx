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
    this.state = { ...props.modalObj }
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


  render() {
    const { classes } = this.props;
    // const { policyNum, firstName, lastName, phoneNum, make, model, year, licensePlate, damageDescription, incidentTime, location, incidentDescription } = this.state;
    return (
      <form className={classes.container} noValidate autoComplete="on">
        <TextField
          id="policyNum"
          label="Policy Number"
          name="policyNum"
          defaultValue={this.props.modalObj.userid}
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
          value={this.state.policyNum}
          onChange={this.handleInputChange}
        />
        <TextField
          id="vehicleId"
          label="Vehicle Id"
          name="vehicleId"
          defaultValue={this.props.modalObj.plate}
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
          defaultValue={this.props.modalObj.damage}
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
          defaultValue={this.props.modalObj.description}
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
