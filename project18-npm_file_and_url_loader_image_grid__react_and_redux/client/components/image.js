import React from 'react';

const Image = (props) => {
    return(
            <div style={{
                backgroundImage: props.source,
                borderRadius: '5px',
                backgroundSize: 'cover',
                padding: '10px',
                margin: '20px',
                height: '200px', 
                width: '250px',
            }}>
            {props.image}
            </div>
    );
}

export default Image;
