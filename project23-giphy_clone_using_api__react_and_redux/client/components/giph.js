import React from 'react';

const Giph = (props) => {
    return (
        <div style={{margin: '20px'}}>
            <div style={{
                backgroundImage: `url(${props.image})`,
                backgroundSize: 'cover',
                padding: '10px',
                margin: '10px',
                height: '200px', 
                width: '250px',
            }} />
        </div>
    );
}

export default Giph;