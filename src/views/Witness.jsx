import React, { Component } from 'react';
import '../styles/App.css';
import Footer from './Components/Footer.jsx';
import { FormGroup, Radio, Checkbox, FormControl, ControlLabel, Button } from 'react-bootstrap';
import NotificationSystem from 'react-notification-system';
import MediaQuery from 'react-responsive';
// import WitnessForm from './Components/WitnessForm.jsx'

const queryString = require('query-string');
const parsedUrl = queryString.parse(location.search);
const reportIdParsed = parsedUrl.reportId;

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

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
        console.log(data)
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

        this.setState({ reportId: reportIdParsed })
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
                                <form>
                                    <FieldGroup
                                        name="reportId"
                                        id="formControlsText"
                                        type="text"
                                        label="Report ID"
                                        placeholder="Report ID"
                                        defaultValue={reportIdParsed}
                                        onChange={this.handleInputChange}
                                    />
                                    <FieldGroup
                                        name="firstName"
                                        id="formControlsText"
                                        type="text"
                                        label="First Name"
                                        placeholder="Enter your first name"
                                        onChange={this.handleInputChange}
                                    />
                                    <FieldGroup
                                        name="lastName"
                                        id="formControlsText"
                                        type="text"
                                        label="Last Name"
                                        placeholder="Enter your family name"
                                        onChange={this.handleInputChange}
                                    />
                                    <FieldGroup
                                        name="email"
                                        id="formControlsEmail"
                                        type="email"
                                        label="Email address"
                                        placeholder="Enter email"
                                        onChange={this.handleInputChange}
                                    />
                                    <FieldGroup
                                        name="phone"
                                        id="formControlsPhone"
                                        type="tel"
                                        label="Phone Number"
                                        placeholder="Enter phone number"
                                        onChange={this.handleInputChange}
                                    />
                                    <FormGroup controlId="formControlsTextarea">
                                        <ControlLabel>Testimony</ControlLabel>
                                        <FormControl componentClass="textarea" placeholder="Please give your account of events." onChange={this.handleInputChange} name="testimony" />
                                    </FormGroup>

                                    <Button type="submit" onClick={(ev) => { this._addNotification(ev, 'Report submitted'); this.handleSubmit.bind(this)(ev) }}>Submit</Button>
                                </form>
                            </div>
                        </div>
                        {businessAddress}
                        <Footer />
                    </MediaQuery>
                    <MediaQuery query="(max-width: 1224px)">
                        <div style={boxStyleMobile}>
                            <form>
                                <FieldGroup
                                    name="reportId"
                                    id="formControlsText"
                                    type="text"
                                    label="Report ID"
                                    placeholder="Report ID"
                                    defaultValue={parsedUrl}
                                    onChange={this.handleInputChange}
                                />
                                <FieldGroup
                                    name="firstName"
                                    id="formControlsText"
                                    type="text"
                                    label="First Name"
                                    placeholder="Enter your first name"
                                    onChange={this.handleInputChange}
                                />
                                <FieldGroup
                                    name="lastName"
                                    id="formControlsText"
                                    type="text"
                                    label="Last Name"
                                    placeholder="Enter your family name"
                                    onChange={this.handleInputChange}
                                />
                                <FieldGroup
                                    name="email"
                                    id="formControlsEmail"
                                    type="email"
                                    label="Email address"
                                    placeholder="Enter email"
                                    onChange={this.handleInputChange}
                                />
                                <FieldGroup
                                    name="phone"
                                    id="formControlsPhone"
                                    type="tel"
                                    label="Phone Number"
                                    placeholder="Enter phone number"
                                    onChange={this.handleInputChange}
                                />
                                <FormGroup controlId="formControlsTextarea">
                                    <ControlLabel>Testimony</ControlLabel>
                                    <FormControl componentClass="textarea" placeholder="Please give your account of events." onChange={this.handleInputChange} name="testimony" />
                                </FormGroup>

                                <Button type="submit" onClick={(ev) => { this.addNotification(ev, 'Report submitted'); this.handleSubmit(ev) }}>Submit</Button>
                            </form>
                        </div>
                    </MediaQuery>
                </div>
            </div>
        );
    }
}