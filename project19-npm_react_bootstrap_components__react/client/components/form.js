import React from 'react';
import { Grid, Row, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }

    this.getValidationState = this.getValidationState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }  

    handleChange(e) {
        this.setState({ value: e.target.value });
    }    

    render() {
        return(
            <Grid>
                <Row>
                    <form style={{marginTop: '50px'}}>
                        <FormGroup
                            controlId="formBasicText"
                            validationState={this.getValidationState()}
                        >
                        <ControlLabel>Working example with validation</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.value}
                            placeholder="Enter text"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                        <HelpBlock>Validation is based on string length.</HelpBlock>
                        </FormGroup>
                    </form>
                </Row>
            </Grid>
        );
    }
}