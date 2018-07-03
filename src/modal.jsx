import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import NewReport from './new_form.jsx'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

let counter = 0;
function createData(firstName, lastName, caseNumber) {
  counter += 1;
  return { id: counter, firstName, lastName, caseNumber };
}


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 150,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
  };

//   handleOpen = () => {
//     this.setState({ open: true });
//   };

//   handleClose = () => {
//     this.setState({ open: false });
//   };


  render() {
    const { classes } = this.props;
    console.log(this)

    return (
      <div>
        {/* <Typography gutterBottom>Click to get the full Modal experience!</Typography>
        <Button onClick={this.props.handleOpen}>Open Modal</Button> */}
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.open}
          onClose={this.props.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="title" id="modal-title">
            Damage Report
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
              {/* Duis mollis, est non commodo luctus, nisi erat porttitor ligula. */}
              <NewReport claimsList={this.props.claimsList} modalId={this.props.modalId} modalObj={this.props.modalObj} />
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
