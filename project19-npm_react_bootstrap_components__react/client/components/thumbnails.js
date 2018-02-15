import React from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';

const Thumbnails = () => {
    return (
        <Grid>
        <Row>
          <Col xs={6} md={4}>
            <Thumbnail style={{marginTop: '50px', width: '250px'}} src="../client/images/image1.jpg" alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Button</Button>
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail style={{marginTop: '50px', width: '250px'}} src="../client/images/image1.jpg" alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Button</Button>
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail style={{marginTop: '50px', width: '250px'}} src="../client/images/image1.jpg" alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Button</Button>
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    );
}

export default Thumbnails;