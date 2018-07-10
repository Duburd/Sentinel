import React, { Component } from 'react';
import { FormGroup, Radio, Checkbox, FormControl, ControlLabel, Button } from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

const WitnessForm = (props) => {

    return (
        <form>
            <FieldGroup
                name="reportId"
                id="formControlsText"
                type="text"
                label="Report ID"
                placeholder="Report ID"
                onChange={props.handleInputChange}
            />
            <FieldGroup
                name="firstName"
                id="formControlsText"
                type="text"
                label="First Name"
                placeholder="Enter your first name"
                onChange={props.handleInputChange}
            />
            <FieldGroup
                name="lastName"
                id="formControlsText"
                type="text"
                label="Last Name"
                placeholder="Enter your family name"
                onChange={props.handleInputChange}
            />
            <FieldGroup
                name="email"
                id="formControlsEmail"
                type="email"
                label="Email address"
                placeholder="Enter email"
                onChange={props.handleInputChange}
            />
            <FieldGroup
                name="phone"
                id="formControlsPhone"
                type="tel"
                label="Phone Number"
                placeholder="Enter phone number"
                onChange={props.handleInputChange}
            />
            <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Testimony</ControlLabel>
                <FormControl componentClass="textarea" placeholder="Please give your account of events." onChange={props.handleInputChange} name="testimony" />
            </FormGroup>

            <Button type="submit" onClick={(ev) => { props.addNotification(ev, 'Report submitted'); props.handleSubmit.bind(this)(ev) }}>Submit</Button>
        </form>
    )
}

export default WitnessForm