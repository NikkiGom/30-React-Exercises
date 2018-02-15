import React from 'react';

const ListItem = (props) => {
    return (
        <div className="infinite-list-item">
            List Item {props.num}
        </div>
    );
};

export default ListItem