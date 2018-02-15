import React from 'react';

const VideoDetail = ({video}) => {
    if(!video) {
        return <div>Loading...</div>
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail-wrapper">
            <iframe src={url} frameBorder="0"></iframe>
            <div className="video-detail-title">{video.snippet.title}</div>
            <div style={{fontSize: "15px"}}>{video.snippet.description}</div>
        </div>
    );
};

export default VideoDetail;