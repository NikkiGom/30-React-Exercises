import React from 'react';

const Thumbnail = (props) => {
    return (
        <div>
            <div className='thumbnail'>{props.name}</div>
        </div>
    );
}

export default Thumbnail;