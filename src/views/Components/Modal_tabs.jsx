import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import UpdateReport from './Update_report.jsx';
import NewReport from './New_report.jsx';

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

});

class SimpleTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label={<span style={{ fontSize: 12 }}>Damage Report</span>} classes={{ root: classes.tabRoot }} />
            <Tab label={<span style={{ fontSize: 12 }}>Pictures</span>} classes={{ root: classes.tabRoot }} />
          </Tabs>
        </AppBar>
        {value === 0 &&
          <TabContainer>
            {this.props.modalObj.id === 'NEW'
              ? <NewReport
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
            <img className="pics" src={this.props.modalObj.uri}
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
