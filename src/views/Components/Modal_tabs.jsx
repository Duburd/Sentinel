import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import UpdateReport from './Update_report.jsx';
import NewReport from './New_report.jsx';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import WitnessPanels from './Witness_panels.jsx'
import Badge from '@material-ui/core/Badge';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabRoot: {
    fontSize: 12,
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },

});


class SimpleTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      media: [],
      test: [],
    };
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };


  componentDidMount() {
    //make sure media fetch isnt happening for new report
    if (this.props.modalObj.id !== 'NEW') {
      fetch(`/api/reports/${this.props.modalObj.id}/media`)
        .then(results => results.json())
        .then(results => {
          const media = results.map((img) => {
            this.props.images.push(img.uri)
            return (
              <img className="pics" key={img.id} src={img.uri} onClick={() => this.props.lightbox()} />
            )
          })
          return this.setState({ media })
        })
    }
  }

  getWitnessLength = () => {
    const { classes } = this.props;
    return this.props.witnessList
      .filter(wit => wit.report_id == this.props.modalObj.id)
      .filter(wit => wit.status == 'Unread')
      .length
  }


  render() {


    const { classes } = this.props;
    const { value } = this.state;


    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label={<span style={{ fontSize: 12 }}>Damage Report</span>} classes={{ root: classes.tabRoot }} />
            <Tab label={<span style={{ fontSize: 12 }}>Pictures</span>} classes={{ root: classes.tabRoot }} />

            {(this.getWitnessLength() > 0) ? <Tab classes={{ root: classes.tabRoot }} label={
              <Badge className={classes.padding} color="secondary" badgeContent={this.getWitnessLength()}>
                <span style={{ fontSize: 12 }}>Witness Testimonies</span>
              </Badge>
            }
            />
              : <Tab label={
                <span style={{ fontSize: 12 }}>Witness Testimonies</span>} classes={{ root: classes.tabRoot }} />
            }
          </Tabs>
        </AppBar>
        {value === 0 &&
          <TabContainer>
            {this.props.modalObj.id === 'NEW'
              ? <NewReport
                usersList={this.props.usersList}
                vehiclesList={this.props.vehiclesList}
                claimsList={this.props.claimsList}
                modalId={this.props.modalId}
                modalObj={this.props.modalObj}
                handleClose={this.props.handleClose}
                addNotification={this.props.addNotification}
              />
              : <UpdateReport
                claimsList={this.props.claimsList}
                modalId={this.props.modalId}
                modalObj={this.props.modalObj}
                handleClose={this.props.handleClose}
                addNotification={this.props.addNotification}
              />
            }
          </TabContainer>}
        {value === 1 &&
          <TabContainer>
            {/* pictures of damaged cars/evidence */}
            {this.state.media}
          </TabContainer>}
        {value === 2 &&
          <TabContainer>
            <WitnessPanels
              claimsList={this.props.claimsList}
              modalId={this.props.modalId}
              modalObj={this.props.modalObj}
              handleClose={this.props.handleClose}
              addNotification={this.props.addNotification}
              witnessList={this.props.witnessList}
            />
          </TabContainer>}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTabs);
