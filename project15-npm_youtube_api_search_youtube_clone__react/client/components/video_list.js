import React from 'react';
import VideoListItem from './video_list_item.js'

const VideoList = (props) => {
    const videoItems = props.videos.map((video, i) => {
        return <VideoListItem onVideoSelect={props.onVideoSelect} key={i} video={video}/>
    });
    return (
        <ul>
            {videoItems}
        </ul>
    )
}

export default VideoList