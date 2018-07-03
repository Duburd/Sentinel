import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';

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
  },
  resizeDesc: {
    fontSize: 11,
  },
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

class TextFields extends React.Component {
  state = {
    first_name: 'Aaron',
    last_name: 'Black',
    age: '32',
    multiline: 'Controlled',
    currency: 'USD',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };


  render() {
    const { classes } = this.props;
    return (

      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="uncontrolled"
          label="Policy Number"
          defaultValue={this.props.modalObj.policy_number}
          InputProps={{
            classes: {
              input: classes.resize,
            },
          }}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="name"
          label="First Name"
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
          id="uncontrolled"
          label="Last Name"
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
          id="required"
          label="Case Number"
          InputProps={{
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
          id="required"
          label="Phone Number"
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
          id="uncontrolled"
          label="Vehicle Make"
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
          id="uncontrolled"
          label="Vehicle Model"
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
          id="uncontrolled"
          label="Vehicle Year"
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
          id="uncontrolled"
          label="License plate"
          InputProps={{
            classes: {
              input: classes.resize,
            },
          }}
          defaultValue={this.props.modalObj.license_plate}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="full-width"
          label="Damage Description"
          InputLabelProps={{
            shrink: true,
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
          id="uncontrolled"
          label="Date/Time of incident"
          defaultValue=""
          InputProps={{
            classes: {
              input: classes.resize,
            },
          }}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="uncontrolled"
          label="Location of incident"
          defaultValue=""
          InputProps={{
            classes: {
              input: classes.resize,
            },
          }}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="select-currency-native"
          select
          label="Damage Estimate"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          InputProps={{
            classes: {
              input: classes.resize,
            },
          }}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
        >
          {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="full-width"
          label="Incident Description"
          InputLabelProps={{
            shrink: true,
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
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
