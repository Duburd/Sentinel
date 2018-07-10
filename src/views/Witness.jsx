import React, { Component } from 'react';
import '../styles/App.css';
import Footer from './Components/Footer.jsx';
import { FormGroup, Radio, Checkbox, FormControl, ControlLabel, Button } from 'react-bootstrap';
import NotificationSystem from 'react-notification-system';
import MediaQuery from 'react-responsive';
import WitnessForm from './Components/WitnessForm.jsx'

const businessAddress = (
    <p className="contactAddress">
        <strong>Sentinel</strong><br />
        The HiVE, 128 W Hastings St #300, <br />
        Vancouver, BC V6B 1G8<br />
        +1 888-569-6898
    </p>
)
const bgStyle = {
    backgroundImage: "url('./Images/AdobeStock_166969870.jpeg')",
    backgroundSize: "cover",
    backgroundRepeat: "repeat-x",
    height: "800px",
    opacity: "1",
}

const boxStyle = {

    width: "50%",
    height: "90%",
    padding: "50px",
    boxSizing: "border-box",
    marginLeft: "25%",
    background: "black",
    opacity: "0.7",
    color: "white",

}

const boxStyleMobile = {

    width: "90%",
    height: "90%",
    padding: "50px",
    boxSizing: "border-box",
    background: "white",
    opacity: "0.8",
    color: "black",

}

export default class Witness extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    _notificationSystem = null

    _addNotification = (event, msg) => {
        event.preventDefault();
        this._notificationSystem.addNotification({
            message: msg,
            level: 'success'
        });
    };

    handleSubmit(e) {
        e.preventDefault()
        var data = {
            data: { ...this.state }
        }
        fetch(`/api/reports/${this.state.reportId}/witness`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function (data) {
            //   if (data == "success") {
            //     this.setState({ msg: "Form submitted" } );
            //   }
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


    componentDidMount() {
        this._notificationSystem = this.refs.notificationSystem;
    }

    render() {
        return (
            <div>
                <NotificationSystem ref="notificationSystem" />

                <div>
                    <MediaQuery query="(min-width: 1224px)">
                        <div style={bgStyle}>
                            <div style={boxStyle}>
                                <WitnessForm
                                    handleInputChange={this.handleInputChange}
                                    handleSubmit={this.handleSubmit}
                                    addNotification={this._addNotification}
                                />
                            </div>
                        </div>
                        {businessAddress}
                        <Footer />
                    </MediaQuery>
                    <MediaQuery query="(max-width: 1224px)">
                        <div style={boxStyleMobile}>
                            <WitnessForm
                                handleInputChange={this.handleInputChange}
                                handleSubmit={this.handleSubmit}
                                addNotification={this._addNotification}
                            />
                        </div>
                    </MediaQuery>
                </div>
            </div>
        );
    }
}