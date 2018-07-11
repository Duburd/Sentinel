import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: 18,
        fontWeight: theme.typography.fontWeightRegular,
    },
    chip: {
        margin: theme.spacing.unit,
        fontSize: 14
    },
});

class SimpleExpansionPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            witnessObj: null
        }
    }

    handleWitClick = (e, id) => {
            e.preventDefault();
            fetch(`/api/reports/${id}/witnessstatus`, {
              method: 'PUT', // or 'POST'
              body: JSON.stringify(
                {
                  status: "Read"
                }
              ), // data can be `string` or {object}!
              headers: {
                'Content-Type': 'application/json'
              }
            }).then(res => res.json())
              .catch(error => console.error('Error:', error))
              .then(response => console.log('Success:', response));
          }
        
    

    getWitnesses = () => {
        const { classes } = this.props;
        return this.props.witnessList
            .filter(wit => wit.report_id == this.props.modalObj.id)
            .map(wit => (
                <ExpansionPanel onChange={(e) => {this.handleWitClick.bind(this)(e, wit.id)}}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>

                        <Typography className={classes.heading}>
                            {wit.status == 'Read'
                                ? <Chip style={{ width: 100, background: 'white', color: 'black' }} label={wit.first_name} className={classes.chip}></Chip>
                                : <Chip style={{ width: 100, background: 'lightgray', color: 'black' }} label={wit.first_name} className={classes.chip}></Chip>
                            }
                            {wit.status == 'Read'
                                ? <Chip style={{ width: 150, background: 'white', color: 'blue' }} label={wit.last_name} className={classes.chip}></Chip>
                                : <Chip style={{ width: 150, background: 'lightgray', color: 'black' }} label={wit.last_name} className={classes.chip}></Chip>
                            }
                            {wit.status == 'Read'
                                ? <Chip style={{ width: 100, background: 'white', color: 'black' }} label={wit.email} className={classes.chip}></Chip>
                                : <Chip style={{ width: 100, background: 'lightgray', color: 'black' }} label={wit.email} className={classes.chip}></Chip>
                            }
                            {wit.status == 'Read'
                                ? <Chip style={{ width: 150, background: 'white', color: 'blue' }} label={wit.phone_number} className={classes.chip}></Chip>
                                : <Chip style={{ width: 150, background: 'lightgray', color: 'black' }} label={wit.phone_number} className={classes.chip}></Chip>
                            }
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography className={classes.heading}>
                            {wit.testimony}
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            )).splice(0).reverse();
    }

    render() {
        console.log(this.props.witnessList)
        const { classes } = this.props;
        return (

            <div className={classes.root}>
                {this.getWitnesses()}
            </div>
        );
    }
}

SimpleExpansionPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);