import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
  resize: {
    fontSize: 14,
    height: 13,
    position: 'relative',
  },
  resizeLabel: {
    fontSize: 14,
    height: 13,
    position: 'relative',
    top: 15,
  },
  resizeDesc: {
    fontSize: 11,
  },
  
});

function DateAndTimePickers(props) {
  const { classes } = props;

  return (
    
      <TextField
        id="datetime-local"
        label="Incident Time"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        name="incidentTime"
        className={classes.textField}
        InputLabelProps={{
            shrink: true,
            FormLabelClasses: {
              root: classes.resizeLabel
            },
          }}
          InputProps={{
            classes: {
              input: classes.resize,
            },
          }}
      />
   
  );
}

DateAndTimePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateAndTimePickers);