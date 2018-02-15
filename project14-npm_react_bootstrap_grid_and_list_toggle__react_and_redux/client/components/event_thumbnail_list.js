import React from 'react';
import { Col } from 'react-bootstrap';

const List = (props) => {
    return(
        <Col xs={12} md={9}>
            <div className="list">
                <div>{props.title}</div>
                <div style={{fontSize: '15px', marginTop: '7px'}}>{props.description}</div>
            </div>
        </Col>
    );
};

export default List;