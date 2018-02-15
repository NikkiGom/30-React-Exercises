import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li style={{
                display: "flex", 
                flexDirection: "row", 
                alignItems: "center"
            }} 
            onClick={() => onVideoSelect(video)
        }>
            <div>
                <img src={imageUrl}/>
            </div>
            <div style={{
                    padding: "0px 10px 10px 10px", 
                    lineHeight: "25px",
                    cursor: "pointer"
            }}>
                {video.snippet.title}
            </div>
        </li>
    );
};

export default VideoListItem;
