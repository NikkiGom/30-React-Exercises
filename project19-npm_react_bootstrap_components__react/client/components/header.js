import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const Header = () => {
    return (
        <Grid>
            <Row>
                <Col className="logo" xs={12} md={4}>Logo (medium 4)</Col>
                <Col className="Heading" xs={12} md={8}>Heading (medium 8)</Col>
            </Row>
        </Grid>
    );
}

export default Header;