import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import PostCards from '../containers/postCards.js';

import Post1 from '../components/post1.js';
import Post2 from '../components/post2.js';
import Post3 from '../components/post3.js';

class App extends React.Component {
    render() {
        const blogPosts = {
            Post1,
            Post2,
            Post3
        };

        var createRoutes = this.props.cards.map((card, i) => {
            return <Route key={i} exact path={`/${card.title}`} exact component={blogPosts[card.id]}/>
        });
        return(
            <Switch>
                <Route exact path='/' component={PostCards}/>
                {createRoutes}
            </Switch>
        );
    }
}

function mapStateToProps(state) {
    return {
        cards: state.cards
    }
}

export default withRouter(connect(mapStateToProps)(App));