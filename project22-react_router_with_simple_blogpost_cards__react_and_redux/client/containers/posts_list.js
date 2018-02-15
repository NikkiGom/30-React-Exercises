import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import PostFocus from '../components/post_focus.js';
import { withRouter } from 'react-router';
import Card from '../components/card.js';

class PostsList extends React.Component {
    render() {

        var createCards = this.props.posts.map((post, i) => {
            return (
                <div key={i}>
                    <Link to={`/${post.id}`}>
                        <Card title={post.title} subtitle={post.subtitle} date={post.date} id={post.id}/>
                    </Link>
                </div>
            );
        });

        var createRoutes = this.props.posts.map((post, i) => {
            return (
                <div key={i}>
                <Route exact path={`/${post.id}`} render={() => (
                    <PostFocus content={post.content}/> 
                )}/>
                </div>
            );
        });

        return (
            <div>
                <div style={{display: 'flex', flexDirection: 'row'}} >
                    {createCards}
                </div>
                {createRoutes}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

export default withRouter(connect(mapStateToProps)(PostsList));