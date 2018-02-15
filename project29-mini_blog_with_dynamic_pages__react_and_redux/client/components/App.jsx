import React from 'react';
import PostCards from '../containers/postCards.js';
import Post from '../containers/post.js';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';

export default class App extends React.Component {
    render() {
        return(
            <Switch>
                <Route exact path='/' component={PostCards}/>
                <Route path='/:postId' component={Post}/>
            </Switch>
        );
    }
}




