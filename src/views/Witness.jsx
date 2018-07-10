import React, { Component } from 'react';
import '../styles/App.css';
import Footer from './Components/Footer.jsx';
import { FormGroup, Radio, Checkbox, FormControl, ControlLabel, Button } from 'react-bootstrap';

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
    opacity: "0.5",
}

const boxStyle = {

    width: "50%",
    height: "90%",
    padding: "50px",
    boxSizing: "border-box",
    marginLeft: "25%"
}

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

export default class Witness extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleSubmit = () => {
        
    }


    render() {
        return (
            <div>
                <div>
                    <div style={bgStyle}>
                        <div style={boxStyle}>
                            <form>
                                <FieldGroup
                                    name="firstName"
                                    id="formControlsText"
                                    type="text"
                                    label="First Name"
                                    placeholder="Enter your first name"
                                />
                                <FieldGroup
                                    name="lastName"
                                    id="formControlsText"
                                    type="text"
                                    label="Last Name"
                                    placeholder="Enter your family name"
                                />
                                <FieldGroup
                                    name="email"
                                    id="formControlsEmail"
                                    type="email"
                                    label="Email address"
                                    placeholder="Enter email"
                                />
                                <FieldGroup
                                    name="phone"
                                    id="formControlsPhone"
                                    type="tel"
                                    label="Phone Number"
                                    placeholder="Enter phone number"
                                />
                                <FormGroup controlId="formControlsTextarea">
                                    <ControlLabel>Testimony</ControlLabel>
                                    <FormControl componentClass="textarea" placeholder="Please give your account of events." />
                                </FormGroup>

                                <Button type="submit">Submit</Button>
                            </form>
                        </div>
                        {businessAddress}
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}