import React from 'react';
import PostsList from '../containers/posts_list.js';
import { connect } from 'react-redux';

export default class App extends React.Component {
    render() {
        return(
            <div>
                <PostsList />
            </div>
        );
    }
}


