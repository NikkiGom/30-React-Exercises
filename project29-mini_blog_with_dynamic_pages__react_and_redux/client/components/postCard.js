import React from 'react';

const PostCard = (props) => {
    return(
        <div style={{margin: '20px'}}>
            <div>
            <span>{props.title}</span> 
            <span style={{float: 'right'}}>{props.date}</span>
            </div>
            <div>{props.subtitle}</div>
            <div>{props.text}</div>
            <div style={{
                backgroundImage: props.backgroundImage,
                backgroundSize: 'cover',
                padding: '15px',
                height: '200px',
                width: '250px'
            }}></div>
            <div>{props.detail}</div>
        </div>
    );  
}

export default PostCard;
