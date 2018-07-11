import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';

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

    getWitnesses = () => {
        const { classes } = this.props;
        return this.props.witnessList
            .filter(wit => wit.report_id == this.props.modalObj.id)
            .map(wit => (
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>
                            <Chip style={{ width: 100, background: 'white', color: 'black' }} label={wit.first_name} className={classes.chip}></Chip>
                            <Chip style={{ width: 100, background: 'white', color: 'black' }} label={wit.last_name} className={classes.chip}></Chip>
                            <Chip style={{ width: 150, background: 'white', color: 'blue' }} label={wit.email} className={classes.chip}></Chip>
                            <Chip style={{ width: 150, background: 'white', color: 'black' }} label={wit.phone_number} className={classes.chip}></Chip>
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography className={classes.heading}>
                            {wit.testimony}
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            ))
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