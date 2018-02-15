import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

const Images = () => {
    return (
        <Grid>
            <Row>
                <Col xs={6} md={4}>
                    <Image style={{width: '250px', marginTop: '50px'}} src="../client/images/image1.jpg" responsive rounded />
                </Col>
                <Col xs={6} md={4}>
                    <Image style={{width: '250px', marginTop: '50px'}} src="../client/images/image1.jpg" responsive circle />
                </Col>
                <Col xs={6} md={4}>
                    <Image style={{width: '250px', marginTop: '50px'}} src="../client/images/image1.jpg" responsive thumbnail />
                </Col>
            </Row>
        </Grid>
    );
}

export default Images;