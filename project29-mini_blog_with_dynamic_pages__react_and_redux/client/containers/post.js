import React from 'react';
import { connect } from 'react-redux';

class Post extends React.Component {
    render() {
        const postId = this.props.match.params.postId;
        const post = this.props.cards[postId];
        return (
            <div>
                <h1>Post</h1>
                <div>{post.title}</div>
                <div>{post.content}</div>
                <div style={{
                    backgroundImage: post.image,
                    backgroundSize: 'cover',
                    padding: '15px',
                    height: '200px',
                    width: '250px'
                }}></div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cards: state.cards
    };
}

export default connect(mapStateToProps)(Post);