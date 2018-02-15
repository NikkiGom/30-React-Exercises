import React from 'react';
import { Grid, Col, Row, Tabs, Tab } from 'react-bootstrap';

export default class MyTabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            key: 1
        }

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(key) {
        this.setState({ key: key });
    }

    render() {
        return(
            <Grid>
                <Row>
                    <Tabs style={{marginTop: '50px'}} activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab">
                        <Tab style={{marginTop: '20px'}} eventKey={1} title="Tab 1">Tab 1 content</Tab>
                        <Tab style={{marginTop: '20px'}} eventKey={2} title="Tab 2">Tab 2 content</Tab>
                        <Tab style={{marginTop: '20px'}} eventKey={3} title="Tab 3">Tab 3 content</Tab>
                    </Tabs>
                </Row>
            </Grid>
        );
    }
}