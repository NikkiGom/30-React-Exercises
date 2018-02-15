import React from 'react';

const Card = (props) => {
    return (
        <div style={{margin: '50px'}}>
            <div>{props.title}</div>
            <div>{props.subtitle}</div>
            <div>{props.date}</div>
        </div>
    );
}

export default Card;