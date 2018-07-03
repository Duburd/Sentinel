import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

let counter = 0;
function createData(firstName, lastName, caseNumber) {
  counter += 1;
  return { id: counter, firstName, lastName, caseNumber };
}

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
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };


  render() {
    const { classes } = this.props;
    console.log(this.props.modalId)
    return (

      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="uncontrolled"
          label="Policy Number"
          defaultValue="1238712983719823"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="name"
          label="First Name"
          className={classes.textField}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          id="uncontrolled"
          label="Last Name"
          defaultValue={this.state.last_name}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          required
          id="required"
          label="Case Number"
          defaultValue="123456"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          required
          id="required"
          label="Phone Number"
          defaultValue="(902)123-4567"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          required
          id="uncontrolled"
          label="Vehicle Make"
          defaultValue="Toyota"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="uncontrolled"
          label="Vehicle Model"
          defaultValue="Corolla"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="uncontrolled"
          label="Vehicle Year"
          value="2000"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="uncontrolled"
          label="License plate"
          defaultValue="AAA000"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="full-width"
          label="Damage Description"
          InputLabelProps={{
            shrink: true,
          }}
          defaultValue="Spicy jalapeno bacon ipsum dolor amet culpa anim irure shoulder ground round aliqua hamburger aliquip leberkas. Shank flank irure pancetta, in aliquip laboris swine ribeye turkey frankfurter boudin dolore strip steak anim. Ham incididunt sint meatloaf aliquip ut capicola frankfurter nisi aute beef, shankle commodo. Voluptate laboris eu cupim, salami tenderloin laborum. Pastrami meatball est veniam turducken in, qui ribeye rump occaecat consequat. Minim tail shoulder, turkey short ribs lorem pork loin. Magna ball tip frankfurter ullamco chicken, fatback alcatra dolore reprehenderit sausage brisket."
          fullWidth
          multiline
          margin="normal"
        />
        <TextField
          id="uncontrolled"
          label="Date/Time of incident"
          defaultValue=""
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="uncontrolled"
          label="Location of incident"
          defaultValue=""
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
          defaultValue="Spicy jalapeno bacon ipsum dolor amet culpa anim irure shoulder ground round aliqua hamburger aliquip leberkas. Shank flank irure pancetta, in aliquip laboris swine ribeye turkey frankfurter boudin dolore strip steak anim. Ham incididunt sint meatloaf aliquip ut capicola frankfurter nisi aute beef, shankle commodo. Voluptate laboris eu cupim, salami tenderloin laborum. Pastrami meatball est veniam turducken in, qui ribeye rump occaecat consequat. Minim tail shoulder, turkey short ribs lorem pork loin. Magna ball tip frankfurter ullamco chicken, fatback alcatra dolore reprehenderit sausage brisket."
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
