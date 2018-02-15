import React from 'react';
import { Col } from 'react-bootstrap';

const Grid = (props) => {
    return(
        <Col xs={12} md={4}>
            <div className="grid">
                <h1>{props.title}</h1>
                <div>{props.location}</div>
                <div>{props.date}</div>
                <div>{props.time}</div>
                <div>{props.description}</div>
            </div>
        </Col>
    );
};

export default Grid;
