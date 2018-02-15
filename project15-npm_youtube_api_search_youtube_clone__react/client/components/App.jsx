import React from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './search_bar.js';
import VideoList from './video_list.js';
import VideoDetail from './video_detail.js';

const API_KEY = 'AIzaSyDQRaNxrcyXs-cmsdZ4ydRPJPOZNZ7WE04';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('learning redux');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
        return(
            <div className="container">
                <SearchBar onSearchTermChange={videoSearch}/>
                <div className="videos-wrapper">
                    <VideoDetail video={this.state.selectedVideo}/>
                    <VideoList 
                        videos={this.state.videos}
                        onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
                </div>
            </div>
        );
    }
}