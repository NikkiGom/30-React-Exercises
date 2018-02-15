import React from 'react';

const ClickNext = (props) => {
    return (
        <div className='clickNext' onClick={props.slideLeft}>
            next
        </div>
    );
}

export default ClickNext;